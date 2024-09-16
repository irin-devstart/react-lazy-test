import React, { Suspense, useCallback, useMemo, useState } from "react";
import "./App.css";
import Button from "./Pages/Button";
const Child = React.lazy(() => import("./Pages/Child"));

function App() {
  const [first, setfirst] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const handleChangeCount = useCallback(
    () => setCountChild(countChild + 1),
    [countChild]
  );

  const totalSum = useMemo(() => {
    console.log("Menghitung ");
    return 2;
  }, []);

  // const handleChangeCount = () => setCountChild(countChild + 2);

  return (
    <div className="App">
      <Button onClick={() => setfirst(first + 1)} variant="primary">
        Click me
      </Button>
      <h1>{first}</h1>
      <h2>Hitung : {totalSum}</h2>

      <Suspense fallback={<div>Loading</div>}>
        <Child countChild={countChild} handleChangeCount={handleChangeCount} />
      </Suspense>
    </div>
  );
}

export default App;
