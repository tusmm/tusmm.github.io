import { useLocation, useNavigate } from 'react-router-dom';

interface RouteHandler {
    currentPath: string;
    handleRouteChange: (path: string) => void;
}

export const useRouteHandler = (): RouteHandler => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleRouteChange = (path: string): void => {
        navigate(path);
    };

    return {
        currentPath: location.pathname,
        handleRouteChange
    };
};