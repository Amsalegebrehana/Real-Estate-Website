
import './App.css';
import TopHeader from './components/Header/TopHeader';
import Header from './components/Header/Header';
import Description from './components/Description';
import AvatarGroup from './components/AvatarGroup';
import Avatar from './components/Avatar';
import CompanySection from './components/CompaniesSection';
import AboutSection from './components/AboutSection';
import LatestProperties from './components/Properties/LatestProperties';
import Services from './components/Services/OurServices';
import NeighborhoodProperties from './components/Properties/NeighborhoodProperties';
import Teams from './components/Teams';
import LatestBlogs from './components/Blog/blogs';
import Testimonials from './components/Reviews/Testimonials';
import BottomFooter from './components/Footer/BottomFooter';

function App() {
  return (
    <div className="App ">

      <TopHeader />
      <Header />
      <Description />
      <div className='flex flex-col space-y-10 sm:space-y-10  lg:space-y-0 md:space-y-0 md:flex-row justify-center items-center z-50 mb-14 md:mb-0 mt-7 md:mt-0'>
          
            <AvatarGroup />
            <Avatar />
        </div>
        <div className='flex justify-center align-center  mb-14 mt-24'>
            <CompanySection />
        
        </div>
        <AboutSection />
        <LatestProperties />
        <Services />
        <NeighborhoodProperties />
        <Teams />
        <LatestBlogs />
        <Testimonials />
        <BottomFooter />
    </div>
  );
}

export default App;
