import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './css/style.css'
import './css/animate.css'
import './css/nice-select.css'
import './css/slick.css'
import './css/xzoom.css'
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Storysection from './components/Storysection'
import Specializing from './components/Specializing'
import Work from './components/Work'
import Portfolio from './components/Portfolio'
import Responsibilities from './components/Responsibilities'
import Yourturn from './components/Yourturn'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      {/* <Switch>
    <Route exact path="/about" component={Banner}></Route>
    </Switch> */}
      <Banner/>
      <Skills/>
      <Storysection  />
      <Specializing />
      <Work/>
      <Portfolio/>
      <Responsibilities/>
      <Yourturn/>
      {/* <Articles/> */}
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
