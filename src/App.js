import React from 'react';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import MacroEconomy from './pages/macro_economy';
import MarketOverview from './pages/market_overview';
import StockScreener from './pages/stock_screener';
import WatchList from './pages/watch_list';
import Portfolio from './pages/portfolio';
import SignalOverview from './pages/signal_overview';
import SystemManagement from './pages/system_management';

import MyAppBar from './components/MyAppBar';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Router>
      <MyAppBar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/macro_economy">
            <MacroEconomy />
          </Route>
          <Route path="/market_overview">
            <MarketOverview />
          </Route>
          <Route path="/stock_screener">
            <StockScreener />
          </Route>
          <Route path="/watch_list">
            <WatchList />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/signal_overview">
            <SignalOverview />
          </Route>
          <Route path="/system_management">
            <SystemManagement />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MyAppBar>
    </Router>
  );
}

export default App;
