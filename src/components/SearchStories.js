import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

class SearchStories extends Component {
  state = {
    query: '',
  };

  render() {
    const onSubmit = e => {
      const { query } = this.state;
      if (query) {
        this.props.onFetchStories(query);
        this.setState({ query: '' });
      }
      e.preventDefault();
    };

    const onChange = e => {
      const { value } = e.target;
      this.setState({ query: value });
    };

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={onChange}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchStories);
