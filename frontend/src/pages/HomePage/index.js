import React from 'react';
import Advantages from '../../components/Advantages';
import BeautyProcedures from '../../components/BeautyProcedures';
import MainTitle from '../../components/MainTitle';
import SecretSauces from '../../components/SecretSauces';
import SwiperAtmosphere from '../../components/SwiperAtmosphere';
import SwiperFounders from '../../components/SwiperFounders';

const HomePage = () => {
	return (
		<section className='home'>
			<MainTitle />
			<div className='container'>
				<div className='home__wrapper'>
					<article className='home__article'>
						<p className='main-text'>
							Наша сеть коворкингов, <span>созданная в 2020 году</span> для свободы и роста
							бьюти-предпринимателей. Это пространство, где работают с удовольствием и в десятки раз
							повышают прибыль. Площадки подходят для 4 сфер — с нами зарабатывают косметологи,
							массажисты, бровисты, лэшмейкеры другие специалисты.
						</p>
						<Advantages />
					</article>
					<article className='home__article'>
						<h2 className='title'>
							ПЛАНЫ СЕТИ НА <br /> <span>2022-2025 ГОДЫ</span>
						</h2>
						<h3 className='subtitle'>во первых</h3>
						<p className='text'>
							Мы стремимся к тому, чтобы каждый из вас работал рядом с домом, без лишней траты
							времени и средств на дорогу. Поэтому в ближайшее время откроются локации в 5 разных
							районах, с бесплатными парковками и пешей доступностью к метро.
						</p>
						<div className='home__right'>
							<h3 className='subtitle'>а так же</h3>
							<p className='text'>
								Планируем выйти на региональный уровень и предоставлять площадки по всей России,
								ведь красота одинакова важна и в Москве, и в Норильске, а бьюти-эксперты достойны
								комфортного места для работы.
							</p>
						</div>
						<div className='home__diagram'>
							<h2 className='title'>
								Рост сети{' '}
								<span>
									в <br />
									2020-2022 годах
								</span>
							</h2>
							<div className='home__diagram__img'>
								<img src='/img/diagram.png' alt='diagram' />
							</div>
						</div>
					</article>
					<article className='home__article'>
						<h2 className='title'>
							НАШ ПОДХОД — <span>СОЗДАНИЕ ГАРМОНИЧНОЙ АТМОСФЕРЫ</span>
						</h2>
						<p className='text text-center'>
							Понимаем, как важна бьюти-мастерам атмосфера. Знаем, как создавать площадки с
							идеальной обстановкой, вдохновляющей наших партнеров и их гостей.
						</p>
						<SwiperAtmosphere />
					</article>
					<article className='home__article'>
						<h2 className='title'>
							<span>все для бьюти-процедур</span> <br /> в одном месте
						</h2>
						<BeautyProcedures />
					</article>
					<article className='home__article'>
						<h2 className='title'>
							ОСНОВАТЕЛИ ПЛАТФОРМЫ <br /> <span>О МИССИИ И ПОДХОДЕ</span>
						</h2>
						<SwiperFounders />
					</article>
					<article className='home__article'>
						<h2 className='title'>
							<span>СЕКРЕТНЫЙ СОУС ОТ VIBE COWORKING:</span>
							<br />
							ВЫГОДНО, НАДЕЖНО, ЛЕГКО
						</h2>
						<SecretSauces />
					</article>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
