import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='h-screen'>
        <div className='flex justify-center mt-10 mb-10'>
            <div class="card w-4/6 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Dilshad Ara</h2>
    <p><b>Email:</b> dolacsdu@gmail.com</p>
    <p><b>Education:</b> Computer Science, Dhaka University</p>
    <p><b>Skill:</b> C#.Net, MVC, HTML, CSS, bootstrap, tailwind, React</p>
    <p><b>Live site links:</b> </p>
    <ul className='px-8'>
            <li className='cursor-pointer list-disc'>https://manufacturer-website-919e9.web.app/</li>
            <li className='cursor-pointer list-disc'>https://warehouse-management-7a76b.firebaseapp.com/</li>
            <li className='cursor-pointer list-disc'>https://delicate-crisp-045979.netlify.app</li>
        </ul>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default MyPortfolio;