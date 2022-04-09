import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './searchBar/Search';
import { ProfileBar } from './ProfileBar';

export const Navbar = () => (
  <div className="py-3 px-5 flex sm:justify-between border-b border-gray-200 ">
      <Link className="my-auto" to="/">
          <p className="text-2xl bg-blue-200 font-bold text-gray-700 py-1 px-2 rounded">
              Tutorate 🎓
          </p>
      </Link>
      <Search />
      <ProfileBar />
  </div>
);
