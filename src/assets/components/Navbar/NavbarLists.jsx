import React from 'react';

const NavbarLists = ({link}) => {
    // console.log(link);
    return (
        <div>
            <li className='mr-10'><a href={link.path}>{link.name}</a></li>
        </div>
    );
};

export default NavbarLists;