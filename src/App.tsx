import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import DemoPage from "./pages/DemoPage";
import ElementPage from "./pages/ElementPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";
import ShopPage from "./pages/ShopPage";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  const path = location.pathname;

  let page;
  switch (path) {
    case "/":
      page = <HomePage />;
      break;
    case "/about":
      page = <AboutPage />;
      break;
    case "/demo":
      page = <DemoPage />;
      break;
    // blog
    case "/blog":
      page = <BlogPage />;
      break;

    // cart
    case "/cart":
      page = <CartPage />;
      break;

    // element
    case "/element":
      page = <ElementPage />;
      break;

    // portfolio
    case "/portfolio":
      page = <PortfolioPage />;
      break;

    // shop
    case "/shop":
      page = <ShopPage />;
      break;

    default:
      page = <NotFoundPage />;
      break;
  }

  return <MainLayout>{page}</MainLayout>;
}

export default App;
