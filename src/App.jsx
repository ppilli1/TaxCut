import ButtonGradient from "./assets/svg/ButtonGradient"
import Expenses from "./pages/Expenses";
//import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Purchases from "./pages/Purchases";
import Layout from "./layout/Layout"
//import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className = "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Layout/>
      </div>
      {/* <ButtonGradient/> */}
    </>
  )
}

export default App;
