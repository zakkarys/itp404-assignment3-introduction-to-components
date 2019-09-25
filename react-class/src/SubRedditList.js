import React from 'react';
import RedditCard from './RedditCard'; 

export default function GitSubRedditList(props) {
	let sublist = props.result;
  return (
    <div>
     {sublist.map((result) => {
            return <RedditCard result={result} key={result.data.id} />
      })}
    </div>
  );
}


