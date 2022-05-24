import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Image from 'next/image'
import ethimg from '../public/coins/eth.svg'
import bnbimg from '../public/coins/bnb.svg'
import ftmimg from '../public/coins/ftm.svg'
import avaximg from '../public/coins/avax.svg'
import oneimg from '../public/coins/one.svg'
import maticimg from '../public/coins/matic.svg'


function Coin() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const {data, error} = useSWR(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2Cethereum%2Cmatic-network%2Charmony%2Cfantom%2Cavalanche-2&order=market_cap_desc&per_page=100&page=1&sparkline=false',
         fetcher,
         {
             revalidateOnFocus: false,
             refreshInterval: 5000,
         }
    );

    if (error) return <div>failed to load</div>;
  
    if (!data) return <div>loading...</div>;
  

        
return (
    
    <div className="h-56 w-2/3 grid grid-cols-3 sm:grid-cols-3 gap-4 flex justify-between items-center relative mx-auto">
        {data.map((v, i)=>(
            <div key={i.toString()} className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={require(`../public/coins/${v.symbol}.svg`)}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt={`${v.symbol}`.toUpperCase()}
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span style={{color: parseFloat(v.price_change_percentage_24h)>0?"green":"red"}} className={`font-bold text-${parseFloat(v.price_change_percentage_24h)>0?"green":"red"}-500`}>{parseFloat(v.price_change_24h).toPrecision(5)} ({parseFloat(v.price_change_percentage_24h).toPrecision(3)}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {v.market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">{`${v.symbol}`.toUpperCase()}</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {v.current_price}</h1>
                </div>
            </div>))}
</div>
  

  

  );
}

export default Coin