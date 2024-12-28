import { User } from '../types/user';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const registerUser = async (id: string, additionalData?: Partial<User>): Promise<User> => {
  // Simulate API call
  await delay(1500);
  
  // Simulate successful registration
  const user: User = {
    id,
    email: '',
    name: '',
    createdAt: new Date().toISOString(),
    ...additionalData
  };

  // Store user in localStorage to persist the session
  localStorage.setItem('user', JSON.stringify(user));
  
  return user;
};