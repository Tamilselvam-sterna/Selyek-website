import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products() {
  const navigate = useNavigate();
  return (
    <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center justify-around">
      <p className="font-bold text-4xl tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
        New Product Releases
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <ProductCard
          name={"Padlock"}
          price={"$599"}
          imgURL={"/lock1.png"}
          onClick={() => navigate("/padlock")}
        />

        <ProductCard name={"Padlock"} price={"$599"} imgURL={"/lock1.png"} />
        <ProductCard name={"Padlock"} price={"$599"} imgURL={"/lock1.png"} />
      </div>
    </div>
  );
}

export default Products;
