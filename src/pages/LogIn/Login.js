import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location?.state?.from || '/home';


    const handleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                // setIsLoading(false);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="p-5">
            <h2 className="text-primary">Please Login</h2>
            <button onClick={handleLogin} className="btn btn-primary m-5">Google Signin</button>
        </div>
    );
};

export default Login;