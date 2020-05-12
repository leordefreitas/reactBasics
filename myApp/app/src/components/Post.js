import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postsActions';

class Post extends Component {
  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    const postFinal = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button 
            className="btn grey"
            onClick={this.handleDeletePost}
          >Delete Post</button>
        </div>
      </div>
    ) : (
      <div className="center">Loding post ...</div>
      )
      return (
        <div className="container">
        {postFinal}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let idFunction = +ownProps.match.params.id_page;
  return {
    post: state.posts.find(post => post.id === idFunction)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
