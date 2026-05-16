import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeGuadeloupe from '../pages/HomeGuadeloupe';
import HomeMetropole from '../pages/HomeMetropole';
import Boutique from '../pages/Boutique';
import Location from '../pages/Location';
import Sav from '../pages/Sav';
import Contact from '../pages/Contact';
import AdminDashboard from '../pages/admin/AdminDashboard';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/guadeloupe" replace /> },
  { path: '/guadeloupe', element: <HomeGuadeloupe /> },
  { path: '/metropole', element: <HomeMetropole /> },
  { path: '/boutique', element: <Boutique /> },
  { path: '/location', element: <Location /> },
  { path: '/sav', element: <Sav /> },
  { path: '/contact', element: <Contact /> },
  { path: '/admin', element: <AdminDashboard /> },
]);
