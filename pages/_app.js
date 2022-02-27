import ShopState from '../context/ShopState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ShopState>
      <Component {...pageProps} />
    </ShopState>
  ) 
  

}

export default MyApp
