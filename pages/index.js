import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Component } from 'react';
import Link from 'next/link'

export default class Index extends Component {
  // getdata = () =>{
  //   console.log("###############3getdat##############")
  //   fetch('http://platform.wondershare.com:8080/api/v2/user/login/validate/dfsdjfdh665dfe466',
  //   {
  //     method: 'POST'})
  //   .then(res =>  res.json())
  //   .then(data => console.log("cors test res",data))
  //   .catch(err => console.error(err));
  // }

render(){
  return (
    <ul>
    <li>
      <Link href="/home" >
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href="/gallery" >
        <a>a</a>
      </Link>
    </li>
  </ul>
  )
}
 
}
