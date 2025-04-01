import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import Pricing from "./components/PricingPages/index.jsx";
import Team from "./components/TeamPages/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx";
import Checkout from "./components/ShopPages/Checkout.jsx";
import { HomeMain } from "./components/HomeMain/index.jsx";
import InstalacjeElektryczne from "./components/ServicesPages/InstalacjeElektryczne.jsx";
import PomiaryElektryczne from "./components/ServicesPages/PomiaryElektryczne.jsx";
import SmartDom from "./components/ServicesPages/SmartDom.jsx";
import NajczestszeBledy from "./components/NewsPages/NajczestszeBledy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      // {
      //   path: "/index-1",
      //   element: <HomeOne />,
      // },
      // {
      //   path: "/index-2",
      //   element: <HomeTwo />,
      // },
      // {
      //   path: "/index-3",
      //   element: <HomeThree />,
      // },
      // {
      //   path: "/index-4",
      //   element: <HomeFour />,
      // },
      // {
      //   path: "/index-5",
      //   element: <HomeFive />,
      // },
      // {
      //   path: "/page-about",
      //   element: <AboutUs />,
      // },
      // {
      //   path: "/page-services",
      //   element: <Services />,
      // },
      // {
      //   path: "/page-projects",
      //   element: <Projects />,
      // },
      // {
      //   path: "/page-project-details",
      //   element: <ProjectsDetails />,
      // },
      // {
      //   path: "/shop-products",
      //   element: <Products />,
      // },
      // {
      //   path: "/shop-cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "/shop-checkout",
      //   element: <Checkout />,
      // },
      // {
      //   path: "/shop-products-sidebar",
      //   element: <ProductsSidebar />,
      // },
      // {
      //   path: "/shop-product-details",
      //   element: <ProductsDetails />,
      // },
      // {
      //   path: "/news-grid",
      //   element: <News />,
      // },
      // {
      //   path: "/news-details",
      //   element: <NewsDetails />,
      // },
      // {
      //   path: "/blog/najczestsze-bledy",
      //   element: <NajczestszeBledy />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/page-team",
      //   element: <Team />,
      // },
      // {
      //   path: "/page-team-details",
      //   element: <TeamDetails />,
      // },
      // {
      //   path: "/page-testimonial",
      //   element: <Testimonial />,
      // },
      // {
      //   path: "/project-details",
      //   element: <ProjectsDetails />,
      // },
      // {
      //   path: "/page-faq",
      //   element: <Faq />,
      // },
      {
        path: "/instalacje-elektryczne",
        element: <InstalacjeElektryczne />,
      },
      {
        path: "/pomiary-elektryczne",
        element: <PomiaryElektryczne />,
      },
      {
        path: "/smart-dom",
        element: <SmartDom />,
      },
      // {
      //   path: "/page-pricing",
      //   element: <Pricing />,
      // },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
