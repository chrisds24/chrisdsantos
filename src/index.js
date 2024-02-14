import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import {createRoot} from 'react-dom/client';

createRoot(document.getElementById('root')).render(<App/>);

reportWebVitals(sendToVercelAnalytics);
