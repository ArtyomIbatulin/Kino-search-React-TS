import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App/App.js';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import CreateNewCard from './pages/createNewCard/CreateNewCard';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-new-card" component={CreateNewCard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();