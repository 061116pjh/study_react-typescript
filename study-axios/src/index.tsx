import ReactDOM from 'react-dom/client';
import Router from './pages/router';
import './reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router />
);