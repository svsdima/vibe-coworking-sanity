import React from 'react';
import AboutProfit from '../../components/AboutProfit';
import AboutVacancies from '../../components/AboutVacancies';
import Btn from '../../components/Btn';
import Feedback from '../../components/Feedback';
import MainTitle from '../../components/MainTitle';
import SwiperAbout from '../../components/SwiperAbout';

const AboutPage = () => {
	return (
		<section className='about'>
			<MainTitle />
			<div className='container'>
				<div className='about__wrapper'>
					<h3 className='about__title'>
						Vibe Covorking на Новом Арбате: светлые тона и деликатные акценты
					</h3>
					<p className='about__text text'>
						Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому
						наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами: Где надо,
						упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому наша сеть —
						это комфортные рабочие зоны без переплат. Убедитесь сами:
					</p>
					<div className='about__prices'>
						<div className='about__prices__img'>
							<div className='img'>
								<img className='img-border' src='/img/sample.png' alt='sample' />
								<img className='img-border' src='/img/1.png' alt='sample 2' />
							</div>
							<div className='text'>
								<h3 className='about__title'>Цены: оптимизировали все возможное </h3>
								<p className='text'>
									Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
									Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
								</p>
								<Btn
									classText={'btn'}
									text={'Написать нам'}
									icon={'fa-regular fa-hand-back-point-up'}
								/>
							</div>
						</div>
						<div className='about__prices__img'>
							<div className='text'>
								<h3 className='about__title'>Цены: оптимизировали все возможное </h3>
								<p className='text'>
									Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
									Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
								</p>
								<Btn
									classText={'btn'}
									text={'Написать нам'}
									icon={'fa-regular fa-hand-back-point-up'}
								/>
							</div>
							<div className='img'>
								<img className='img-border' src='/img/sample.png' alt='sample' />
								<img src='/img/flower_green.png' alt='flower_green' />
							</div>
						</div>
						<h2 className='title'>
							ПРИХОДИТЕ РАБОТАТЬ ТУДА, <span>ГДЕ УДОБНО, ИНТЕРЕСНО И ВЫГОДНО</span>
						</h2>
						<div className='about__img'>
							<img className='img-border' src='/img/sample.png' alt='sample' />
						</div>
						<h3 className='about__title'>Цены: оптимизировали все возможное </h3>
						<p className='text'>
							Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому
							наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами: Где надо,
							упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому наша сеть
							— это комфортные рабочие зоны без переплат. Убедитесь сами:
						</p>
						<h3 className='about__title'>#vibecoworking</h3>
						<SwiperAbout />
						<div className='about__info'>
							<h3 className='about__title'>
								Vibe Covorking на Новом Арбате: светлые тона и деликатные акценты
							</h3>
							<p className='text'>
								Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
								Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами: Где
								надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому
								наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
							</p>
						</div>
					</div>
				</div>
				<AboutVacancies />
				<div className='container'>
					<div className='about__wrapper'>
						<h3 className='about__title'>
							Vibe Covorking на Новом Арбате: светлые тона и деликатные акценты
						</h3>
						<article className='about__arbat'>
							<div className='about__arbat__img'>
								<div className='img'>
									<img className='img-border' src='/img/3.png' alt='3' />
								</div>
								<div className='img'>
									<img className='img-border' src='/img/1.png' alt='1' />
								</div>
							</div>
						</article>
						<article>
							<p className='text'>
								Тинькофф Касса подключила для онлайн-магазинов и торговых точек возможность приема
								платежей от покупателей по картам «Мир» с помощью мобильного кошелька Apple Pay.
								Таким образом у клиентов Тинькофф Кассы будет больше способов приема платежей при
								оплате их товаров и услуг в онлайне.
							</p>
							<ol className='about__ol'>
								<li className='text'>
									<span>
										Каждая транзакция через Apple Pay надёжно защищена — пользователю необходимо
										пройти аутентификацию с помощью Face ID.
									</span>
								</li>
								<li className='text'>
									<span>
										Touch ID или пароля. Также для верификации используется уникальный одноразовый
										динамический код безопасности.
									</span>
								</li>
								<li className='text'>
									<span>
										Сергей Хромов, вице-президент Тинькофф, руководитель Тинькофф Кассы: «Люди все
										чаще делают покупки с мобильных телефонов, и оплата в один клик становится
										стандартом потребительского поведения.
									</span>
								</li>
								<li className='text'>
									<span>
										По нашим данным, сейчас каждая пятая покупка в интернете совершается с
										использованием Apple Pay.
									</span>
								</li>
							</ol>
							<p className='text'>
								Каждая транзакция через Apple Pay надёжно защищена — пользователю необходимо пройти
								аутентификацию с помощью Face ID, Touch ID или пароля. Также для верификации
								используется уникальный одноразовый динамический код безопасности. Сергей Хромов,
								вице-президент Тинькофф, руководитель Тинькофф Кассы: «Люди все чаще делают покупки
								с мобильных телефонов, и оплата в один клик становится стандартом потребительского
								поведения. По нашим данным, сейчас каждая пятая покупка в интернете совершается с
								использованием Apple Pay.
							</p>
						</article>
						<article className='about__work'>
							<div className='about__work__info info'>
								<div className='info__left'>
									<h2 className='title'>
										ПРИХОДИТЕ РАБОТАТЬ ТУДА, <span>ГДЕ УДОБНО, ИНТЕРЕСНО И ВЫГОДНО</span>
									</h2>
									<p className='text'>
										Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
										Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
										Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
										Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
									</p>
								</div>
								<div className='info__right'>
									<img src='/img/flower.png' alt='flower' />
									<p className='text list'>
										Помогаем без нервов и перерасходов оптимизировать бизнес, стать более
										привлекательными для клиентов и выйти на новый уровень доходов.{' '}
									</p>
									<Btn
										classText={'btn'}
										text={'Написать нам'}
										icon={'fa-regular fa-hand-back-point-up'}
									/>
								</div>
							</div>
							<div className='about__work__img'>
								<div className='img'>
									<img className='img-border' src='/img/3.png' alt='sample' />
								</div>
								<div className='text'>
									<h3 className='about__title'>Цены: оптимизировали все возможное </h3>
									<p className='text'>
										Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
										Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
									</p>
								</div>
							</div>
						</article>
						<article className='about__phone-style'>
							<div>
								<h3 className='about__title'>
									Vibe Covorking на Новом Арбате: светлые тона и деликатные акценты
								</h3>
								<p className='text'>
									Тинькофф Касса подключила для онлайн-магазинов и торговых точек возможность приема
									платежей от покупателей по картам «Мир» с помощью мобильного кошелька Apple Pay.
									Таким образом у клиентов Тинькофф Кассы будет больше способов приема платежей при
									оплате их товаров и услуг в онлайне.
								</p>
								<p className='text'>
									Каждая транзакция через Apple Pay надёжно защищена — пользователю необходимо
									пройти аутентификацию с помощью Face ID, Touch ID или пароля. Также для
									верификации используется уникальный одноразовый динамический код безопасности.
								</p>
							</div>
							<div>
								<div className='about__phone-style__img'>
									<img src='/img/phone.png' alt='phone' />
								</div>
							</div>
						</article>
						<article className='about__diagram'>
							<div>
								<h2 className='title'>
									Рост сети <span>в 2020-2022 годах</span>
								</h2>
								<div className='about__profit__img'>
									<img src='/img/diagram_about.png' alt='diagram_about' />
								</div>
							</div>
							<div>
								<p className='text'>
									Каждая транзакция через Apple Pay надёжно защищена — пользователю необходимо
									пройти аутентификацию с помощью Face ID, Touch ID или пароля. Также для
									верификации используется уникальный одноразовый динамический код безопасности.
									Сергей Хромов, вице-президент Тинькофф, руководитель Тинькофф Кассы:
								</p>
							</div>
						</article>
						<article className='about__profit'>
							<h3 className='about__title'>
								Vibe Covorking на Новом Арбате: светлые тона и деликатные акценты
							</h3>
							<div className='about__profit__list'>
								<div className='item'>
									<div className='item__img'>
										<img src='/img/1.png' alt='1' />
									</div>
									<h4 className='item__title'>Цены: оптимизировали </h4>
									<p className='item__text'>
										Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.{' '}
									</p>
								</div>
								<div className='item'>
									<div className='item__img'>
										<img src='/img/2.png' alt='2' />
									</div>
									<h4 className='item__title'>Цены: оптимизировали </h4>
									<p className='item__text'>
										Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.{' '}
									</p>
								</div>
								<div className='item'>
									<div className='item__img'>
										<img src='/img/3.png' alt='3' />
									</div>
									<h4 className='item__title'>Цены: оптимизировали </h4>
									<p className='item__text'>
										Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.{' '}
									</p>
								</div>
							</div>
						</article>
						<article className='about__interest'>
							<div>
								<p className='text list'>
									Помогаем без нервов и перерасходов оптимизировать бизнес, стать более
									привлекательными для клиентов и выйти на новый уровень доходов.{' '}
								</p>
							</div>
							<div>
								<h2 className='title'>
									ПРИХОДИТЕ РАБОТАТЬ ТУДА, <span>ГДЕ УДОБНО, ИНТЕРЕСНО И ВЫГОДНО</span>
								</h2>
								<p className='text'>
									Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
									Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами: Где
									надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами. Поэтому
									наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
								</p>
							</div>
						</article>
						<div className='about__work__img'>
							<div className='img'>
								<img className='img-border' src='/img/1.png' alt='sample' />
							</div>
							<div className='text'>
								<h3 className='about__title'>Цены: оптимизировали все возможное </h3>
								<p className='text'>
									Где надо, упростили. Что важно, улучшили. Главное, чтобы вы оставались с нами.
									Поэтому наша сеть — это комфортные рабочие зоны без переплат. Убедитесь сами:
								</p>
							</div>
						</div>
						<AboutProfit />
					</div>
				</div>
			</div>
			<Feedback titleText={'Заполните'} spanText={'Анкету'} />
		</section>
	);
};

export default AboutPage;
