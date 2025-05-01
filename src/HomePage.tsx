import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './HomePage.css';
import Header from './components/header/Header';
import Content from './components/content/Content';

function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const normalizedPath = location.pathname.replace(/\/+$/, "");
        if (location.pathname !== normalizedPath) {
            navigate(normalizedPath || "/", { replace: true });
        }
    }, [location, navigate]);


    return (
        <div className="homepage-container">
            <Header />
            <Content />
        </div>
    );
}

export default HomePage;