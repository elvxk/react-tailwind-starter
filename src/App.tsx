// import Starter from "./starter/Starter";
import { useEffect, useState } from "react";
import { getData } from "./api";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setDatas(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="bg-violet-400 font-bold flex flex-wrap">
        <h1>Hello</h1>
      </div>
      {/* <Starter /> */}
      <div className="container mx-auto flex flex-col justify-center min-h-screen">
        {datas.map(({ id, title }) => {
          return (
            <div className="" key={id}>
              <p>{`${id}. ${title}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
