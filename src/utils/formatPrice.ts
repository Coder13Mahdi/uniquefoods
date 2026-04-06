export function formatPrice(price: number | string) {
  if (typeof price === "string") return price;
  return `$${price.toFixed(2).replace(".00", "")}`;
}
