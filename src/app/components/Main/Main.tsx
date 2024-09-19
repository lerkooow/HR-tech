import Image from "next/image";
import { PopoverDemo } from "../PopoverDemo/PopoverDemo";
import { SelectDemo } from "../Select/Select";
import { TableDemo } from "../Table/Table";
import CardsItem from "../CardsItem/CardsItem";

export default function Main() {
  return (
    <main className="xxs:w-[320px] xs:w-[375px] s:w-[425px] sm:w-[640px] md:w-[768px] lg:w-[1050px] bg-white px-6">
      <div className="bg-white pt-10 pb-4 border-b-2 border-[#7C96B1]">
        <div className="flex xxs:justify-end sm:justify-between">
          <div className="flex space-x-3 items-center xxs:hidden xs:hidden sm:flex">
            <div>
              <Image src="/images/time-off.png" width={16} height={16} alt="icon time-off" />
            </div>
            <p className="text-xl text-[#204973]">Time Off</p>
          </div>
          <div className="flex items-center xxs:items-end space-x-8 xxs:flex-col xs:flex-col sm:flex-row">
            <p className="text-sm mb-2">
              Accrual Level Start Date <span className="text-[#3758AB]">03/09-2020</span>
            </p>
            <PopoverDemo />
          </div>
        </div>
      </div>
      <CardsItem />
      <div className="bg-white pt-10 pb-4 border-b-2 border-[#7C96B1]">
        <div className="flex space-x-1 items-center">
          <div>
            <Image src="/images/time.png" width={16} height={16} alt="icon time" />
          </div>
          <p className="text-sm text-[#204973]">Upcoming Time Off</p>
        </div>
      </div>
      <div className="bg-white pt-6 pb-4 border-b-2 border-[#7C96B1]">
        <div className="flex space-x-3 items-center">
          <div>
            <Image src="/images/plus.png" width={30} height={30} alt="icon plus" className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-medium">Jan 27</p>
            <div className="flex space-x-2 items-center">
              <div>
                <Image src="/images/dot.png" width={8} height={8} alt="icon dot" className="h-2 w-2" />
              </div>
              <p className="text-sm  font-medium">1 day of Sick</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-6 pb-4 border-b-2 border-[#7C96B1]">
        <div className="flex space-x-3 items-center">
          <div>
            <Image src="/images/pig.png" width={30} height={30} alt="icon pig" className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-medium">Jul 4</p>
            <p className="text-sm font-medium">Independence Day</p>
          </div>
        </div>
      </div>
      <div className="bg-white pt-6 pb-4">
        <div className="flex space-x-1 items-center">
          <div>
            <Image src="/images/history.png" width={16} height={16} alt="icon history" />
          </div>
          <p className="text-sm text-[#204973]">History</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex justify-between flex-wrap">
          <div className="flex space-x-4">
            <SelectDemo
              placeholder="Sick"
              additionalClasses="lg:min-w-[256px] md:min-w-[256px] xxs:min-w-[272px] xs:min-w-[327px] s:min-w-[377px] mb-4"
            />
            <SelectDemo placeholder="All" additionalClasses="lg:min-w-[96px] md:min-w-[96px] xxs:hidden sm:flex" />
          </div>
          <div className="flex space-x-2 mb-4">
            <SelectDemo placeholder="All" additionalClasses="xxs:min-w-[96px] sm:hidden" />
            <SelectDemo
              placeholder="Balance History"
              additionalClasses="xxs:min-w-[168px] lg:min-w-[178px] md:min-w-[178px] xs:min-w-[223px] xs:min-w-[273px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-white px-4 xxs:px-0 pt-2 pb-4 mb-[92px] rounded-b-lg">
        <TableDemo />
      </div>
    </main>
  );
}
