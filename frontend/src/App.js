import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import ErrorScreen from './components/ErrorScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import PricesPage from './pages/PricesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SingleNewsPage from './pages/SingleNewsPage';
import VacanciesPage from './pages/VacanciesPage';

function App() {
	return (
		<Router>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/404' element={<ErrorScreen />} />
					<Route path='*' element={<Navigate to='/404' replace />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/vacancies' element={<VacanciesPage />} />
					<Route path='/contacts' element={<ContactsPage />} />
					<Route path='/prices' element={<PricesPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/news' element={<NewsPage />} />
					<Route path='/news/:id' element={<SingleNewsPage />} />
					<Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
