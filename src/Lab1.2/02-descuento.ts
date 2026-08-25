const subtotal = 1200;
const isMember = false;
let discountPercent = 0;
if (
    subtotal >= 1200 && isMember) {
  discountPercent = 20;
} else if (subtotal >= 1200) {
  discountPercent = 10;
} else if (isMember) {
  discountPercent = 5;
}
const discount = (subtotal * discountPercent) / 100;
const total = subtotal - discount;
console.log(`Descuento: ${discountPercent}% · Total: ${total}`)