import { type NextPage } from "next";
import Layout from "~/components/Layout";
import { useRouter } from "next/router";

import NewProductForm from "~/components/NewProductForm";
import ProductsList from "~/components/ProductsList";

const Home: NextPage = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <NewProductForm />
      <ProductsList pathname={pathname} />
    </>
  );
};

export default Home;
