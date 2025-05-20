import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  const path = location.pathname;

  let page;
  switch (path) {
    case "/":
      page = <h1>Home</h1>;
      break;
    case "/about":
      page = <h1>About</h1>;
      break;
    case "/contact":
      page = <h1>Contact</h1>;
      break;
    default:
      page = <h1>404 Not Found</h1>;
      break;
  }

  return <>{page}</>;
}

export default App;
