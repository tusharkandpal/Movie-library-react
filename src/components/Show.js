import React from 'react';


function Show({name, image, summary, rating }) {
    return (
        <div className='container'>
            <img src={(image.original) ? image.original : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80"}/>
             <h4>{name}</h4>
             {summary}
           {/* <span>{rating}</span> */}
        </div>
    )
}

export default Show;
