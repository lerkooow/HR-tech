import Image from "next/image";
import { InputDemo } from "../Input/Input";

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
  return (
    <header className="px-6 flex items-center justify-between">
      <div className="flex items-center max-h-[86px]">
        <div className="mr-16 xs:mr-8 xxs:mr-5">
          <p className="text-xl font-bold text-gray-900">HarmonyHR</p>
        </div>
        <nav className="text-lg flex mt-8 min-h-14 hidden lg:flex">
          {["Home", "My Info", "People", "Hiring", "Reports", "Files"].map((link) => (
            <p
              className={`hover:bg-[#DAE6F2] cursor-pointer p-4 rounded-t-lg ${link === "My Info" && "min-w-24"}`}
              key={link}
            >
              {link}
            </p>
          ))}
        </nav>
      </div>
      <div className="flex items-center mt-4 xs:mt-2 xxs:mt-2">
        <div className="relative mr-8 xs:mr-0 xxs:mr-0 sm:ml-4">
          <InputDemo
            className="pl-10 xxs:w-[48px] xs:w-[48px] sm:w-[0px] md:w-[120px] xl:w-[300px] 2xl:w-[395px] h-8"
            placeholder="Search"
          />
          <Image
            src="/images/search.png"
            width={16}
            height={16}
            alt="icon search"
            className="absolute top-1/2 transform -translate-y-1/2 sm:left-3 xs:left-1/3 xxs:left-1/3"
          />
        </div>
        <div className="flex sm:space-x-6 xxs:space-x-3 items-center">
          <Icon src="/images/settings.png" alt="icon settings" additionalClasses="hidden lg:flex ml-6" />
          <Icon src="/images/support.png" alt="icon support" additionalClasses="hidden lg:flex" />
          <Icon src="/images/notifications.png" alt="icon notifications" additionalClasses="hidden lg:flex" />
          <Icon src="/images/menu.png" alt="icon menu" additionalClasses="lg:hidden flex" />
          <div className="w-9 h-9">
            <Image src="/images/avatar.png" width={36} height={36} alt="icon avatar" className="object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
}
