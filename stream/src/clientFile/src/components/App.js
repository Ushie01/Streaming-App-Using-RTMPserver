import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Stream from './streams/Stream';
import Successful from './Successful';
import Signup from './auth/Signup';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/streams/:id" exact component={StreamShow} />
            <Route path="/stream/:id" exact component={Stream}/>
            <Route path="/sign-up" exact component={Signup} />
            <Route path='/Successful' exact component={Successful} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
