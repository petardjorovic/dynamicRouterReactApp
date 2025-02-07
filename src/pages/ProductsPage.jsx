import { useEffect, useState } from "react";
import ProductsServices from "../services/productsServices";
import SingleProductCardComponent from "../components/SingleProductCardComponent";
import LoaderComponent from "../components/LoaderComponent";
import { toast } from "react-toastify";
function ProductsPage() {
  const [allData, setAllData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    ProductsServices.getAllProducts()
      .then((res) => {
        setAllData(res.data.products);
        setIsLoaded(true);
        // toast.success("Data arrived!");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-200 p-[20px]">
      <div className="flex flex-wrap items-center justify-center w-[95%] mx-auto gap-[20px] p-[30px]">
        {isLoaded ? (
          allData.map((el, i) => {
            return <SingleProductCardComponent product={el} key={i} />;
          })
        ) : (
          <LoaderComponent />
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
