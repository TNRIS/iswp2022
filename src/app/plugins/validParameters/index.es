
import R from 'ramda';

import db from 'db';

import {sourceNames} from '../../public/src/utils/SourceNames';

/**
 * Returns a Promise that resolves to an array of distinct values 
 * for 'prop' from 'table'
 * @param {string} prop - the property to query
 * @param {string} table - the table to query
 * @return {array} distinct values for that property
 */
function distinctValues(prop, table) {
  return db.distinct(prop).orderBy(prop).from(table).then(R.pluck([prop]));
}

/**
 * Returns an array of distinct sources
 * @return {array} - distinct data sources?
 */
function distinctSources() {
  const sourceid = (x) => x['sourceid'];
  const diff = (a, b) => a - b;
  return R.sort(diff, R.map(sourceid, sourceNames));
}

const validParametersModule = {
  register: (server, options, next) => {
    const dbPromises = [];
    dbPromises.push(
      distinctValues('WugCounty', 'vwSelectEntitiesInCounty'));
    dbPromises.push(
      distinctValues('WugRegion', 'vwSelectEntitiesInRegion'));
    dbPromises.push(distinctValues('EntityId', 'vwEntityCoordinates'));
    dbPromises.push(distinctValues('WugType', 'vwWugDemand'));
    dbPromises.push(distinctValues('WmsProjectId', 'vwWMSProjects'));
    dbPromises.push(distinctValues('WmsId', 'vwWMSWugSupply'));
    dbPromises.push(distinctValues('WmsType', 'vwWMSProjectsByWmsType'));
    dbPromises.push(distinctSources());

    Promise.all(dbPromises)
      .then(([counties, regions, entityIds, usageTypes, projects, wms, wmsType, sources]) => {
        // save the names and ids to the server object for 
        // use by route validation rules

        // Added because there are no project for DROUGHT MANAGEMENT
        if (!wmsType.includes('DROUGHT MANAGMENT')) {
          R.sort(wmsType.push('DROUGHT MANAGEMENT'));
        }

        server.expose({
          counties,
          regions,
          entityIds,
          usageTypes,
          projects,
          wms,
          wmsType,
          sources
        });
        next();
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  },
};


validParametersModule.register.attributes = {
  name: 'validParameters',
  version: '1.0.0',
};

export default validParametersModule;
