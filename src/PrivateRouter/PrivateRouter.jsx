import { useContext } from "react";
 import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";

  
 const PrivateRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext)
     if (loading) {
        return  <span className="loading loading-spinner loading-lg">Loading</span>
      
    }
    if (!user) {
        return  <Navigate to='/login'></Navigate>
    }
    return  children
 };
 
 export default PrivateRoute;