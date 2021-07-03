import Header from "../layouts/Header";
import Business from "../layouts/Business";
import Information from "../layouts/Information";
import BreedsList from "../layouts/BreedsList";
import Footer from "../layouts/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Business />
      <Information />
      <BreedsList />
      <Footer />
    </>
  );
}
export default HomePage;
