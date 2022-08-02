let is_ok = true;

const data = [
    {
      title: "Sal rosa de Himalaya",
      id: "1",
      description: "Sal fina rosada pura",
      price: "$300",
      stock: "50",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_924213-MLA49795322475_042022-O.webp"
    },
    {
      title: "Mix Frutos Secos",
      id: "2",
      description: "Almendras, nueces, castañas y avellanas",
      price: "$1000",
      stock: "20",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_943804-MLA45752281354_042021-O.webp"
    },
    {
      title: "Fideos de Arroz",
      id: "3",
      description: "Fideos sin gluten sabor Morrón",
      price: "$260",
      stock: "40",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_700261-MLA46331583948_062021-O.webp"
    }
];

const timeout = 2000;

export const getProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.find(prod => prod.id == id));
    }, timeout);
  });
};
