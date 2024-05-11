import React, { useState } from 'react';


const Admin = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://127.0.0.1:8000/dashboard/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            if (!response.ok) {
                throw new Error('Failed to log in');
            }
    
            const data = await response.json();
            console.log(data.message);
            if(data.message==="Logged in successfully"){
                window.location.href='/dashboard';
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    return (
        <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
            <div className="relative">
                
                <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                    <div className="flex-auto p-6">
                        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                            <a href="#" className="flex cursor-pointer items-center gap-2 text-green-600 no-underline hover:text-green-500">
                                <span className="flex-shrink-0 text-3xl font-green  tracking-tight opacity-100">Farmtastic Finds</span>
                            </a>
                        </div>
                        <h4 className="mb-2 font-medium text-green-700 xl:text-xl">Welcome to Admin Login!</h4>
                        <form className="mb-4" onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="username" className="mb-2 inline-block text-xs font-medium uppercase text-green-700">Username</label>
                                <input type="text" onChange={(e)=>setUsername(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="username" name="username" placeholder="Enter your username" autoFocus />
                            </div>
                            <div className="mb-4">
            
                            <div className="mb-4">
                                <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-green-700">Password</label>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="password" name="password" placeholder="*****" autoFocus />
                            </div>
                            </div>

                            <div className="mb-4">
                            <button className="grid w-full cursor-pointer select-none rounded-md border border-gray-500 bg-green-700 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-black-600 hover:bg-green-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Log In</button>

                            </div>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
