import Head from 'next/head';
import Header from '@/src/components/header';
import CategoryNav from '@/src/components/categoryNav';
import ProductList from '@/src/components/productList/index';
import Pagination from '@/src/components/pagination/index';

const Home = () => {
  return (
    <>
      <Head>
        <title>Capputeeno</title>
      </Head>
      <Header />
      <div className="container">
        <CategoryNav/>
        <Pagination /> 
        <ProductList />
        <Pagination />
      </div>
    </>
  );
};

export default Home;