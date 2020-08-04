/** Custom server using express server*/


const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev , conf:{useFileSystemPublicRoutes: false}})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/atest', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/btest', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


/** Custom server using http server*/

// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev , conf:{useFileSystemPublicRoutes: false}})
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//     let homeUrl = '/atest';
//     let galleryUrl = '/btest';
//     let organizationId = "d035fbb9264d489e8583b8c0817ac91d"; 
//     let organizationId2 = "26e096e134ea409488cc88c4c914004a";
    
//     createServer((req, res) => {
//         const parsedUrl = parse(req.url, true)
//         const { pathname, query } = parsedUrl; 
//         console.log("home path ==>",homeUrl,galleryUrl)
//         console.log("pathname ==>",pathname)
//         // const resdat = await fetch('http://platform.wondershare.com:8080/api/site/organization/'+organizationId2)
//         // const json = await resdat.json();  
//        // console.log("prepare json",json)
//       //   fetch('http://platform.wondershare.com:8080/api/site/organization/'+organizationId2)
//       // .then(res => res.json())
//       // .then(data => {
//       //         console.log("data == > ");          
//       //         data.pages.forEach(element => {
//       //             if(element.pageType == 'GALLERY')
//       //               galleryUrl = element.url;
//       //             if(element.pageType == 'HOME')
//       //               homeUrl = element.url;
//       //         });
        
//       // }).then(data => {

//                     if (pathname == homeUrl) {
//                       console.log("home ------------")
//                       app.render(req, res, '/a', query)
//                     } else if (pathname === galleryUrl) {
//                       console.log("gallery ------------")
//                       app.render(req, res, '/b', query)
//                     } else if(pathname == '/'){
//                       app.render(req, res, '/', query)
//                     }
//                     else {
//                       console.log("else ------------",pathname)
//                       handle(req, res, parsedUrl)
//                     }
              
//               // });
//             }).listen(3000, (err) => {
//               if (err) throw err
//               console.log('> Ready on http://localhost:3000')
//             });
// });
