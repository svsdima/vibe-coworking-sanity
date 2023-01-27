import React from 'react';
import Feedback from '../../components/Feedback';
import SubscriptionToUpdate from '../../components/SubscriptionToUpdate';
import VacanciesAdvantages from '../../components/VacanciesAdvantages';
import VacanciesList from '../../components/VacanciesList';
import VacanciesTitle from '../../components/VacanciesTitle';

const VacanciesPage = () => {
	return (
		<section className='vacancies'>
			<div>
				<VacanciesTitle />
				<VacanciesList />
				<SubscriptionToUpdate />
				<VacanciesAdvantages />
				<Feedback titleText={'будем'} spanText={'на связи'} />
			</div>
		</section>
	);
};

export default VacanciesPage;
