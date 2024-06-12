import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  {
    id: 1,
    name: "Soft Drinks",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/thumbnail.png",
    price: "100",
  },
  {
    id: 2,
    name: "Strawberry",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png",
    price: "200",
  },
  {
    id: 3,
    name: "Tissue Paper Box",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
    price: "250",
  },
  {
    id: 4,
    name: "Decoration Swing",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
    price: "325",
  },
  {
    id: 5,
    name: "Family Tree Photo Frame",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png",
    price: "300",
  },
  {
    id: 6,
    name: "House Showpiece Plant",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
    price: "200",
  },
  {
    id: 7,
    name: "Plant Pot",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
    price: "450",
  },
  {
    id: 8,
    name: "Table Lamp",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png",
    price: "440",
  },
  {
    id: 9,
    name: "Bamboo Spatula",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png",
    price: "30",
  },
  {
    id: 10,
    name: "Black Aluminium Cup",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
    price: "70",
  },
  {
    id: 11,
    name: "Black Whisk",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/thumbnail.png",
    price: "90",
  },
  {
    id: 12,
    name: "Boxed Blender",
    imageSrc:
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
    price: "100",
  },
];

export default function Home() {
  const dispatch = useDispatch();

  const handleSubmit = (e, product) => {
    e.preventDefault();

    console.log(e, "haha");

    console.log(product, "kd bhai");

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        img: product.imageSrc,
        price: product.price,
      })
    );
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </div>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <div
                    onClick={(e) => handleSubmit(e, product)}
                    className="mx-1"
                  >
                    Add to cart
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
