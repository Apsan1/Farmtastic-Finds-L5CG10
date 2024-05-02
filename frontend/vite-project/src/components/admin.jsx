import React from 'react';


const Admin = () => {
    return (
        <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
            <div className="relative">
                
                <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                    <div className="flex-auto p-6">
                        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                            <a href="#" className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
                                <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">Farmtastic Finds</span>
                            </a>
                        </div>
                        <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to Admin Dashboard!</h4>
                        <form className="mb-4" action="#" method="POST">
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Username</label>
                                <input type="text" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Enter your username" autoFocus />
                            </div>
                            <div className="mb-4">
            
                            <div className="mb-4">
                                <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Password</label>
                                <input type="password" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="*****" autoFocus />
                            </div>
                            </div>

                            <div className="mb-4">
                                <button className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Log In</button>
                            </div>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
