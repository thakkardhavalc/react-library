import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const RequiredAuth: React.FC = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const navigate  = useNavigate();
  
    useEffect(() => {
      if (!authState) {
        return;
      }
  
      if (!authState?.isAuthenticated) {
        navigate("/login");
      }
    }, [oktaAuth, !!authState, authState?.isAuthenticated]);
  
    if (!authState || !authState?.isAuthenticated) {
      return (<SpinnerLoading />);
    }
  
    return (<Outlet />);
  }