import Image from "next/image";
import LandingPage from "./LandingPage/page";
import UIUX from "./ui/page";
import PageAnimation from "./components/PageAnimation";

export default function Home() {
  return (
    <PageAnimation title="Nice to meet you.">
      <UIUX />
    </PageAnimation>
  );
}
