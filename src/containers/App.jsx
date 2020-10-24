import React from 'react';
import FormOne from '../components/FormOne';
import FormTwo from '../components/FormTwo';
// import FormThree from '../components/FormThree';
import FormFour from '../components/FormFour';

import './App.scss';

const App = () => (
    <div className="App">
        <FormOne />
        <FormFour />
        <FormTwo />
        {/* <FormThree /> */}
    </div>
);

export default App;