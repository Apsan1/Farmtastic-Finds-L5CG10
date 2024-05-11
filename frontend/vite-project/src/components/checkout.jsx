import React, { useState } from 'react';

const Checkout = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const items=JSON.parse(localStorage.getItem("productData"))
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit checkout information
        console.log('Checkout information:', {
            firstName,
            lastName,
            phone,
            email,
            address,
            paymentMethod
        });
        if(paymentMethod=="cod"){
            manualOrder();
        }
        else{
            onlineOrder();
        }
    };

    async function manualOrder(){
        const data = {
            "customer":firstName+lastName,
            "email":email,
            "phone":phone,
            "products":items,
            "address":address

        };
        const response = await fetch('http://127.0.0.1:8000/order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        window.location.href='/success';
    }

    async function onlineOrder(){
        const data = {
            "name":firstName+lastName,
            "email":email,
            "phone":phone,
            "items":items,
            "address":address,
            "total":"1000",

        };
        const response = await fetch('http://127.0.0.1:8000/payment/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const responseData = await response.json();
                if(responseData){
                    const form = document.createElement('form');
                    form.setAttribute('action', 'https://rc-epay.esewa.com.np/api/epay/main/v2/form');
                    form.setAttribute('method', 'POST');
                    Object.entries(responseData).forEach(([key, value]) => {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'hidden');
                        input.setAttribute('name', key);
                        input.setAttribute('value', value);
                        form.appendChild(input);
                    });
                    document.body.appendChild(form);
                    form.submit();
                }
                }
    return (
        <div className="flex min-h-screen items-center justify-center text-gray-900 bg-gray-200">
            <div className="relative">
                <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                    <div className="flex-auto p-6">
                        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                            <a href="/" className="flex cursor-pointer items-center gap-2 text-black no-underline hover:text-gray-600">
                                <span className="flex-shrink-0 text-3xl font-medium tracking-tight opacity-100">Checkout</span>
                            </a>
                        </div>
                        <h4 className="mb-2 font-medium text-gray-800 xl:text-xl">Enter Your Details</h4>
                        <form className="mb-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="mb-2 inline-block text-xs font-medium uppercase text-gray-800">First Name</label>
                                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="firstName" name="firstName" placeholder="Enter your first name" autoFocus required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="mb-2 inline-block text-xs font-medium uppercase text-gray-800">Last Name</label>
                                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="lastName" name="lastName" placeholder="Enter your last name" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-2 inline-block text-xs font-medium uppercase text-gray-800">Phone</label>
                                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="phone" name="phone" placeholder="Enter your phone number" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-800">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email" placeholder="Enter your email address" required />
                                </div>
                                <div>
                                    <label htmlFor="address" className="mb-2 inline-block text-xs font-medium uppercase text-gray-800">Address</label>
                                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="address" name="address" placeholder="Enter your address" required />
                                </div>
                                <div>
                                    <label htmlFor="paymentMethod" className="mb-2 inline-block text-xs font-medium uppercase text-gray-800">Payment Method</label>
                                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="block w-full cursor-pointer appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-black focus:bg-white focus:text-gray-600 focus:shadow" id="paymentMethod" name="paymentMethod" required>
                                        <option value="cod">Cash on Delivery</option>
                                        <option value="card">Esewa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="w-full cursor-pointer select-none rounded-md border border-gray-500 bg-black py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-black-600 hover:bg-blue-500 hover:text-white hover:shadow-none focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Proceed to Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;