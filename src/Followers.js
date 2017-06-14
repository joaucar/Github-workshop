import React from 'react'
import GithubUser from './GithubUser';

class Followers extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.params.username != this.props.params.username){
      this.fetchData()
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData(){
    fetch(`https://api.github.com/users/${this.props.params.username}/followers`,
    {'headers': {"Authorization": 'token b9434fbd60d43a0e6c752d7dc8aaf0ebeca4f7f2'}})
    .then(function(response){
      var data = response.json()
      return data;
    })
    .then((data) => {
      console.log( data)
      this.setState({
        followers: data
      })
    })
  }
  render () {
    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>
    }
    return(
      <div className="followers-page">
        <h3>Followers of {this.props.params.username}</h3>
        {this.state.followers.map((follower) => {
          return <GithubUser key={follower.id} name={follower.login} avatar={follower.avatar_url}/>
        })}
      </div>
    )
  }
}

export default Followers;
