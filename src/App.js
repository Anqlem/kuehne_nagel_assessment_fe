import Table from "./components/Table/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details/DetailsPage";
import tbl from "../src/components/Table/Table.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={tbl.app}>
        <Routes>
          <Route path="" element={<Table />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
