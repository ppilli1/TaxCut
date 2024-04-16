import ButtonGradient from "./assets/svg/ButtonGradient"
import Expenses from "./components/Expenses";
//import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Purchases from "./components/Purchases";
//import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className = "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Purchases/>
        <Expenses/>
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App;
