import React from 'react'
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Redirect to Admin Dashboard
      window.location.href = '/admin';
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
      
    </div>
  )
}

export default LoginPage
