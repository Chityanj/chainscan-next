import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Coin from '../components/Coin'



export default function Home() {
  return (
    <div>
      <Head>
        <title>BlockScan</title>
        <meta name="description" content="BlockScan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
      <Card />
      <Coin />
      
    </div>
  )
}
