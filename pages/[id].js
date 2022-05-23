import { useRouter } from "next/router";
import axios from 'axios'
import Summary from '../components/Summary'
import React from 'react'
import { Tab } from '@headlessui/react'
import BscTab from '../components/BscTab'


const Account = ({ bscdata , ethdata, maticdata} ) => {
  const router = useRouter();
  var address = router.query.id
 
  
  return (
    <div>
    <Summary addy = {address}/>

    <div className=" py-6 flex flex-col mx-auto sm:py-12">
        <div className="">
            <div className="h-auto py-10 px-10 w-2/3 bg-[url('https://bscscan.com/images/svg/components/abstract-shapes-20.svg?v=2')] flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl ">

    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
      <Tab className=
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-90 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          Etherum
          </Tab>
          <Tab className=
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-90 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          Binance
          </Tab>
          <Tab className=
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-90 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          Polygon
          </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2 rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
             >
        <Tab.Panel>{ethdata && <BscTab data={ethdata} />}</Tab.Panel>
        <Tab.Panel>
        {bscdata && <BscTab data={bscdata} />}
          </Tab.Panel>
          <Tab.Panel>{maticdata && <BscTab data={maticdata} />}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
</div>
</div>
</div>

    </div>
              
  )
}

export default Account;


export const getServerSideProps = async ( { params } ) => {
  
  console.log({ params });
  const res = await axios.get(
    `https://api.bscscan.com/api?module=account&action=txlist&address=${params.id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=MHUCKMA2QBWGZJ9UG1AUZQB2KRIGMNWVMB`
  );

  const eth = await axios.get(
    `https://api.etherscan.io/api?module=account&action=txlist&address=${params.id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=UEHXZ6SNPI4X4944KG7WB16KI7A3W1I1MY`
  );

  const matic = await axios.get(
    `https://api.polygonscan.com/api?module=account&action=txlist&address=${params.id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=TXXX3Q6ZHIZYHS2KS23IRSQA2T9FP9ZRD1`
  );

  const ethdata = eth.data;
  const bscdata = res.data;
  const maticdata = matic.data;

  return {
    props: {
      ethdata,
      bscdata,
      maticdata,
    },
  };


  
};

