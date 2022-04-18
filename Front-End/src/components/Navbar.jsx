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
        <div className="py-3 px-5 flex sm:justify-between border-b border-gray-200 ">
            <Link className="my-auto" to="/">
                <p className="text-2xl bg-blue-200 font-bold text-gray-700 py-1 px-2 rounded">
                    Tutorate 🎓
                </p>
            </Link>
            {getSearchBar()}
            <ProfileBar/>
        </div>
    );
}
