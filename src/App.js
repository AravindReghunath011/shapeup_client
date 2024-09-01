import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import TrainerRoutes from './Routes/TrainerRoute';
import { Toaster } from 'sonner';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Toaster, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/admin/*', element: _jsx(AdminRoutes, {}) }), _jsx(Route, { path: '/trainer/*', element: _jsx(TrainerRoutes, {}) }), _jsx(Route, { path: '/*', element: _jsx(UserRoutes, {}) })] })] }));
}
export default App;
