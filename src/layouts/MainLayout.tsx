import Footer from "./Footer";
import Header from "./Header";

function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="grow-1">{props.children}</div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
