import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import LegRow from './LegRow';
import SelectRow from './SelectRow';

import './ItineryCard.scss';

const ItineryCard = ({ itinery, currency }) => {
  const { Price, Agents, Agent } = itinery.PricingOptions[0];
  let agentName = '';
  if (Agents.length > 0) {
    agentName = Agent.Name;
  }
  return (
    <BpkCard>
      <div className='itinery-card-row'>
        <LegRow leg={itinery.InboundLegId} />
      </div>
      <div className='itinery-card-ro\w'>
        <LegRow leg={itinery.OutboundLegId} />
      </div>
      <div>
        <SelectRow
          price={Price}
          currency={currency}
          agentName={agentName}
        />
      </div>
    </BpkCard>
  )
}

ItineryCard.PropTypes = {
  itinery: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired
}

export default ItineryCard;