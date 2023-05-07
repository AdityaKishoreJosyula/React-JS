import React from "react";
import './Mobile.css'

export default function Mobile(props){
    return(
        <div class="product">
          <img src={props.path}/>
            <h4>{props.name}</h4>
            <p>Likes:{props.Likes}</p>
            <button>Book Now</button>
        </div>
    )
}
