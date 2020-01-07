import React from 'react';
import Counter1 from '../components/Counter1';
import Counter2 from '../components/Counter2';
import store from '../store';
import { Provider } from 'react-redux';
export default function (props) {
    return (
        <Provider store={store}>

        </Provider>
    )
}