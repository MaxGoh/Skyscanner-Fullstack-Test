import React, {
  Component
} from 'react';

import moment from 'moment';
import { fetchAPI } from './api';

import {
  BpkExtraLargeSpinner,
  SPINNER_TYPES
} from 'bpk-component-spinner';
import BpkText from 'bpk-component-text';

import TopNav from './components/topnav';
import QueryHeader from './components/QueryHeader';
import ControlBar from './components/ControlBar';
import ItineryResultContainer from './components/ItineryResultContainer';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Query: {},
      Itineries: [],
      Currencies: {},
      fetching: true,
      message: ''
    }
  }

  componentDidMount() {
    console.log('Fetching...')

    const params = {
      adults: 2,
      class: 'Economy',
      toPlace: 'LOND-sky',
      fromPlace: 'EDI-sky',
      toDate: moment().day(1 + 8).format('YYYY-MM-DD'),
      fromDate: moment().day(1 + 7).format('YYYY-MM-DD')
    };

    fetchAPI(params)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.setState({
        Query: results.Query,
        Itineries: results.Itineries,
        Currencies: results.Currencies,
        fetching: false
      });
    })
    .catch((() => {
      this.setState({
        fetching: false,
        message: 'Error fetching API, refresh to try again.'
      });
    }));
  }

  getCurrencySymbol() {
    const { Query, Currencies } = this.state;
    let selectedCurrency = Currencies.find(currency => currency.Code === Query.Currency);
    return selectedCurrency.Symbol;
  }

  render() {
    const {
      Query,
      Itineries,
      fetching,
      message
    } = this.state;
    return (
      <div className="App">
        <TopNav/>
        {
          (fetching)
            ? <div className='wrapper'>
                <div>
                  <BpkExtraLargeSpinner type={SPINNER_TYPES.primary} />
                </div>
              </div>
            : (message === '')
              ? <div>
                  <QueryHeader
                    fetching={fetching}
                    numOfTravellers={Query.Adults + Query.Infants + Query.Children}
                    cabinClass={Query.CabinClass.toLowerCase()}
                    originPlace={Query.OriginPlace.Code}
                    destinationPlace={Query.DestinationPlace.Code}
                  />
                  <ControlBar />
                  <ItineryResultContainer
                    itineries={Itineries}
                    currencySymbol={this.getCurrencySymbol()}
                  />}
                </div>
              : <div className='wrapper'>
                  <BpkText tagName="p" textStyle="base">
                    {message}
                  </BpkText>
                </div>
        }
      </div>
    );
  }
}


export default App;
