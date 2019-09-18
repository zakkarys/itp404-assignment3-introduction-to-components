import React from 'react';


export default function subscribers(props) {
    let subreddits = props.data.children;
    let subscribers = props.data.children[0].data.subreddit_subscribers.toLocaleString('en');
    let subreddit = props.data.children[0].data.subreddit
    return (
        <div>
          <h1 className="header">{this.state.subreddits} Subreddit page. </h1>
          <p className="subscribers">Subscribers: {this.state.subscribers}</p>
		</div>
        
    )
}

