import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from './components/ProductList';
import ProOne from './components/ProductOverviews/ProOne';
import NavBar from './components/NavBar';
import ProTwo from './components/ProductOverviews/ProTwo';
import ProThree from './components/ProductOverviews/ProThree';
import ProFour from './components/ProductOverviews/ProFour';
import ProFive from './components/ProductOverviews/ProFive';
import ProSix from './components/ProductOverviews/ProSix';
import ProSeven from './components/ProductOverviews/ProSeven';
import ProEight from './components/ProductOverviews/ProEight';
import ProNine from './components/ProductOverviews/ProNine';
import ProTen from './components/ProductOverviews/ProTen';
import ProEleven from './components/ProductOverviews/ProEleven';
import ProTwelve from './components/ProductOverviews/ProTwelve';
import ProThirt from './components/ProductOverviews/ProThirt';
import ProFourt from './components/ProductOverviews/ProFourt';
import ProFift from './components/ProductOverviews/ProFift';
import Cart from './components/CartPage/Cart';
import BlogComplete from './components/BlogSection/BlogComplete';
import AboutHero from './components/AboutUs/AboutHero';
import MoreAbout from './components/AboutUs/MoreAbout';
import CompleteAbout from './components/AboutUs/CompleteAbout';


function App() {
  return (
   <div>
    <NavBar />
    <Router>
    <Routes>
   
  <Route exact path="/" element={<HomePage />} />
  <Route exact path="/paintings" element={<ProductList />} />
  <Route exact path="/one" element={<ProOne />} />
  <Route exact path="/two" element={<ProTwo />} />
  <Route exact path="/three" element={<ProThree />} />
  <Route exact path="/four" element={<ProFour />} />
  <Route exact path="/five" element={<ProFive />} />
  <Route exact path="/six" element={<ProSix />} />
  <Route exact path="/seven" element={<ProSeven />} />
  <Route exact path="/eight" element={<ProEight />} />
  <Route exact path="/nine" element={<ProNine />} />
  <Route exact path="/ten" element={<ProTen />} />
  <Route exact path="/eleven" element={<ProEleven />} />
  <Route exact path="/twelve" element={<ProTwelve />} />
  <Route exact path="/thirteen" element={<ProThirt />} />
  <Route exact path="/fouteen" element={<ProFourt />} />
  <Route exact path="/fifteen" element={<ProFift />} />
  <Route exact path="/blog" element={<BlogComplete />} />
  <Route exact path="/aboutus" element={<CompleteAbout />} />

  
  </Routes>
  </Router> 

  

   </div>
  );
}

export default App;
