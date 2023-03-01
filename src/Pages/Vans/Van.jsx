import { useEffect, useState } from 'react'

import classes from './Vans.module.css'
import "../../Server.js"
import { Link } from 'react-router-dom';



const Vans = () => {
    const [vanData , setVanData] = useState([]);
    const [isLoading , setIsLoadig] = useState(false)


     
    const fetchData = async ()=>{
        setIsLoadig(true)
        const response = await fetch("/api/vans");
        // const data = await response.then((response)=>response.json())
        const data = await response.json()
        setVanData(data.vans)
        setIsLoadig(false)
    }

  useEffect(()=>{
        fetchData()
  },[])

  return (
    <>
    <section className={classes.vans_container}>
        {
            isLoading &&  <h1 className={classes.loading}>Loading...</h1>
        }
        {
            vanData.map((van)=>{
               const  {name , id , price , imageUrl, type} = van ;
                return(
                    <div key={id}  className={classes.vans_wrapper}>
                        <Link to={`/vans/${id}`} >
                    <figure>
                        <img src={imageUrl} alt="" />
                    </figure>
                    <div className={classes.van_info_wrapper}>
                        <div className={classes.van_info}>
                        <span>{name}</span>
                        <span>{`$${price}`}</span>
                        </div>
                    <span className={classes.van_type}>{type}</span>
                    </div>
                </Link>
                </div>
                )
            })
        }

    </section>
    </>
  )
}

export default Vans