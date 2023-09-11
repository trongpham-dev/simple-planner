import Header from "pages/home/components/Header";
import Main from "pages/home/components/Main";
import StepFooter from "pages/home/components/StepFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main className="flex-grow" />
      <StepFooter />
    </div>
  );
}
