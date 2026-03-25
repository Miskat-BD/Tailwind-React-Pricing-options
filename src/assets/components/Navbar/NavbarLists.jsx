import React from 'react';

const NavbarLists = ({ link }) => {
    // console.log(link);
    return (

        <li className='lg:mr-10 hover:bg-amber-400'>
            <a href={link.path}>{link.name}</a>
        </li>

    );
};

export default NavbarLists;