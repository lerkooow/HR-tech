import Header from "./components/Header/Header";
import ProfileBanner from "./components/ProfileBanner/ProfileBanner";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <ProfileBanner />
    </div>
  );
}
