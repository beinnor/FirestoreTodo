import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <h1 className='text-center text-3xl font-bold'>Firebase Todo</h1>
      <hr />
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
