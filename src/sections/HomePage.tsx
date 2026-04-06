import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import HoursAndLocation from "../components/HoursAndLocation";
import { menu } from "../data/menu";

export default function HomePage() {
  return (
    <>
      <Hero />

      <MenuSection title="Unique Sandwiches" items={menu.sandwiches} />
      <MenuSection title="Unique Baskets" items={menu.baskets} />

      <MenuSection
        title="Wings"
        items={menu.wings.sizes.map((w) => ({
          name: `${w.count} PC`,
          price: w.price,
        }))}
      />

      <MenuSection
        title="Wing Flavors"
        items={menu.wings.flavors.map((f) => ({ name: f, price: "" }))}
      />

      <MenuSection title="Sides" items={menu.sides} />
      <MenuSection title="Drinks" items={menu.drinks} />

      <MenuSection
        title="Subs"
        items={menu.subs.map((s) => ({
          name: s.name,
          price: `${s.price} / Basket ${s.basket}`,
        }))}
      />

      <HoursAndLocation />
    </>
  );
}
