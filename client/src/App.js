import React, { Component } from 'react';
import querystring from 'querystring';
import * as commons from './commons';
import moment from 'moment';

import './App.scss';

import TopNav from './components/topnav';
import QueryHeader from './components/QueryHeader';
import ControlBar from './components/ControlBar';
import ItineryResultContainer from './components/ItineryResultContainer';

import { BpkSpinner, BpkExtraLargeSpinner, SPINNER_TYPES } from 'bpk-component-spinner';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Query: {},
      Itineries: [],
      Currencies: {},
      fetching: true
    }
  }

  componentDidMount() {
  console.log('Fetching...')

  let params = {
    adults: 1,
    class: 'Economy',
    toPlace: 'LOND-sky',
    fromPlace: 'EDI-sky',
    toDate: moment().day(1+8).format('YYYY-MM-DD'),
    fromDate: moment().day(1+7).format('YYYY-MM-DD')
  }

  fetch(`${commons.API_URL}/api/search?${querystring.stringify(params)}`)
  .then((response) => {
    return response.json();
  })
  .then((results) => {
    console.log('Response:', results);
    this.setState({
      Query: results.Query,
      Itineries: results.Itineries,
      Currencies: results.Currencies,
      fetching: false
    });
  })
  .catch(console.error)
  }

  render() {
    const { Query, Itineries, Currencies, fetching } = this.state;
    console.log(Currencies);
    return (
      <div className="App">
        <TopNav/>
        {
          (fetching)
            ? <div className='spinner-wrapper'>
                <div>
                  <BpkExtraLargeSpinner type={SPINNER_TYPES.primary} />
                </div>
              </div>
            : <div>
                <QueryHeader
                  fetching={fetching}
                  numOfTravellers={Query.Adults}
                  cabinClass={Query.CabinClass.toLowerCase()}
                  originPlace={Query.OriginPlace.Code}
                  destinationPlace={Query.DestinationPlace.Code}
                />
                <ControlBar />
                <ItineryResultContainer
                  itineries={Itineries}
                  currency={Currencies.Symbol}
                />
              </div>
        }
      </div>
    );
  }
}


export default App;
