require('../../');


Post
  .search('search term')
  .success(function(posts) {
    // do something with the posts
  }).error(function(err) {
    // do something with the error
  });