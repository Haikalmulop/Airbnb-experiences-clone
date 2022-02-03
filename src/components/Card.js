import React from "react";

function Card (props) {
    
    return (
        
            <div className="card-image">
                 <img className="i" src={props.img} />
            
                <div className="card-item">
                    <span><i className='fas fa-star'></i>{props.rating} </span>
                    <span>{props.review} </span>
                    <span>{props.place} </span>
                </div>

                <div className="card-text">
                    <p>{props.class}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        
    )
}

{/*
7.Man Decorating Food by Yente Van Eynde from Pexels 
8.Woman swimming professionally in sea water by sergio souza from Pexels
9.Photo Of Women Stretching Together by Cliff Booth from Pexels*/}

export default Card