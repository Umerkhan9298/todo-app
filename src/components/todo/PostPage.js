import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import PostDetails from "./PostDetails";

const Post = (props) => {
  const params = props.match.params.id;

  const post = useSelector(
    (state) =>
      state.posts[
        params
      ] /* .filter((userId) => {
      return state.users.indexOf(userId) === -1;
    }) */
  );
  console.log("Filtered --->", post);

  const user = useSelector((state) => state.users);
  console.log(user);
  const posts = useSelector((state) => state.posts);

  const postss = posts.filter((p) => p.userId == params);
  console.log(postss);
  return (
    <div>
      <h1 style={{ color: "#F15B2A" }}> {params} </h1>{" "}
      <h2>
        {" "}
        {"User's"}
        Posts List{" "}
      </h2>{" "}
      <PostDetails posts={postss} />{" "}
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export function getPostById(posts, id) {
  return posts.find((post) => post.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const post = getPostById(state.posts, id);
  return {
    post,
    posts: state.posts,
    users: state.users,
    /*     posts: state.posts.forEach((post) => {
      state.users.filter((t) => t.id === post.userId)
    })
 */
  };
}

Post.propTypes = {
  match: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Post);
