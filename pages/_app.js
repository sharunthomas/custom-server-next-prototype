import App from 'next/app';
import Layout from '../components/layout';

export default class MyApp extends App {  


  

  render () {
    const { Component, pageProps } = this.props
    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
  }
}

// Router.beforePopState(({ url, as, options }) => {
//   console.log('state popped')
//   if (as !== "/" || as !== "/other") {
//     // SSR-render the specified location. (Should 404)
//     window.location.href = as;
//     return false;
//   }

//   return true;
// });