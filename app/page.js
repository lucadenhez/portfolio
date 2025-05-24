import Image from "next/image";
import LandingPage from "./LandingPage/page";
import PageAnimation from "./components/PageAnimation";
import Works from "./works/page";

export default function Home() {
  return (
    <PageAnimation randomPrefix={false} title="Nice to meet you.">
      <Works />
    </PageAnimation>
  );
}
