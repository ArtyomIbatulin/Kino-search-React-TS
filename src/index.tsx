import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import CreateNewCard from './pages/createNewCard/CreateNewCard';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App/App';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Kino-search-React-TS" component={App} />
          <Route path="/Kino-search-React-TS/sign-in" component={SignIn} />
          <Route path="/Kino-search-React-TS/sign-up" component={SignUp} />
          <Route path="/Kino-search-React-TS/create-new-card" component={CreateNewCard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
