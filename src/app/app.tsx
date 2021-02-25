import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SearchPage from '../features/search/SearchPage';
import ScrollToTop from './ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Redirect to="/search" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
