import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";
import { FooterMenu } from "../components/FooterMenu/FooterMenu";
import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <>
      <nav>
        <Header />
        <span className="absolute left-1/2 -translate-x-1/2 top-[18px] md:left-[300px] md:top-[62px]">
          <Logo />
        </span>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <section className="mx-2 md:mx-[75px]  xl:mx-[150px]">
          <FooterMenu />
        </section>
        <section>
          <Footer />
        </section>
      </footer>
    </>
  );
};
