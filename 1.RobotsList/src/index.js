
// ---- DEFAULT
import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { robots } from './robots.js';

// ---- CSS
import './index.css';




// ---- APPPPPPPP
import App from './App';

// ---- IDK
import registerServiceWorker from './registerServiceWorker';

// ---- RENDER

ReactDOM.render(<App />, document.getElementById('root'));



registerServiceWorker();
