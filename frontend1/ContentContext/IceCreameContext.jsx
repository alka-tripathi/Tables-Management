import {React,useState,useEffect,createContext} from 'react'

//step 1:create it
export const IcecreameContext=createContext();

//provider
export const DrinkProvider=({childern}) =>{

    const [icecreame,setIcecreame]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            const res =await fetch('http://localhost:5000/api');
            const data=await res.json();
            if(data.success)

        }
    })
}