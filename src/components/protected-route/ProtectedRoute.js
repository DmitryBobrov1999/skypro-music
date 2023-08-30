import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
	const user = localStorage.getItem('user');

	if (user === 'false') {
		return <Navigate to={redirectPath} />;
	}
	return <Outlet />;
};
