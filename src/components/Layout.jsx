import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();
  const authPaths = ['/', '/login', '/signup'];
  const isAuthPage = authPaths.includes(location.pathname);

  useEffect(() => {
    if (isAuthPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isAuthPage]);

  return (
    <div className={`uwall-app ${isAuthPage ? 'uwall-app-auth' : ''}`}>
      {!isAuthPage && <Header />}
      <main className={`uwall-main ${isAuthPage ? 'uwall-main-auth' : ''}`}>{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default Layout;
