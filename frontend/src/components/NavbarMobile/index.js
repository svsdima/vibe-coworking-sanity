import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../constants/constants';
import BtnClose from '../BtnClose';
import Logo from '../Logo';
import logo from '../../assets/logo.svg';

const NavbarMobile = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const [isMobile, setIsMobile] = useState(false);

	const detectWindowSize = () => {
		window.innerWidth <= 992 ? setIsMobile(true) : setIsMobile(false);
	};

	if (!isMobile) {
		setIsSidebarOpen(false);
	}

	window.onresize = detectWindowSize;

	return (
		<div className={isSidebarOpen ? 'navbar-mobile active' : 'navbar-mobile'}>
			<div className='navbar-mobile__wrapper'>
				<div className='navbar-mobile__top'>
					<Logo logo={logo} />
					<div className='navbar-mobile__call'>
						<div className='navbar-mobile__call-icon'>
							<i className='fa-solid fa-phone'></i>
						</div>
					</div>
					<BtnClose setIsSidebarOpen={setIsSidebarOpen} />
				</div>
				<div className='navbar-mobile__bottom'>
					<ul className='navbar'>
						{links.map((link) => (
							<li key={link.id}>
								<Link className='navbar__link' to={link.url}>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavbarMobile;
