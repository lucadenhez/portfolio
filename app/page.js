import { useTransitionRouter } from "next-view-transitions";


export default function Home() {
    const router = useTransitionRouter();
    router.push("/works");
}
