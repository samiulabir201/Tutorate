import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import { Search } from './searchBar/Search';
import { ProfileBar } from './ProfileBar';

export const Navbar = () => {
    const location = useLocation();
    const getSearchBar = () => {
        if (location.pathname === "/")
            return <Search/>
        else    return <React.Fragment/>
    }
    return (
        <div className="py-4 pl-4 pr-5 flex sm:justify-between border-b border-gray-200 ">
            <Link className="my-auto" to="/">
                <p className="text-2xl fs-4 font-bold text-gray-700 py-1 px-2 rounded">
                    TutoRate
                    <i className="bi bi-mortarboard-fill px-1"></i>
                </p>
            </Link>
            {getSearchBar()}
            <ProfileBar/>
        </div>
    );
}
