
import PropTypes from 'prop-types';
import React from 'react';
import constants from '../constants';
import RegionDescriptions from '../utils/RegionDescriptions';

export default class extends React.Component {
  static propTypes = {
    region: PropTypes.oneOf(constants.REGIONS).isRequired
  };

  render() {
    const region = this.props.region;
    const link = "http://www.twdb.texas.gov/waterplanning/rwp/plans/2021/index.asp";
    return (
      <div>
        <p>
          {RegionDescriptions.description[region]} <a href={link}>{link}</a>.
        </p>
      </div>
    );
  }
}
