import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Header title={"The main title prom props"} />
      <p className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
        aspernatur.
      </p>
      <Form labelName={"Select date"} />
      <Button value={"Plus"} />
      <Button value={"Minus"} />
    </>
  );
}

export default App;
