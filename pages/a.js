import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function A() {
  const router = useRouter()

  useEffect(() => {
    
    router.beforePopState(({ url, as, options }) => {
      console.log("route333333333333333333333333333333333333333333333333333333");
      console.log("route333333333333333333333333333333333333333333333333333333");
      console.log("route333333333333333333333333333333333333333333333333333333");
      console.log("route333333333333333333333333333333333333333333333333333333");
      // I only want to allow these two routes!
      if (as !== '/atest') {
        // Have SSR render bad routes as a 404.
        window.location.href = as
        return false
      }

      return true
    })
  }, [])
return <div><span onClick={() => router.back()}>Click here to go back{router.pathname}</span> a</div>
  }