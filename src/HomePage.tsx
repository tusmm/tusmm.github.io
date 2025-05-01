import './HomePage.css';
import Header from './components/header/Header';
import Content from './components/content/Content';

function HomePage() {
    return (
        <div className="homepage-container">
            <Header />
            <Content />
        </div>
    );
}

export default HomePage;