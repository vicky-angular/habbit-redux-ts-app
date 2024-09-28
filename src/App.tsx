import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AddHabitFrom from './components/add-habit-form';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
     <div><b>HABIT TRAKER</b></div>
    </div>
    <AddHabitFrom />
    </Provider>
  );
}

export default App;
