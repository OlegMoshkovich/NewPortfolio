
const GithubUser = function(username) {
    this.username = username;
  }

  GitHubUser.prototype.fetchDetail(function cb{
    if (this.userData) {
      setTimeout(
        function () {
        cb(this.userData);
      }, 0);
    } else {
      fetch(`https://api.github.com/users/${this.username}`)
        .then(response => response.json())
            .then(data => {
               this.userData = data;
               cb(data);
            });
          };
    }

  getData(){
    return this.userData;
}
}

const octocat = new GitHubUser('octocat');

console.log('hey');
octocat.fetchDetails(data => console.log(data));
