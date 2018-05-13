import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import BpkText from 'bpk-component-text';
import BpkLongArrowRightIcon from 'bpk-component-icon/sm/long-arrow-right';
import minutesToHoursMinutes from '../../../../utils/minutesToHoursMinutes';

import './LegRow.scss';

const LegRow = ({
  leg: {
    Arrival,
    Departure,
    DestinationStation,
    OriginStation,
    Duration,
    Stops
  }
}) => (
  <div className='flex flex-row'>

    <img className='icon-radius' src='https://logos.skyscnr.com/images/airlines/favicon/EZ.png' alt='icon' height='24' width='24' />

    <div className='flex flex-column padded'>
      <div className='flex flex-row'>
        <BpkText tagName="p">
          {moment(Departure).format('HH:mm')}
        </BpkText>
      </div>
      <div className='flex flex-row'>
        <BpkText className='display-code' tagName="p">
          {DestinationStation.Code}
        </BpkText>
      </div>
    </div>

    <div className='flex flex-vertical'>
      <BpkLongArrowRightIcon className='leg-icon__long-right-arrow'/>
    </div>

    <div className='flex flex-column padded'>
      <div className='flex flex-row'>
        <BpkText tagName="p">
          {moment(Arrival).format('HH:mm')}
        </BpkText>
      </div>
      <div className='flex flex-row'>
        <BpkText className='display-code' tagName='p'>
          {OriginStation.Code}
        </BpkText>
      </div>
    </div>

    <div className='flight-information flex flex-column'>
      <div className='flex flex-row'>
        <BpkText className='flight-information__duration' textStyle='sm'>
          {minutesToHoursMinutes(Duration)}
        </BpkText>
      </div>
      <div className='flex flex-row'>
          {
            (Stops.length > 0)
              ? <BpkText className='flight-information__stop-indirect' textStyle='sm'>
                  {Stops.length}+ stops
                </BpkText>

              : <BpkText className='flight-information__stop-direct' textStyle='sm'>
                  Direct
                </BpkText>
          }
      </div>
    </div>

  </div>
);

LegRow.PropTypes = {
  leg: PropTypes.object.isRequired,
};

export default LegRow;
