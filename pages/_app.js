import '../styles/globals.css'
import "@arco-design/web-react/dist/css/arco.css";
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {

  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
