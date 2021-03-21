import React, { useEffect } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import { history } from '../_helpers/history'
import { alertClear } from '../_actions/alert.actions'
import { useDispatch } from 'react-redux'
import Page404 from '../Page404/Page404'
import MenuBar from '../_components/MenuBar'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen(() => {
        dispatch(alertClear());
    });
  }, [dispatch]);

  return (
    <>
      <MenuBar/>
      <div className="jumbotron min-vh-100 mb-0">
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route component={ Page404 } />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
