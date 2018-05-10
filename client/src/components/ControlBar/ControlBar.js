import React from 'react'
import PropTypes from 'prop-types';
import BpkLargePriceAlertIcon from 'bpk-component-icon/lg/price-alerts';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';

import './ControlBar.scss';

const ControlBar = () => (
  <div className='control-bar'>
    <BpkGridContainer>
      <BpkGridRow>
        <BpkGridColumn width={2}>
          Filter
        </BpkGridColumn>
        <BpkGridColumn width={2}>
          Sort
        </BpkGridColumn>
        <BpkGridColumn offset={3} width={5}>
          <span className='control-bar__price-alert'>
            <BpkLargePriceAlertIcon className='icon__price-alert' />
            Prices Alerts
          </span>
        </BpkGridColumn>
      </BpkGridRow>
    </BpkGridContainer>
  </div>
)

export default ControlBar