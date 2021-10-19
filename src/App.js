
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound'
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import PrivateRouter from './Pages/Login/PrivateRouter/PrivateRouter';
import Footer from './Pages/Shared/Footer/Footer';
import Directory from './Pages/Home/Directory/Directory';
import Register from './Pages/Login/Register/Register';
import Shipping from './Pages/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/register'>
            <Register></Register>
            </Route>
            
          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRouter path='/booking/:serviceId'>
          <Booking></Booking>
            </PrivateRouter>

          <PrivateRouter path='/shipping/:productId'>
          <Shipping></Shipping>
            </PrivateRouter>
            
          <PrivateRouter path='/directory'>
          <Directory></Directory>
          </PrivateRouter>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

          </Switch>
          
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
