import React from 'react';
import mixins from './mixins';

export default class Blog extends React.Component {

  postPreview(post) {
    return <h2><a href={'/blog/' + post.slug}>{post.title}</a></h2>;
  }

  render() {
    let posts = mixins.allPosts();
    return (
      <div>
        <h1>Blog</h1>
        {posts.map(this.postPreview)}
      </div>
    );
  }
}
