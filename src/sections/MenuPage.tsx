import MenuSection from "../components/MenuSection";
import { menu } from "../data/menu";

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16">
      <h1 className="text-4xl font-bold text-center mb-10">Full Menu</h1>

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
    </div>
  );
}
