import HomeLayouts from "../../component/layout/home/index";
import Banner from "./../../component/Banner/Banner";
import ContentHomePage from "./content/index";

const HomePage = () => {
  return (
    <HomeLayouts>
      <Banner />
      <ContentHomePage />
    </HomeLayouts>
  );
};
export default HomePage;
