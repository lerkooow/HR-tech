import { CardItem } from "../Cardtem/CardItem";

export default function CardsItem() {
  return (
    <div className="flex xxs:justify-start xs:justify-start sm:justify-start md:justify-start lg:justify-start xl:justify-center space-x-12 bg-white px-4 xxs:px-0 pt-10 pb-4 overflow-x-auto xl:max-w-[1050px] lg:max-w-[719px] md:max-w-[719px] sm:max-w-[600px] snap-x">
      <div className="flex flex-col items-center">
        <CardItem
          title="Sick"
          image="/images/plus.png"
          number="3"
          description="Days Available"
          more="1 dey scheduled"
        />
        <p className="text-[#7C96B1] text-sm mt-2">Sick Full-Time</p>
      </div>
      <div className="flex flex-col items-center">
        <CardItem title="Annual Leave" image="/images/mount.png" number="10.3" description="Days Available" />
        <p className="text-[#7C96B1] text-sm mt-2">Holiday Full-Time</p>
      </div>
      <div className="flex flex-col items-center">
        <CardItem title="Comp/in Lieu Time" image="/images/page-time.png" number="0" description="Human Used(YTD)" />
        <p className="text-[#7C96B1] text-sm mt-2">Comp/in Lieu Time Flexible Policy</p>
      </div>
    </div>
  );
}
