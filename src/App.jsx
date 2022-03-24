import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globals.styles';
import SignUpPage from './pages/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute redirectPath="/login" />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <GlobalStyle />
    </AuthProvider>

  );
}

export default App;
