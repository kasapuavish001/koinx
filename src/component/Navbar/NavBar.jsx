import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from '../../assests/images/Logo.5f2ad8d5.svg';
import './navbar.scss';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const data = [
        {
            id: 1,
            name: "Crypto Taxes",
            link: "#",
            type: 'a'
        },
        {
            id: 2,
            name: "Free Tools",
            link: "#",
            type: 'a'
        },
        {
            id: 3,
            name: "Resources Center",
            link: "#",
            type: 'a'
        },
        {
            id: 4,
            name: "Get Started",
            link: "#",
            type: 'button'
        },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="navbar_main contain">
                <div className="navbar_logobox">
                    <div className="navbar_logobox_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <button className="mobile-menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
                <ul className={`navbar_menu ${isMenuOpen ? 'open' : ''}`}>
                    {data.map((each, i) => (
                        <li key={i} onClick={toggleMenu}>
                            {each.type === 'a' ? (
                                <a href={each.link}>{each.name}</a>
                            ) : (
                                <button>
                                    <a href={each.link}>{each.name}</a>
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
