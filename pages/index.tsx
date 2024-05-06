import Features from "./ui/features";
import Header from "./ui/header";
import Welcome from "./ui/welcome";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Features />
    </div>
  );
}
