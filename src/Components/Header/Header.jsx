import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between text-3xl bg-gray-300 mt-6 py-2 px-2'>
            <h3 className='font-bold cursor-pointer'>Logo</h3>
            <div className='flex gap-x-8'>
                <h1>Home</h1>
                <h3>Product</h3>
                <h5>Cart</h5>
                <p>$500.00</p>
            </div>
        </div>
    );
};

export default Header;