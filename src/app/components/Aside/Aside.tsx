import Image from "next/image";

export default function Aside() {
  return (
    <aside className="text-sm lg:block md:hidden sm:hidden xs:hidden xxs:hidden">
      {/* 1 */}
      <div>
        <div className="flex flex-col justify-between bg-white w-[225px] h-[130px] rounded-lg mb-4 p-6 relative z-0">
          <div className="flex space-x-2">
            <div>
              <Image src="/images/phone.png" width={16} height={16} alt="icon phone" className="h-4" />
            </div>
            <p>07911 654321</p>
          </div>
          <div className="flex space-x-2">
            <div>
              <Image src="/images/email.png" width={16} height={16} alt="icon email" className="h-4" />
            </div>
            <p>avd.yana@videorollnet</p>
          </div>
          <div className="flex space-x-[14px]">
            <div>
              <Image src="/images/ln.png" width={16} height={16} alt="icon LinkedIn" className="h-4" />
            </div>
            <div>
              <Image src="/images/facebook.png" width={16} height={16} alt="icon Facebook" className="h-4" />
            </div>
            <div>
              <Image src="/images/twitter.png" width={16} height={16} alt="icon Twitter" className="h-4" />
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col justify-between bg-white w-[225px] h-[123px] rounded-lg mb-4 p-6">
        <p>Hire Date</p>
        <div>
          <p>Sep. 3,2020</p>
          <p>3y - 9m - 20d</p>
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col justify-between bg-white w-[225px] h-[165px] rounded-lg mb-4 p-6">
        <div className="flex space-x-2">
          <div>
            <Image src="/images/lattice.png" width={16} height={16} alt="icon lattice" />
          </div>
          <p>5</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/time.png" width={16} height={16} alt="icon time" />
          </div>
          <p>Full-Time</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/people.png" width={16} height={16} alt="icon people" />
          </div>
          <p>Operations</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/planet.png" width={16} height={16} alt="icon planet" />
          </div>
          <p>Europe</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/location.png" width={16} height={16} alt="icon location" />
          </div>
          <p>London, UK</p>
        </div>
      </div>
      {/* 4 */}
      <div className="flex flex-col justify-between bg-white w-[225px] h-[198px] rounded-lg mb-4 p-6">
        <p>Direct Reports</p>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/man.png" width={16} height={16} alt="icon man" />
          </div>
          <p>Shane</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/man.png" width={16} height={16} alt="icon man" />
          </div>
          <p>Nathan</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/man.png" width={16} height={16} alt="icon man" />
          </div>
          <p>Mitchell</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/man.png" width={16} height={16} alt="icon man" />
          </div>
          <p>Philip</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image src="/images/people.png" width={16} height={16} alt="icon people" />
          </div>
          <p>4 More...</p>
        </div>
      </div>
    </aside>
  );
}
