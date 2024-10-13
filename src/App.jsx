import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <div>Name: mf-navbar</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </BrowserRouter>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
