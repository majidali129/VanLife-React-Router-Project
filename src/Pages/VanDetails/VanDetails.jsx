import React from "react"
import { useParams } from "react-router-dom"

import classes from "./VanDetails.module.css"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className={classes.van_detail_container}>
          <a href="/" className={classes.back_to_btn}>
           <span><i className="bi bi-arrow-left"></i></span> <span className={classes.btn_text}>Back to all vans</span></a>
            {van ? (
                <div className={classes.van_detail}>
                    <img src={van.imageUrl} height="600px" alt="" />
                    <i className={`${classes.van_type} ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2 className={classes.name}>{van.name}</h2>
                    <p className={classes.van_price}><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className={classes.link_button}>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}