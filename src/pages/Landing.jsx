import Header from "../components/Header";
import Cards from "../components/Cards";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation();
    console.log(data)
  return (
      <>
        <div className="bg-black p-15">
          <div className="bg-white p-10 rounded-md">
            <Header name={data.state.user} />
            <div className="flex gap-5 flex-wrap my-5">
              <Cards bgcolor={"#8070d3"} title={"23"} subtitle={"Chennai"} />
              <Cards
                bgcolor={"#fda30a"}
                title={"06 September"}
                subtitle={"15:03:34"}
              />
              <Cards
                bgcolor={"#fc6764"}
                title={"Built Using"}
                subtitle={"React"}
              />
            </div>
            <TodoContainer />
          </div>
        </div>
      </>
  );
}

export default Landing;
