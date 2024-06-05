import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
// other than this we can proper setup a routing if you wanna see my wrapper for routing check this repo
// https://github.com/AhmedFarazQaimkhani/resturant_reservations/blob/main/src/routes/AppRoutes.tsx
  return (
    <>
      <AppRoutes isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
