import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import BpkText from 'bpk-component-text';
import BpkLongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import { minutesToHoursMinutes } from '../../../../utils';

import './LegRow.scss';

const LegRow = ({ leg }) => {
  const { Arrival, Departure, Destination, Origin, Duration, Stops } = leg;

  return (
    <div className='flex flex-row'>

      <img className='icon-radius' src='https://logos.skyscnr.com/images/airlines/favicon/EZ.png' alt='icon' height='24' width='24' />

      <div className='flex flex-column padded'>
        <div className='flex flex-row'>
          <BpkText tagName="span" textStyle="base">
            {moment(Departure).format('HH:mm')}
          </BpkText>
        </div>
        <div className='flex flex-row'>
          <BpkText className='city-code' tagName="span" textStyle="base">
            {Destination.Code}
          </BpkText>
        </div>
      </div>

      <BpkLongArrowRightIcon className='leg-icon__long-right-arrow'/>

      <div className='flex flex-column padded'>
        <div className='flex flex-row'>
          <BpkText tagName="span" textStyle="base">
            {moment(Arrival).format('HH:mm')}
          </BpkText>
        </div>
        <div className='flex flex-row'>
          <BpkText className='city-code' tagName="span" textStyle="base">
            {Origin.Code}
          </BpkText>
        </div>
      </div>

      <div className='flight-information flex flex-column'>
        <div className='flex flex-row'>
          <BpkText className='flight-information__duration' tagName="span" textStyle="sm">
            {minutesToHoursMinutes(Duration)}
          </BpkText>
        </div>
        <div className='flex flex-row'>
            {
              (Stops.length > 0)
                ? <BpkText className='flight-information__stop-indirect' tagName="span" textStyle="sm">
                    {Stops.length}+ stops
                  </BpkText>

                : <BpkText className='flight-information__stop-direct' tagName="span" textStyle="sm">
                    direct
                  </BpkText>
            }
        </div>
      </div>

    </div>
  )
};

LegRow.PropTypes = {
  leg: PropTypes.object.isRequired,
};

export default LegRow;