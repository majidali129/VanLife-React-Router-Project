import { useEffect, useState } from 'react'

import classes from './Vans.module.css'
import "../../Server.js"
import { Link, useParams } from 'react-router-dom';



const Vans = () => {
    const [vanData , setVanData] = useState([]);
  useEffect(()=>{

    fetch("/api/vans")
    .then((response)=>response.json())
    .then((data)=>setVanData(data.vans));
  },[])

  return (
    <>
    <section className={classes.vans_container}>
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