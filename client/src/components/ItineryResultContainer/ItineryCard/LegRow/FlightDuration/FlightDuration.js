import React from 'react';
import PropTypes from 'prop-types';
import BpkLongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';

const FlightDuration = ({
  departureTime, departureCode, arrivalTime, arrivalCode
}) => (
  <div style={{ display: 'flex' }}className='flight-duration'>

    <div style={{ flexDirection: 'column' }}>
      <div>
        {departureTime}
      </div>
      <div>
        {departureCode}
      </div>
    </div>

    <div style={{ display: 'table' }}>
      <BpkLongArrowRightIcon style={{ display: 'table-cell', verticalAlign: 'middle' }}/>
    </div>

    <div style={{ flexDirection: 'column' }}>
      <div>
        {arrivalTime}
      </div>
      <div>
        {arrivalCode}
      </div>
    </div>

  </div>
);

FlightDuration.PropTypes = {
  departureTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  departureCode: PropTypes.string.isRequired,
  arrivalCode: PropTypes.string.isRequired
};

export default FlightDuration;