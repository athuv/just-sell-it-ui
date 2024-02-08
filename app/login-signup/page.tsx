import LoginContent from '@/app/login-signup/LoginContent';
import LoginSignupContent from '@/app/login-signup/LoginSignupContent';
import SignupContent from '@/app/login-signup/SignupContent';
import React from 'react';

function LoginSignup({ searchParams }: { searchParams: { signup: string } }) {
  const signup = searchParams?.signup === 'true';
  return (
    <main>
      <section className="p-4 lg:hidden">
        {signup && <SignupContent />}
        {!signup && <LoginContent />}
      </section>
      <section className="hidden border-t-2 border-tertiaryBg px-40 pt-4 lg:block">
        <LoginSignupContent />
      </section>
    </main>
  );
}

export default LoginSignup;
