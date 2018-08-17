
// ---- DEFAULT
import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import App from './containers/App';

// ---- IDK
import registerServiceWorker from './registerServiceWorker';

// ---- RENDER

ReactDOM.render(<App />, document.getElementById('root'));



registerServiceWorker();
