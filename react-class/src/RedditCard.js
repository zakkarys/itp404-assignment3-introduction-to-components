import React from 'react';
import App from './App';

function comment(num_comments){
    if(num_comments > 0) {
        return num_comments.toLocaleString('en')
    }
    return (
        'No comments'
    );
}

export default function RedditCard(props) {
    let list = props.result;
    return (
        <div> 
        <h1>Title:  
            <a href = {list.data.url} target = "_blank"> {list.data.title}</a>
        </h1>
        <div>
        <li>Author: {list.data.author} </li> 
        <li>Ups: {list.data.ups.toLocaleString('en')} </li>
        <li>Comments: {comment(list.data.num_comments)}</li>       
        </div>
         
        </div>
        
    )
}




