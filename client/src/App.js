import './App.scss';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Footer from './Components/Footer';
import MainNav from './Components/MainNav';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';


function App() {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Link exact path='/' component={Home} />
        <Link path='/about-me' component={Aboutme} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
