import React from 'react';

class GithubRepos extends React.Component {
  render () {
    return(
      <div>
      <a href={`${this.props.link}`} target="_blank">
        <p>{this.props.name} </p>
      </a>
    </div>
    )
  }
}

export default GithubRepos;
