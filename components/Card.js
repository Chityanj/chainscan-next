import React from 'react'
import WAValidator from 'multicoin-address-validator'
import { useRouter } from "next/router";
import {useEffect} from 'react'
import { useState } from "react";


function Card() {
    const router = useRouter();
    useEffect(() => {
        
        document.querySelector(".butt").addEventListener('click', function(){

            var input = document.querySelector("input").value;
            var valid = WAValidator.validate(input, 'eth');
            if(valid) {
                console.log('Valid')
                router.push(input);
            }
                  
            else
                  alert('Address INVALID');
            
        });


        
    }, [])

  return (
    <div className=" py-6 flex flex-col mx-auto sm:py-12">
        <div className="">
            <div className="h-auto py-20 px-10 w-2/3 bg-[#12161c] bg-[url('https://bscscan.com/images/svg/components/abstract-shapes-20.svg?v=2')] flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl ">

            <div className="w-4/6 h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
            <input type="search" name="search" id="search" 
                   placeholder="Enter your address staring with 0x"
                   className="appearance-none w-full outline-none focus:outline-none active:outline-none"
                   
                   />
                    <button type="submit" 
                    className="butt ml-1 outline-none focus:outline-none active:outline-none"
                    
                    >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                
            </button>
            </div>
                
                
            </div>
        </div>


    </div>
  )
}

export default Card