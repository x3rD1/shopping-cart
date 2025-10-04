import { Outlet } from "react-router";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
