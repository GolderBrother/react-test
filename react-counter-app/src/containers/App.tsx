import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../store';
import Counter1 from '../components/Counter1';
import Counter2 from '../components/Counter2';
import NavHeader from '../components/NavHeader';
const AppContainer: React.FC = (props: any) => {
    return (
        <Provider store={store}>
            <Router>
                <NavHeader />
                <Route path='/counter1' component={Counter1} />
                <Route path='/counter2' component={Counter2} />
            </Router>
        </Provider>
    )
}

export default AppContainer;
