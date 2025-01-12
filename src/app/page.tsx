import About from "@/components/About";
import Banner from "@/components/Banner";
import Notice from "@/components/Notice";
import Partner from "@/components/Partner";
import UsersComment from "@/components/UsersComment";
import Volunteers from "@/components/Volunteers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaCoverage from "@/components/MediaCoverage";
import AreaMap from "@/components/AreaMap";

export default function Home() {
  return (
    <>
      <Banner />
      <Notice />
      <About />
      <Partner />
      <Volunteers />
      <UsersComment />
      <MediaCoverage />
      <AreaMap/>
    </>
  );
}
