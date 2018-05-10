import React from 'react';
import PropTypes from 'prop-types';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';

import './SelectRow.scss';

const SelectRow = ({ price, currency, agentName }) => {
  return (
    <div className='flex flex-row select-row'>
      <div className='flex flex-column'>
        <div>
          <BpkText tagName="span" textStyle="lg">
            {currency}{Math.floor(price)}
          </BpkText>
        </div>
        <div>
          <BpkText className='agent-name' tagName="span" textStyle="base">
            {agentName} 
          </BpkText>
        </div>
      </div>
      <div className='select-button-container'>
        <BpkButton>Select</BpkButton>
      </div>
    </div>

  )
};

SelectRow.PropTypes = {
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  agentName: PropTypes.string.isRequired
}

export default SelectRow;