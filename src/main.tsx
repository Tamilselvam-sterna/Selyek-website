import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import MainPage from "./sections/main.tsx";
import Home from "./sections/Home.tsx";
import "@mantine/carousel/styles.css";
import ProductDetailPage from "./components/ProductDetailPage.tsx";
import Banking from "./pages/Banking.tsx";
import Telecom from "./pages/Telecom.tsx";
import Logistics from "./pages/Logistics.tsx";
import PadLocks from "./sections/Padlocks.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/padlocks" element={<PadLocks />} />
          <Route path="/productdetails" element={<ProductDetailPage />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/logistics" element={<Logistics />} />
        </Route>
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
