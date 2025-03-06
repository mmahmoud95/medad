import React from 'react';
import Logo from './Navbar/Logo';
import NavLinks from './Navbar/NavLinks';
import AuthButtons from './Navbar/AuthButtons';

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full px-[55px] pt-[22px] pb-3 flex items-center rounded-b-xl z-50 bg-white">
            <Logo />
            <NavLinks />
            <AuthButtons />
        </div>
    );
};

export default Navbar;
