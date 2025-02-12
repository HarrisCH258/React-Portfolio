import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import './App.css';
import './index.css';

function App() {

  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default App
