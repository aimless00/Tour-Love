
import './App.css';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddTour from './pages/AddTour/AddTour';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';
import AuthProvider from './hooks/AuthProvider';
import Login from './pages/LogIn/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MayOrder from './pages/MyOrder/MayOrder';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import ManageAllOrder from './pages/ManageAllOrder/ManageAllOrder';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/addTour">
              <AddTour></AddTour>
            </Route>
            <PrivateRoute exact path="/home/:id">
              <OrderDetails></OrderDetails>
            </PrivateRoute>
            <Route exact path="/myorder">
              <MayOrder></MayOrder>
            </Route>
            <Route exact path="/manageOrder">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
