import { useState } from "react";
import { useRoutes } from "react-router";
import NavBar from "./component/Header/NavBar";
import AllPage from "./component/Page/AllPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [lgdata, setLgdata] = useState(false);
  
  return (
    <>
      <NavBar setLgdata={setLgdata} lgdata={lgdata} />
      {useRoutes(AllPage({ setLgdata, lgdata }))}
      <ToastContainer />
    </>
  );
}

export default App;
