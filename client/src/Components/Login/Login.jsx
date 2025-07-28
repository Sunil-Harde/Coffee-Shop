import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(email);

        setUsername('')
        setPassword('')
        setEmail('')

    }

    return (
        <div className='font-mono'>
            {/* <Navbar /> */}
            <div className='container mx-auto p-4 bg-red-100 shadow-md rounded-lg mt-10 w-110 mb-10'>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <p className="mb-4">Please enter your credentials to login.</p>
                <form className='' onSubmit={handelSubmit}>
                    <input type="text" placeholder="Username" className="border p-2 rounded mb-4 w-full" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className="border p-2 rounded mb-4 w-full" onChange={(e) => setPassword(e.target.value)} />
                    <input type="email" placeholder="email" className="border p-2 rounded mb-4 w-full" onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login