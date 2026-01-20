 const products = [
  // PERFUMERÍA
  {
    id: 1,
    title: "Perfume Floral",
    category: "perfumeria",
    price: 12000
  },
  {
    id: 2,
    title: "Perfume Amaderado",
    category: "perfumeria",
    price: 15000
  },
  {
    id: 3,
    title: "Body Splash Vainilla",
    category: "perfumeria",
    price: 7200
  },
  {
    id: 4,
    title: "Perfume Cítrico",
    category: "perfumeria",
    price: 11000
  },

  // BELLEZA
  {
    id: 5,
    title: "Crema Facial Hidratante",
    category: "belleza",
    price: 8500
  },
  {
    id: 6,
    title: "Serum Vitamina C",
    category: "belleza",
    price: 9800
  },
  {
    id: 7,
    title: "Agua Micelar",
    category: "belleza",
    price: 6200
  },
  {
    id: 8,
    title: "Mascarilla Facial",
    category: "belleza",
    price: 5400
  },

  // ACCESORIOS
  {
    id: 9,
    title: "Brocha de Maquillaje",
    category: "accesorios",
    price: 3200
  },
  {
    id: 10,
    title: "Esponja Beauty Blender",
    category: "accesorios",
    price: 2800
  },
  {
    id: 11,
    title: "Neceser de Viaje",
    category: "accesorios",
    price: 4500
  },
  {
    id: 12,
    title: "Vincha Skincare",
    category: "accesorios",
    price: 1900
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
      resolve(products.find((p) => p.id === Number(id)));
    }, 500);
  });
};
