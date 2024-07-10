"use client"
import { signOut } from '@/app/login/actions';
import { Button } from './ui/button';

export default function SignOutBtn() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button onClick={handleSignOut} className='w-20 bg-[#B5002C]/25 text-[#B5002C] text-2xl rounded-3xl p-2 hover:bg-[#B5002C]/40'>Sign Out</Button>
  );
}