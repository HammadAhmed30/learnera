"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { SmallHeading } from "@/components/heading/heading-small";
import { MediumHeading } from "@/components/heading/heading-medium";
import { Paragraph } from "@/components/reuseable-paragraph";

// Providers
const provider = new GoogleAuthProvider();

const LoginPage = () => {
  // States
  const [message, setMessage] = useState("");

  // Create Intenses
  const router = useRouter();

  // useAuth
  const { authUser, isLoading } = useAuth();

  // Functions

  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect
  useEffect(() => {
    if (!isLoading && authUser) {
      const redirectUrl = sessionStorage.getItem("redirectUrl") || "/";
      router.push(redirectUrl);
    }
  }, [authUser, isLoading]);
  return (
    <main className="flex h-[100vh]">
      <div className="w-full  p-8 md:p-14 flex items-center justify-center">
        <div className="p-8 w-full md:w-[400px] bg-black">
          <MediumHeading className={"text-center"}>
            Login / Sign Up
          </MediumHeading>
          <Paragraph className={"mt-NormalSpace text-center"}>
            Whether you have an account or not, use Google to log in or sign up.
          </Paragraph>

          <div
            className="bg-black/[0.05] border-[1px] border-foreground text-white w-full py-NormalSpace mt-ElementSpace transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
            onClick={loginWithGoogle}
          >
            <FcGoogle size={22} />
            <SmallHeading className={"mt-[0px]"}>
              Login with Google
            </SmallHeading>
          </div>

          {message && (
            <h1 className="font-[600] text-[white] text-center mt-[20px] bg-[red] py-[10px] rounded-full">
              {message}
            </h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
