// searching and filtering arrays
const listOfPhones = [
  {
    name: "iPhone 11",
    price: 699,
    color: "black",
  },
  {
    name: "iPhone 11 Pro",
    price: 999,
    color: "green",
  },
  {
    name: "iPhone 11 Pro Max",
    price: 1099,
    color: "gold",
  },
  {
    name: "iPhone 12",
    price: 799,
    color: "blue",
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    color: "silver",
  },
  {
    name: "iPhone 12 Pro Max",
    price: 1099,
    color: "black",
  },
  {
    name: "iPhone 12 Mini",
    price: 699,
    color: "red",
  },
];

// undefined, null , 0, false, NaN, '', ""

let findPhone = listOfPhones.find(
  (phone) => phone.price < 700 && phone.color === "red"
);

console.log(findPhone);
const filteredPhone = listOfPhones.filter(
  (phone) => phone.price < 700 && phone.color === "red"
);
// console.log(filteredPhone[0].price);

// transformation of arrays

const phonePrices = listOfPhones.map((phone) => phone.price);
console.log(phonePrices);

const changedArray = listOfPhones.map((phone) => {
  const result = {
    ...phone,
    currency: "$",
  };
  return result;
});

console.log(changedArray);
//console.log(listOfPhones);

const changedArray2 = listOfPhones.map((phone) => {
  const result = {
    ...phone,
    price: `${phone.price} $`,
  };
  return result;
});

console.log(changedArray2);
