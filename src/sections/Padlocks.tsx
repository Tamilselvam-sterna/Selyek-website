import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function PadLocks() {
  const navigate = useNavigate();
  const products = [
    {
      imgURL: "/lock1.png",
      name: "BLE Padlock",
      price: "$200.20",
      onClick: () => navigate("/productDetails"),
    },
    {
      imgURL: "/lock1.png",
      name: "Indoor Padlock",
      price: "$200.20",
      onClick: () => console.log("Indoor"),
    },
    {
      imgURL: "/lock1.png",
      name: "Shrouded",
      price: "$200.20",
      onClick: () => console.log("shrouded"),
    },
    {
      imgURL: "/lock1.png",
      name: "Boxer PadCoil",
      price: "$200.20",
      onClick: () => console.log("boxer"),
    },
  ];
  return (
    <section id="products" className="max-container max-sm:mt-12 mt-36">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl  font-bold text-black text-center">
          Our Padlock Products
        </h2>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            onClick={product.onClick}
          />
        ))}
      </div>
    </section>
  );
}

export default PadLocks;
