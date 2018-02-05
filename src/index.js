// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// insted of Provider use this weirdy
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

// import todoApp from './reducers';

const store = configureStore();

render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);
  
