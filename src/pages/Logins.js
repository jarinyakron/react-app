import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { useState } from "react";
import axios from "axios";

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            login(res.data.token);
            alert('Login Successful!');
            navigate('/');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Login failed');
            console.error(err.response ? err.response.data : err); // Log the correct data
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-50">
            <div className="p-8 bg-white mt-6 rounded-lg shadow-md w-full max-w-md">
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="p-6">
                    <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 w-full">
                        Login
                    </button>
                </form>
                <p className="text-center mt-4">
                    <Link to={"/register"} className="text-pink-600 hover:text-pink-800">สมัครสมาชิก</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
