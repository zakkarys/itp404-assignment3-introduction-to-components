import React from 'react';
import './App.css';
import Loading from './loading';
import RedditCard from './RedditCard';
import {getReddits} from './SubRedditApi';
import subscribers from './subscribers';
import SearchForm from './SearchForm';
import GitSubRedditList from './SubRedditList';  
import PreviousSearches from './PreviousSearches';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      previousSearches: [],
      totalclicks: 0,
      loading: false
    };
  }

   IncrementItem = () => {
    this.setState({ totalclicks: this.state.totalclicks + 1 });
  }

  handleSearch = async (searchValue) => {
    this.setState({ loading: true });

    let [results] = await Promise.all([
      getReddits(searchValue)
    ]);
    this.setState({ results: results.data.children, loading: false, previousSearches: [searchValue, ...this.state.previousSearches] });
  }

  applyPreviousSearch = async (term) => {
    this.setState({ loading: true });

    let [results] = await Promise.all([
      getReddits(term)
    ]);
    this.setState({ results: results.data.children, loading: false });
  }


  render() {
    return (
      <div>
        {this.state.IncrementItem}
        <PreviousSearches previousSearches={this.state.previousSearches} applyPreviousSearch={this.applyPreviousSearch}/>
        <SearchForm onSearch={this.handleSearch} />
        <div onClick={this.IncrementItem} >
       <GitSubRedditList result={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;

