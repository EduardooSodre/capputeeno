import type { AppProps } from 'next/app';
import './styles/globals.css'; 
import { SessionProvider } from "next-auth/react"
import Header from '../components/header';
import CategoryNav from '@/src/components/categoryNav';
import Pagination from '@/src/components/pagination/index';
import ProductList from '@/src/components/productList';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <SessionProvider session={pageProps.session}>
    <Header/>
    <Component {...pageProps} />
    <div>
        <CategoryNav/>
        <Pagination/> 
        <ProductList/>
        <Pagination/>
      </div>
  </SessionProvider>
);
}
