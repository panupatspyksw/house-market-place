import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import Category from './pages/Category';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';
function App() {
  return (
    <>
      {/* <h1>My App</h1> */}
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route
            path='/category/:categoryName/:listingId'
            element={<Listing />}
          />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/contact/:landlordId' element={<Contact />} />
          <Route path='/edit-listing/:listingId' element={<EditListing />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
