import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <Routes>
          <Route
            path='/login'
            element={<LoginPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path='/register'
            element={<RegisterPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
            errorElement={<ErrorPage />}
          >
            <Route
              index={true}
              element={<TodoPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path='/account'
              element={<AccountPage />}
              errorElement={<ErrorPage />}
            />
          </Route>
          <Route
            path='*'
            element={<NotFoundPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
