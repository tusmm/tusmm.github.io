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
      return;
    }

    // Normalize the path
    const { pathname, search, hash } = location;

    const normalizedPath = pathname
      .replace(/\/{2,}/g, '/') // Collapse multiple slashes
      .replace(/\/+$/, '');    // Remove trailing slash

    const finalPath = normalizedPath === '' ? '/' : normalizedPath;
    const cleanedUrl = `${finalPath}${search}${hash}`;

    // Redirect only if the cleaned URL git s
    if (pathname !== finalPath) {
      navigate(cleanedUrl, { replace: true });
    }
  }, [navigate, location]);

  return null;
};

export default RedirectHandler;
