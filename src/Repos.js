import React from 'react';
import GithubRepos from './GithubRepos';

class Repos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.username !== this.props.params.username){
      console.log('fetch the data')
      this.fetchData()
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData(){
    fetch(`https://api.github.com/users/${this.props.params.username}/repos`,
    {'headers': {"Authorization": 'token b9434fbd60d43a0e6c752d7dc8aaf0ebeca4f7f2'}})
    .then(function(response){
      var data = response.json()
      return data
    })
    .then((data) => {
      console.log(data)
      this.setState({
        repos:data
      })
    })
  }
  render () {
    if (!this.state.repos) {
        return <div>LOADING REPOS...</div>
      }
    return(
      <div className="repos-page">
        <h3>Reposistories by {this.props.params.username}</h3>
        {this.state.repos.map((repos) => {
          return <GithubRepos key={repos.id} name={repos.name} link={repos.svn_url} />
        })}
      </div>
    )

  }
}

export default Repos;
