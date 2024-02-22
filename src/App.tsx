import Starter from "./starter/Starter";
import { getProduct } from "./api";
import { useEffect, useState } from "react";

function App() {
  interface TProducts {
    title: string;
    id: number;
    price: number;
  }
  const [products, setProducts] = useState<TProducts>();
  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
    });
  }, []);
  console.log(products);

  return (
    <>
      {/* {products.map(({ title, id, price }) => { */}
      {/*   return <h1 key={id}>{id + " | $" + price + " | " + title}</h1>; */}
      {/* })} */}
      {/* Delete the starter component below and also delete the starter folder in src/starter */}
      <Starter />
      {/* Happy coding 🤘 */}
    </>
  );
}

export default App;
