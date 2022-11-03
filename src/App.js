import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ToastContainer, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getTest from "./Repositories/testRepository";
import LandingPage from './Pages/LandingPage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import HomePage from './Pages/HomePage';
import BrowserPage from './Pages/BrowserPage';
import BrowserGrid from './Components/BrowserComponents/BrowserGrid';
import BrowserCard from './Components/BrowserComponents/BrowserCard';
import Profile from './Pages/Profile';
import PrivateRoute from './Components/PrivateRoute';
import NavBar from './Components/NavBar';
import AddItem from './Pages/AddItem';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import NotFound from './Pages/NotFound';

function App() {

  // useEffect(() => {
  //   getTest()
  // }, [])

  return (
    <>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path="*" element={<NotFound/>}/>


          <Route element={<NavBar />}>
            <Route element={<PrivateRoute />}>
              <Route path='/welcome' element={<HomePage />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/add-item' element={<AddItem />} />
              <Route path='/browser' element={<BrowserPage />} />
              {/* all routes that are only for logged in view with a nav bar go here */}
            </Route>
          </Route>
        </Routes>

      <ToastContainer
        // default settings:
        position='top-right'
        autoClose={5000}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  )
}

export default App;
