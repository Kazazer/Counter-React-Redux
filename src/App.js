import React from 'react';
import Counter from './Actions/Action';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import counterReducer from './Reducer/Reducer';

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
<Counter/>
    </Provider>
  );
}

export default App;
