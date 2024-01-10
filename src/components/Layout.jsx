import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import TopHeader from './Header/TopHeader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BottomFooter from './Footer/BottomFooter';

const Layout = () => {
    return (
        <>
            <TopHeader />
            <Header />
            {/* need to add a fallback component */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Layout;