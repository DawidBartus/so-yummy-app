import { Outlet } from 'react-router';
import Navigation from '../components/navigation/Navigation';
import {
    MainSection,
    OutletSection,
} from '../components/reusableComponents/Sections';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Navigation />
            <MainSection>
                <OutletSection>
                    <Outlet />
                </OutletSection>
            </MainSection>
            <Footer />
        </>
    );
};

export default HomePage;
