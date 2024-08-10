import Head from 'next/head';
import ProductList from './productList';
import Pagination from '../components/pagination';
import CategoryNav from '../components/categoryNav';

const Home = () => {
  return (
    <>
      <Head>
        <title>Capputeeno</title>
      </Head>     
      <CategoryNav/>  
      <Pagination/>
      <ProductList />
      <Pagination/> 
    </>
  );
};

export default Home;