export const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3002/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Login failed:', response.status);
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
