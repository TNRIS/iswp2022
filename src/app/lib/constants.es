export default {
  YEARS: ['2020', '2030', '2040', '2050', '2060', '2070'],
  VALUE_PREFIXES: {
    demands: 'D',
    needs: 'N',
    supplies: 'WS',
    strategies: 'SS',
    population: 'P'
  },
  DATA_TABLES: {
    demands: 'vwWugDemand',
    needs: 'vwWugNeeds',
    supplies: 'vwExistingWugSupply',
    population: 'vwWugPopulation',
    strategies: 'vwWMSWugSupply'
  },
  SOURCE_TABLES: {
    supplies: 'vwExistingWugSupply',
    strategies: 'vwWMSWugSupply'
  },
  PROJECT_TABLES: {
    strategies: 'vwWMSProjectByEntityWUGSplit',
    wms: 'vwWMSProjectByWMS'
  },
  API_CACHE_EXPIRES_IN: 60 * 60 * 24 * 1000
};
