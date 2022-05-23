import React from 'react';

import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div className='flex justify-center item-center mb-10 mt-10'>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Login</h2>
    <div class="divider">OR</div>
    <div class="card-actions justify-center">
     <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;