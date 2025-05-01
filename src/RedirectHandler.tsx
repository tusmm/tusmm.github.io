import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('redirect');
    
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location]);

  return null;
};

export default RedirectHandler;
