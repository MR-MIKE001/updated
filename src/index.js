import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contest';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    
    <ThemeProvider>
       <BrowserRouter>
    <App />
       </BrowserRouter>
    </ThemeProvider>
</React.StrictMode>);



