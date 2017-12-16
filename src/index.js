import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Timer from './timer';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

ReactDOM.render(<Timer />, document.getElementById('timerApp'));
registerServiceWorker();
