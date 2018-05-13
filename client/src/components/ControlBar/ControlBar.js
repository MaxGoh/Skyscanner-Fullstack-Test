import React from 'react';
import BpkLargePriceAlertIcon from 'bpk-component-icon/lg/price-alerts';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn
} from 'bpk-component-grid';

import './ControlBar.scss';

const ControlBar = () => (
  <BpkGridContainer className='control-bar'>
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
          Price alerts
        </span>
      </BpkGridColumn>
    </BpkGridRow>u
  </BpkGridContainer>
);

export default ControlBar;
