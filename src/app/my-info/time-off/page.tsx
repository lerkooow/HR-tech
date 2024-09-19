"use client";
import { useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";

export default function Home() {
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      router.push("/");
    } else {
      setIsCheckingToken(false);
    }
  }, [router]);

  if (isCheckingToken) {
    return (
      <div className="flex items-center justify-center h-[700px]">
        <TailSpin color="black" height={40} width={40} ariaLabel="tail-spin-loading" />
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <ProfileBanner />
      <div className="flex justify-center md:space-x-0 lg:space-x-6 xl:space-x-10 bg-[#F0F3F8]">
        <Aside />
        <Main />
      </div>
    </div>
  );
}
