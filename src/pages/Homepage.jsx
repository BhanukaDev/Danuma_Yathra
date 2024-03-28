import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import ProgramOverview from "../components/ProgramOverview";

export default function Homepage() {
  document.title = "Danuma Yathra";

  return (
    <Container className=" h-screen w-screen flex flex-col" role="region">
      <Navbar />
      <HomeCarousel />
      <ProgramOverview />
      <Footer />
    </Container>
  );
}
