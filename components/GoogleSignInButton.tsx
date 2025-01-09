import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn('google',{callbackUrl:"http://localhost:3000/dashboard"});

  return (
    <Button onClick={loginWithGoogle} className='w-full bg-[#4285F4] hover:bg-[#4285F4]/90 text-black'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
