import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";

export default function Home() {
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
