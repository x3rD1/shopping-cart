import { Outlet } from "react-router";
import Nav from "../Nav/Nav";
import "./App.css";

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
