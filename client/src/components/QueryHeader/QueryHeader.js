import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';
import BpkLongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import { BpkGridContainer } from 'bpk-component-grid';

import './QueryHeader.scss';

const QueryHeader = ({
  numOfTravellers, cabinClass, originPlace, destinationPlace
}) => (
  <div className='query-header'>
    <BpkGridContainer className='query-header__container'>
      <BpkText textStyle='xxl'>
        {originPlace} <BpkLongArrowRightIcon className='icon__long-right-arrow'/> {destinationPlace}
      </BpkText>
      <BpkText tagName='p'>
        {numOfTravellers} travellers, {cabinClass}
      </BpkText>
    </BpkGridContainer>
  </div>
);

QueryHeader.propTypes = {
  numOfTravellers: PropTypes.number.isRequired,
  cabinClass: PropTypes.string.isRequired,
  originPlace: PropTypes.string.isRequired,
  destinationPlace: PropTypes.string.isRequired
};

export default QueryHeader;
