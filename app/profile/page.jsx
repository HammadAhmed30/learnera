"use client";

import Wrapper from "@/components/Wrapper";

const { useAuth } = require("@/firebase/auth");
const { useRouter, usePathname } = require("next/navigation");
const { useEffect } = require("react");

const ProfilePage = () => {
  const router = useRouter();

  const { authUser, signOutHandler } = useAuth();
  const pathname = usePathname()

  useEffect(() => {
    if (!authUser) {
      
      sessionStorage.setItem("redirectUrl", pathname);
      router.push("/login");
    }
  }, [authUser]);

  return (
    <Wrapper>
      <button className="text-white" onClick={signOutHandler}>
        Signout
      </button>
    </Wrapper>
  );
};

export default ProfilePage;
