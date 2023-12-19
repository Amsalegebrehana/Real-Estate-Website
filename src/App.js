import logo from './logo.svg';
import './App.css';
import BottomFooter from './components/Footer/BottomFooter';
import TopHeader from './components/Header/TopHeader';
import Header from './components/Header/Header';
import SalesForm from './components/Form/SaleForm';

function App() {
  return (
    <div className="App">

      <TopHeader />
      <Header />
      <SalesForm />
      
    </div>
  );
}

export default App;
