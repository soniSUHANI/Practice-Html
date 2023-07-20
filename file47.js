// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["undergarments", 50]
]);

store.set("Hat", 40);
store.delete("undergarments");
console.log(store.has("Hat"));
console.log(store.size);

let shoppingCart = 0;
shoppingCart +=  store.get("t-shirt");
shoppingCart += store.get("undergarments");
console.log(shoppingCart);

store.forEach((value,key) => console.log(`${key} $${value}`));