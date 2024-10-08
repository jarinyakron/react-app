import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      if(password != confirmPassword) {
        setError('รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่');
        return;
      } else {
      try {
        const response = await axios.post('http://localhost:4000/register', {
          email,
          password,
          name
        });
        console.log('User registered:', response.data);
        // Redirect or clear form here after success
        alert('สมัครสมาชิก : ' + response.data);
        setEmail('');
        setPassword('');
        setName('');
        navigate('/login');
      } catch (error) {
        setError(error.response.data);
        console.error('Registration error:', error.response.data);
      }
    }
    };

    return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Register</div>
        <div className="p-8 bg-white mt-6 rounded-lg shadow-md">
            { error && <p className="text-red-500">{error}</p> }
           <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                id="password"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                id="confirm-password"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                required
              />
              </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                 className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                required
              />
            </div>
            <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded hover:bg-indigo-500">Register</button>
            <p> <Link to={"/login"} className="mt-5 text-center block text-blue-800">เข้าสู่ระบบ</Link> </p>
          </form>
        </div>
      </div>
    </div>
    </> );
}

export default Register;