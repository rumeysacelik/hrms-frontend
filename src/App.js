import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './layouts/Navbar';
import DashBoard from './layouts/DashBoard';
import SideBar from './layouts/SideBar';
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';
import CandidateList from './pages/CandidateList';
import JobAdvertisement from './pages/JobAdvertisement';
import Filter from './layouts/Filter';


function App() {
  return (
    <div className="App">
      
      
      <Container className="main">
      
        <DashBoard></DashBoard>
        
      </Container>
      
      <Footer></Footer>
      
    </div>
    
    
  );
}

export default App;
