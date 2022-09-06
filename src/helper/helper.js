const arrayProducts = [
  {
    id: 1,
    name: 'Remera',
    price: 3000,
    stock: 10,
    pictureUrl: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    description: "Modelo: Manga corta. Diseño de Tela: Liso. Composición: Algodón.",
    category: "remeras"
  },
  {
    id: 2,
    name: 'Remera',
    price: 3500,
    stock: 10,
    pictureUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description: "Modelo: Manga larga. Diseño de Tela: Liso. Composición: Algodón.",
    category: "remeras"
  },
  {
    id: 3,
    name: 'Campera',
    price: 6000,
    stock: 5,
    pictureUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    description: "Modelo: Brooklin. Tipo de tela: Gabardina. Composición: 90% Algodón.",
    category: "camperas"
  },
  {
    id: 4,
    name: 'Campera',
    price: 6600,
    stock: 5,
    pictureUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    description: "Modelo: Rocker. Tipo de tela: Cuero.",
    category: "camperas"
  },
  {
    id: 5,
    name: 'Mochila',
    price: 5000,
    stock: 10,
    pictureUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    description: "Material: Poliester. Capacidad: 24L.",
    category: "accesorios"
  }
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrayProducts);
    }, 2000);
  })
};
