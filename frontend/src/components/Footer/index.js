import React from 'react';
import Logo from '../Logo';
import logo from '../../assets/logo_footer.svg';
import PhoneFooter from '../PhoneFooter';
import { Link } from 'react-router-dom';
import { links } from '../../constants/constants';

const Footer = () => {
	return (
		<>
			<section className='footer'>
				<div className='container'>
					<div className='footer__wrapper'>
						<div className='footer__top'>
							<div className='footer__top__left'>
								<Logo logo={logo} />
								<div className='footer__top__left__info'>
									<div className='footer__icon'>
										<Link to='/'>
											<i className='fa-brands fa-instagram'></i>
										</Link>
									</div>
									<div className='footer__icon'>
										<Link to='/'>
											<i className='fa-brands fa-whatsapp'></i>
										</Link>
									</div>
									<PhoneFooter />
								</div>
							</div>
							<div className='footer_top_right'>
								<ul className='footer__list'>
									{links.map((link) => (
										<li key={link.id}>
											<Link className='footer__link' to={link.url}>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='footer__bottom'></div>
					</div>
				</div>
			</section>
			<div className='politic'>
				<div className='container'>
					<Link to='/politic'>Политика конфидециальности</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
