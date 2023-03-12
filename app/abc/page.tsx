"use client";
import { signIn,signOut, useSession } from "next-auth/react";
import React from "react";
const page = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: page.tsx:5 ~ page ~ data:", session);
  return <div>dasdasdsadsa</div>;
};

export default page;
