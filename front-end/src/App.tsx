import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from './type/AppRoute';
import Home from './page/Home';
import Signup from './page/Signup';
import BaseLayout from './component/layout/BaseLayout';
import LoadingDisplay from './component/display/LoadingDisplay';
import { useEffect, useState } from 'react';
import Profile from './page/Profile';
import { useUserContext } from './context/UserContext';
import { Post } from './page/Post';
import Following from './page/Following';
import './App.css';
import Saved from './page/Saved';
import Search from './page/Search';
import { useTheme } from '@mui/material';

const App = () => {
	const User = useUserContext();

	const { isAuthenticated, loginWithRedirect } = useAuth0();
	const [isLoading, setIsLoading] = useState(true);

	const Theme = useTheme();

	useEffect(() => {
		if (Theme.palette.mode === 'dark') {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme');
		}
	}, [Theme.palette.mode]);

	useEffect(() => {
		const timer = setTimeout(() => {
			// Simulate loading time for visuals
			setIsLoading(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <LoadingDisplay />;
	}

	if (!isAuthenticated) {
		loginWithRedirect();
		return <LoadingDisplay />;
	}

	return (
		<BrowserRouter>
			<BaseLayout>
				<Routes>
					{/* Redirect to signup page if user is new */}
					{User.isNewUser && (
						<>
							<Route path={AppRoute.SIGNUP} element={<Signup />} />
							<Route path='*' element={<Navigate to={AppRoute.SIGNUP} replace />} />
						</>
					)}

					{/* Normal routes */}
					{!User.isNewUser && (
						<>
							<Route path={AppRoute.HOME} element={<Home />} />
							<Route path={AppRoute.PROFILE} element={<Profile />} />
							<Route path={AppRoute.POST} element={<Post />} />
							<Route path={`${AppRoute.PROFILE}/:username`} element={<Profile />} />
							<Route path={AppRoute.FOLLOWING} element={<Following />} />
							<Route path={AppRoute.SAVED} element={<Saved />} />
							<Route path={AppRoute.SEARCH} element={<Search />} />
						</>
					)}

					{/* Default route */}
					<Route path='*' element={<Navigate to={AppRoute.HOME} replace />} />
				</Routes>
			</BaseLayout>
		</BrowserRouter>
	);
};

export default App;
