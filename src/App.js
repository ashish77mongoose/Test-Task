
import React from 'react'
import { HIDE_TOAST } from "@redux/action/actionConstants";
import {showToast} from "@redux/action"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "@pages/NotFound/NotFound";
import Home from "@pages/Home/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "@pages/profile";
import UserRoutes from './UserRoutes';
import './index.css';
import { useToast } from "@chakra-ui/react";
import Navbar from '@components/layout/Navbar';
import ProductDetail from '@pages/ProductDetail/ProductDetail';
import Footer from '@components/layout/Footer';
import Loader from '@components/Loader';

function CustomSnackBar( {type,message} ) {
  const toast = useToast();
  return toast({
    title: message,
    // description: "We've created your account for you.",
    status:type,
    duration: 6000,
    isClosable: true,
  })
}

export const AuthContext = React.createContext({});

const Routes = ({ }) => {
  const dispatch = useDispatch();
  const { type, message, isVisible } = useSelector(
    (state) => state.toastReducer
  );
  
  const handleClose = () => {
    dispatch({
      type: HIDE_TOAST,
    });
  };

  return (
    <>
    {isVisible&&<CustomSnackBar type={type} message={message}/>}
    <Navbar/>
    
      <Switch>     
        <Route path={'/'} exact component={Home} />        
        <Route path={'/product-detail'} exact component={ProductDetail} />        
       
        <Route path={"/user"} render={(props) => <UserRoutes {...props}/>}
        />
        <ProtectedRoutes path={'/profile'} exact component={Profile} />
        <Route path={'/*'} exact component={NotFound} />
      </Switch>
      <Footer/>
     
    </>
  );
}

const App = () => {
  const [user, setUser] = React.useState({})
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes />
      </AuthContext.Provider>
    </Router>
  )
}
export default App;
