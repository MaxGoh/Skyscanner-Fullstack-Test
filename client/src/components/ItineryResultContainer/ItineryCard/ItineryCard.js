import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import LegRow from './LegRow';
import SelectRow from './SelectRow';

import './ItineryCard.scss';

const ItineryCard = ({ itinery, currencySymbol }) => {
  const { Price, Agents } = itinery.PricingOptions[0];
  let agentName;
  (Agents.length > 0) ? agentName = Agents[0].Name : agentName = '';
  return (
    <BpkCard>
      <div className='itinery-card-row'>
        <LegRow leg={itinery.InboundLegId} />
      </div>
      <div className='itinery-card-row'>
        <LegRow leg={itinery.OutboundLegId} />
      </div>
      <div>
        <SelectRow
          price={Price}
          currencySymbol={currencySymbol}
          agentName={agentName}
        />
      </div>
    </BpkCard>
  )
}

ItineryCard.PropTypes = {
  itinery: PropTypes.object.isRequired,
  currencySymbol: PropTypes.string.isRequired
}

export default ItineryCard;
