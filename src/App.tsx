import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const setCounts = () => {
    setCount(count + 1);
  };

  console.log("count", count);

  console.log(count);
  return (
    <div>
      <Button onClick={setCounts}>Click me</Button>
    </div>
  );
}

export default App;
