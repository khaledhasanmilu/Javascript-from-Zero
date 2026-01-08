let user = {
  id: 1,
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

let {
  address: { city, country }
} = user;

console.log(city, country);
