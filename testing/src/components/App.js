import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Rou
          <Link to="/">Home</Link>
          te path="/post" component={CommentBox} />
        <Route path="/post" component={CommentBox} />
        <Route path="/post" component={CommentBox} />
        <Rou
          <Link to="/">Home</Link>
          te path="/" exact component={CommentList} />
        <Route path="/" exact component={CommentList} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
};
