import Image from "next/image";
import { ReactNode } from "react";

interface InfoBlockProps {
  children: ReactNode;
  height: string;
}

interface IconWithTextProps {
  icon: string;
  text: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ children, height }) => (
  <div className={`flex flex-col justify-between bg-white w-[225px] rounded-lg mb-4 p-6 ${height}`}>{children}</div>
);

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text }) => (
  <div className="flex space-x-2">
    <Image src={icon} width={16} height={16} alt={`icon ${text}`} className="h-4" />
    <p>{text}</p>
  </div>
);

export default function Aside() {
  return (
    <aside className="text-sm lg:block md:hidden sm:hidden xs:hidden xxs:hidden">
      <InfoBlock height="h-[130px]">
        <IconWithText icon="/images/phone.png" text="07911 654321" />
        <IconWithText icon="/images/email.png" text="avd.yana@videorollnet" />
        <div className="flex space-x-[14px]">
          <Image src="/images/ln.png" width={16} height={16} alt="icon LinkedIn" className="h-4" />
          <Image src="/images/facebook.png" width={16} height={16} alt="icon Facebook" className="h-4" />
          <Image src="/images/twitter.png" width={16} height={16} alt="icon Twitter" className="h-4" />
        </div>
      </InfoBlock>
      <InfoBlock height="h-[123px]">
        <p>Hire Date</p>
        <div>
          <p>Sep. 3,2020</p>
          <p>3y - 9m - 20d</p>
        </div>
      </InfoBlock>
      <InfoBlock height="h-[165px]">
        <IconWithText icon="/images/lattice.png" text="5" />
        <IconWithText icon="/images/time.png" text="Full-Time" />
        <IconWithText icon="/images/people.png" text="Operations" />
        <IconWithText icon="/images/planet.png" text="Europe" />
        <IconWithText icon="/images/location.png" text="London, UK" />
      </InfoBlock>
      <InfoBlock height="h-[198px]">
        <p>Direct Reports</p>
        <IconWithText icon="/images/man.png" text="Shane" />
        <IconWithText icon="/images/man.png" text="Nathan" />
        <IconWithText icon="/images/man.png" text="Mitchell" />
        <IconWithText icon="/images/man.png" text="Philip" />
        <div className="flex space-x-2">
          <Image src="/images/people.png" width={16} height={16} alt="icon people" />
          <p>4 More...</p>
        </div>
      </InfoBlock>
    </aside>
  );
}
