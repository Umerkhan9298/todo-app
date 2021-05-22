import React from "react";
import PropTypes from "prop-types";

const PostDetails = ({ posts }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      {posts.map((post) => {
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

PostDetails.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostDetails;
