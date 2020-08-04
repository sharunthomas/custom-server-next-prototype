import Head from 'next/head'
import Link from 'next/link'


export default class Header extends React.Component {
  

    render () {
    return ( 
      <div>
      <div className="header">
      <Link href='/atest' >
          <a className={"nav-link home-link"}>HOME</a>
        </Link>
        <Link href='/btest' >
          <a className={"nav-link"}>GALLERY</a>
        </Link>
        </div>


    <style jsx>{`
      .header {
        background: black;
        color:white;
        width: 100%;
        height: 80px;
      }
      .active:after {
        content: ' (current page)';
      }
      .nav-link {
        text-decoration: none;
        padding: 10px;
      }
    `}</style>
  </div>
    )
  }
}

