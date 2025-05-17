import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import { useFetch } from "./hooks/useFetch";
import AppLayout from "./Pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const BASE_URL = "http://localhost:8000";

function App() {
  const [data, isLoading, error] = useFetch(`${BASE_URL}/cities`);
  console.log(data, isLoading, error);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={data} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={data} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CountryList cities={data} isLoading={isLoading} />}
            />
            <Route />
          </Route>
          app
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
