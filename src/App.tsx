import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import SoulFoodSection from "./components/SoulFoodSection";
import FoodGallery from "./components/FoodGallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <MenuSection />
      <SoulFoodSection />
      <FoodGallery />
      <Footer />
    </MainLayout>
  );
}










