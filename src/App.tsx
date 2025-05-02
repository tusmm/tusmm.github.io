import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import RedirectHandler from './RedirectHandler';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';


const App: React.FC = () => {
    useEffect(() => {
        const customCursor = document.getElementById('custom-cursor');

        if (customCursor) {
            document.addEventListener('mousemove', (event) => {
                customCursor.style.left = event.clientX + 'px';
                customCursor.style.top = event.clientY + 'px';
            });
        }

        return () => {
            document.removeEventListener('mousemove', () => {});
        };
    }, []);

    return (
        <BrowserRouter basename="/">
            <RedirectHandler />
            <div id="custom-cursor"></div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
