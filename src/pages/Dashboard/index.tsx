import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/user';

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      navigate('/login');
      return;
    }

    const user: User = JSON.parse(userJson);
    // Initialize dashboard with user data
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your Informan dashboard!</p>
      </div>
    </div>
  );
};