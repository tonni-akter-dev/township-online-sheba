import About from "@/components/About";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Notice from "@/components/Notice";
import Partner from "@/components/Partner";
import UsersComment from "@/components/UsersComment";
import Volunteers from "@/components/Volunteers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Notice />
      <About />
      <Partner />
      <Volunteers />
      <UsersComment />
    </>
  );
}
