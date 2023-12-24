import logo from './logo.svg';
import './App.css';
import BottomFooter from './components/Footer/BottomFooter';
import TopHeader from './components/Header/TopHeader';
import Header from './components/Header/Header';
import SalesForm from './components/Form/SaleForm';
import Description from './components/Description';
import AvatarGroup from './components/AvatarGroup';
import Avatar from './components/Avatar';
function App() {
  return (
    <div className="App">

      <TopHeader />
      <Header />
      <Description />
      <div className='flex justify-center align-center z-50 mb-14 mt-7'>
            <AvatarGroup />
            <Avatar />
        </div>
    </div>
  );
}

export default App;
