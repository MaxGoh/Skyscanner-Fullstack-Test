import React from 'react'
import PropTypes from 'prop-types';
import ItineryCard from './ItineryCard';
import { BpkGridContainer, BpkGridRow } from 'bpk-component-grid';
import _ from 'lodash';

import './ItineryResultContainer.scss';

const ItineryResultContainer = ({ itineries, currency }) => (
  <div className='itinery-result-container'>
    <BpkGridContainer>
      {
        itineries.map((itinery, index) => {
          return (
            <div className='itinery-card-wrapper' key={index}>
              <ItineryCard
                itinery={itinery}
                currency={currency}
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
  currency: PropTypes.string.isRequired
}

export default ItineryResultContainer