"use client";
import Image from "next/image";
import { InputDemo } from "../Input/Input";
import { useUserStore } from "@/hooks/useStore";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface IconProps {
  src: string;
  alt: string;
  additionalClasses?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, additionalClasses = "" }) => (
  <div className={`w-6 h-6 ${additionalClasses}`}>
    <Image src={src} width={24} height={24} alt={alt} className="object-contain" />
  </div>
);

export default function Header() {
  const { user, logoutUser } = useUserStore();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    localStorage.clear();
    router.push("/");
  };

  return (
    <header className="bg-white px-6 flex items-center justify-between pr-6">
      <div className="flex items-center max-h-[86px]">
        <div className="xl:mr-16 lg:mr-4">
          <p className="text-xl font-bold text-gray-900">HarmonyHR</p>
        </div>
        <nav className="text-lg flex mt-8 min-h-14 hidden lg:flex">
          {["Home", "My Info", "People", "Hiring", "Reports", "Files"].map((link) => (
            <a
              className={`hover:bg-[#DAE6F2] cursor-pointer p-4 rounded-t-lg ${
                link === "My Info" && "min-w-24 bg-[#DAE6F2]"
              }`}
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center xxs:m-4 xs:m-4 sm:m-4 md:m-4 lg:m-0">
        <div className="relative mr-8 xs:mr-0 xxs:mr-0">
          <InputDemo
            className="pl-10 xxs:w-[40px] xs:w-[40px] md:w-[105px] xl:w-[300px] 2xl:w-[395px] h-8"
            placeholder="Search"
          />
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <Image src="/images/search.png" width={16} height={16} alt="icon search" className="object-contain" />
          </div>
        </div>
        <div className="flex sm:space-x-4 xxs:space-x-2 items-center">
          <Icon src="/images/settings.png" alt="icon settings" additionalClasses="hidden lg:flex ml-6" />
          <Icon src="/images/support.png" alt="icon support" additionalClasses="hidden lg:flex" />
          <Icon src="/images/notifications.png" alt="icon notifications" additionalClasses="hidden lg:flex" />
          <Icon src="/images/menu.png" alt="icon menu" additionalClasses="lg:hidden flex" />
          <div className="w-9 h-9">
            <Image
              src={user?.avatar ? user?.avatar : "/images/circle-gray.png"}
              width={36}
              height={36}
              alt="icon avatar"
              className="object-contain rounded-full"
            />
          </div>
          <LogOut onClick={handleLogout} />
        </div>
      </div>
    </header>
  );
}
