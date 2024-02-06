import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import PrincipalPage from "./pages/PrincipalPage";
import { NavbarRefProvider } from "./context/NavbarRef";

function App() {
  return (
    <NavbarRefProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPrincipal />}>
            <Route index element={<PrincipalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NavbarRefProvider>
  );
}

export default App;
