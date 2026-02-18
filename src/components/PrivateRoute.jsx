import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // Пока просто пропускаем всех, потом добавим авторизацию
    return children;
};

export default PrivateRoute;