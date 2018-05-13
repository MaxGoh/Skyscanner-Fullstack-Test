import React from 'react'
import PropTypes from 'prop-types';
import ItineryCard from './ItineryCard';
import { BpkGridContainer } from 'bpk-component-grid';

import './ItineryResultContainer.scss';

const ItineryResultContainer = ({ itineries, currencySymbol }) => (
  <div className='itinery-result-container'>
    <BpkGridContainer>
      {
        itineries.map((itinery, index) => {
          return (
            <div className='itinery-card-wrapper' key={index}>
              <ItineryCard
                itinery={itinery}
                currencySymbol={currencySymbol}
              />
            </div>
          )
        })
      }
    </BpkGridContainer>
  </div>
)

ItineryResultContainer.PropTypes = {
  itineries: PropTypes.array.isRequired,
  currencySymbol: PropTypes.string.isRequired
}

export default ItineryResultContainer
