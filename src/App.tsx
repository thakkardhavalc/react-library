import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate.bind(toRelativeUrl(originalUri || '/', window.location.origin));
  }

  const customAuthhandler = () => {
    navigate('/login');
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthhandler}>
        <Navbar />
        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/search' element={<SearchBooksPage />} />
            <Route path='/checkout/:bookId' element={<BookCheckoutPage />} />
            <Route path='/login' element={<LoginWidget config={oktaConfig} />} />
            <Route path='/login/callback' Component={LoginCallback} />
            <Route path='/*' element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </Security>
    </div>
  );
}
