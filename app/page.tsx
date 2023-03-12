'use client'
import { signIn,signOut,useSession } from 'next-auth/react';
import React from 'react'
const page = () => {
    const{data: session}= useSession();
    console.log("🚀 ~ file: page.tsx:5 ~ page ~ data:", session);
  return (
    <div>
      {!session?.user ? (
        <>
          <h1>Hello {session?.user?.name}</h1>
          <button onClick={() => signIn()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>Hello {session?.user?.name}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}

export default page
