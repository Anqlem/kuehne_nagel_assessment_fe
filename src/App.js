import Table from "./components/Table/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="" element={<Table />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
