import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import ProgramOverview from "../components/ProgressOverview";

export default function Homepage() {
  document.title = "Danuma Yathra";

  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Container className="flex flex-col mt-4 px-4" role="region">
        <ProgramOverview />
        <Footer />
      </Container>
    </>
  );
}
