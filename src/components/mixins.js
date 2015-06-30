const req = require.context('../../content', false, /\.md$$/);

export default {
  allPosts() {
    let posts = [];
    for (let file of req.keys()) {
      posts.push(req(file));
    }
    return posts;
  },
  getPost(slug) {
    return req('./' + slug + '.md');
  },
};
