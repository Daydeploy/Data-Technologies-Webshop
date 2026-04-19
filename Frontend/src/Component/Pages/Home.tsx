import '../../Styles/Home.css';
import SearchBar from '../Home/SearchBar';
import FeaturedSection from '../Home/FeaturedSection';
import CatalogueSection from '../Home/CatalogueSection';

const Home = () => {
    return (
        <div className="Home">
            <SearchBar />
            <FeaturedSection />
            <CatalogueSection />
        </div>
    );
};

export default Home;
