// import React from "react";
// import { Header } from "./components/Header/Header";
// import { Logo } from "./components/Logo/Logo";
// import { Menubar } from "./components/MenuBar/Menubar";
// import { ButtonBar } from "./components/ButtonBar/ButtonBar";
// import { LeftBar } from "./components/LeftBar/LeftBar";
// import { RightBar } from "./components/RightBar/RightBar";
// import { Card } from "./components/Card/Card";
// import { LeftGlass } from "./components/LeftGlass/LeftGlass";
// import { RightGlass } from "./components/RightGlass/RightGlass";
// import { FooterMenu } from "./components/FooterMenu/FooterMenu";
// import { Footer } from "./components/Footer/Footer";

// export const App = () => {
//   return (
//     <>
//       <nav>
//         <Header />
//         <span className="absolute left-1/2 -translate-x-1/2 top-[18px] md:left-[300px] md:top-[62px]">
//           <Logo />
//         </span>
//       </nav>

//       <section>
//         <Menubar />
//       </section>
//       <section>
//         <ButtonBar />
//       </section>

//       <main className="flex justify-between h-[672px]">
//         <section>
//           <LeftBar />
//         </section>

//         <section className="px-2 md:px-0">
//           <LeftGlass />
//           <Card />
//           <RightGlass />
//         </section>

//         <section>
//           <RightBar />
//         </section>
//       </main>
//       <footer>
//         <section className="mx-2 md:mx-[75px]  xl:mx-[150px]">
//           <FooterMenu />
         
//         </section>
//         <section>
//         <Footer />
//         </section>
//       </footer>
//     </>
//   );
// };


import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster />
    </>
  );
};

