import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';


createRoot(document.getElementById('app') as HTMLElement).render(<App />);
