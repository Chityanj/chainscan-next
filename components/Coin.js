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
    
    <div className="h-56 w-2/3 grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-4 flex justify-between items-center relative mx-auto">
        <div>
            <div className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={ethimg}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt='ETH'
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span className="font-bold text-green-500">{data[0].price_change_24h} ({data[0].price_change_percentage_24h}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {data[0].market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">ETH</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {data[0].current_price}</h1>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={bnbimg}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt='BNB'
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span className="font-bold text-green-500">{data[1].price_change_24h} ({data[1].price_change_percentage_24h}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {data[1].market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">BNB</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {data[1].current_price}</h1>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={maticimg}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt='MATIC'
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span className="font-bold text-green-500">{data[3].price_change_24h} ({data[3].price_change_percentage_24h}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {data[3].market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">MATIC</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {data[3].current_price}</h1>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={oneimg}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt='ONE'
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span className="font-bold text-green-500">{data[5].price_change_24h} ({data[5].price_change_percentage_24h}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {data[5].market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">ONE</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {data[5].current_price}</h1>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={ftmimg}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt='FTM'
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span className="font-bold text-green-500">{data[4].price_change_24h} ({data[4].price_change_percentage_24h}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {data[4].market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">FTM</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {data[4].current_price}</h1>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-white rounded-3xl border shadow-xl p-8 w-auto">
                <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 rounded-full">
                    <Image
                        src={avaximg}
                        className="h-8 w-8"
                        width="49px" 
                        height="49px"
                        alt='AVAX'
                        viewBox="0 0 26 26"
                    />
                </button>
                <div>
                    <span className="font-bold text-green-500">{data[2].price_change_24h} ({data[2].price_change_percentage_24h}%)</span><br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">Rank: {data[2].market_cap_rank} </span>
                </div>
                </div>
                <div>
                <h3 className="font-semibold text-sm text-gray-400">AVAX</h3>
                <h1 className="font-semibold text-xl text-gray-700">$ {data[2].current_price}</h1>
                </div>
            </div>
        </div>
</div>
  

  

  );
}

export default Coin