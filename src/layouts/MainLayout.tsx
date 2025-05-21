import Footer from "./Footer";
import Header from "./Header";

function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
