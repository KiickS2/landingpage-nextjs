import Features from "./ui/features";
import Footer from "./ui/footer";
import Form from "./ui/form";
import Header from "./ui/header";
import Welcome from "./ui/welcome";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Features />
      <Form />
      <Footer />
    </div>
  );
}
