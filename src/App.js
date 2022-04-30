import { useEffect } from 'react';
import Route from './route';

export default function App() {

  const mode = localStorage.getItem('mode') || 'light';

    document.querySelector('html').classList.add(mode);
  return (
    <Route />
  );
}

