import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";
import HomeCarousel from "../components/HomeCarousel";
import ProgramOverview from "../components/ProgressOverview";

export default function Homepage() {
  document.title = "Danuma Yathra";

  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Container className="mt-4 flex flex-col px-4" role="region">
        <ProgramOverview />
      </Container>
      <Footer />
    </>
  );
}
