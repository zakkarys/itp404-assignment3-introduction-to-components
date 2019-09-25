import React from 'react';
import SearchForm from './SearchForm';

export default class previousSearches extends React.Component {
constructor(props) {
    super();
    this.state = {
      loading: false
    };
  }


  render() {
    return this.props.previousSearches.map((term) => {
        return (
    <button type="button" onClick={this.props.applyPreviousSearch.bind(this, term)}>
      {term}
    </button>
  );
    })
  
}
}