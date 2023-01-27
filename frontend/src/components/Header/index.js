import React, { useState } from 'react';
import Burger from '../Burger';
import Logo from '../Logo';
import Navbar from '../Navbar';
import NavbarMobile from '../NavbarMobile';
import PhoneHeader from '../PhoneHeader';
import logo from '../../assets/logo.svg';

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<section className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__logo'>
						<Burger setIsSidebarOpen={setIsSidebarOpen} />
						<Logo logo={logo} />
						<div className='header__text'>
							<p>Бьюти коворкинг в Mоскве</p>
							<p> подпись две строки</p>
						</div>
					</div>
					<Navbar />
					<PhoneHeader />
				</div>
			</div>
			<NavbarMobile isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
		</section>
	);
};

export default Header;
