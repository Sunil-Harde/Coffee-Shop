import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handalSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(email);

    }

    return (
        <div className=''>
            <Navbar />
            <div className='container mx-auto p-4 bg-red-200 shadow-md rounded-lg mt-10'>

                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <p className="mb-4">Please enter your credentials to login.</p>
                <form className=''>
                    <input type="text" placeholder="Username" className="border p-2 rounded mb-4 w-full" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className="border p-2 rounded mb-4 w-full" onChange={(e) => setPassword(e.target.value)} />
                    <input type="email" placeholder="email" className="border p-2 rounded mb-4 w-full" onChange={(e) => setEmail(e.target.value)} />
                    <button type="" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handalSubmit}>Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login