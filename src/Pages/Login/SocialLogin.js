import React from 'react';
import googleLogo from '../../images/social/google.png';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>;
      }

      if(user){
          console.log(user);
      }

    return (
        <div className='w-full max-w-xs'>
             <button onClick={() => signInWithGoogle()} className="btn btn-accent btn-outline w-full max-w-xs" >
                <img src={googleLogo} alt="" className='mr-2'></img>
                Continue with Google</button>


                
        </div>


    );
};

export default SocialLogin;