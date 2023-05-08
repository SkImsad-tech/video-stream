import { useState } from "react";
import Index from "./components/Index";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
