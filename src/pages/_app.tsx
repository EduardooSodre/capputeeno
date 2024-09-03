import type { AppProps } from 'next/app';
import './styles/globals.css'; 
import Header from '../components/header';
import { CartProvider } from '../context/index';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
    <Header/>
    <Component {...pageProps} />
    </CartProvider>
);
}