import React from 'react';
import NavbarLists from './NavbarLists';

const Navbar = () => {

     const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Contact", path: "/contact" }
    ];
    // console.log(navLinks);
    return (
        <div>
            <ul className='flex'>
                {
                    navLinks.map(link => <NavbarLists key={link.id} link={link}></NavbarLists>)
                }

            </ul>
        </div>
    );
};

export default Navbar;