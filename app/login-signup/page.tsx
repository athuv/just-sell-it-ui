import LoginContent from '@/app/login-signup/loginContent';
import SignupContent from '@/app/login-signup/signupContent';
import React from 'react';

function LoginSignup({ searchParams }: { searchParams: { signup: string } }) {
  const signup = searchParams?.signup === 'true';
  return (
    <section>
      <div className="p-4 lg:hidden">
        {signup && <SignupContent />}
        {!signup && <LoginContent />}
      </div>
      <div className="hidden lg:block">a</div>
    </section>
  );
}

export default LoginSignup;
