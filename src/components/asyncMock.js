const products = [
  {
    id: 1,
    title: "Pelota",
    category: "deportes",
    price: 1000
  },
  {
    id: 2,
    title: "Mochila",
    category: "turismo",
    price: 2000
  },
  {
    id: 3,
    title: "Computadoras",
    category: "tecnologia",
    price: 3000
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};


export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === Number(id)));
    }, 500);
  });
};
