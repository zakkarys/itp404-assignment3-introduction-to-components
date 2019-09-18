import React from 'react';
import './App.css';
import Loading from './loading';
import RedditCard from './RedditCard';
import {getReddits} from './SubRedditApi';
import subscribers from './subscribers';



class App extends React.Component {

  constructor(){
    super();
    this.state = {
      results:[],
      loading:true
    };
  }


  async componentDidMount() {
    
    let results = await getReddits('design');

    this.setState({ 
    	results, loading: false
    });
  }
  render() {
    return (
        <div>
        <h1>{this.state.subscribers}</h1>
          <div>
         {this.state.loading ? <Loading /> : this.state.results.data.children.map((result) => {
            return <RedditCard result={result} key={result.data.id} />
          })}
          </div>
        </div>
    );
  }
}
export default App;
