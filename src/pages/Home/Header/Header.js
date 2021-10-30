import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">TourLover</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link active" aria-current="page" to="/addTour">AddTour</Link>
                            <Link className="nav-link active" aria-current="page" to="/myorder">Myorder</Link>
                            <Link className="nav-link active" aria-current="page" to="/manageOrder">ManageOrder</Link>
                            {!user?.email && <Link className="nav-link active" aria-current="page" to="/login">Login</Link>}
                        </div>
                    </div>
                    <div className="navbar-text d-flex align-items-center">
                        <span className="fs-6 text-white">{user.displayName}</span>
                        {user.displayName && <button onClick={logOut} className="btn mx-2 btn-dark">LogOut</button>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;