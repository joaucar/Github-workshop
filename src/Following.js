import React from 'react'
import GithubUser from './GithubUser';

class Following extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.params.username !== this.props.params.username){
      this.fetchData()
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData(){
    fetch(`https://api.github.com/users/${this.props.params.username}/following`,
    {'headers': {"Authorization": 'token b9434fbd60d43a0e6c752d7dc8aaf0ebeca4f7f2'}})
    .then(function(response){
      var data = response.json()
      return data;
    })
    .then((data) => {
      console.log( data)
      this.setState({
        following: data
      })
    })
  }
  render () {
    if (!this.state.following) {
      return <div>LOADING FOLLOWING...</div>
    }
    return(
      <div className="following-page">
        <h3>Followed by {this.props.params.username}</h3>
        {this.state.following.map((following) => {
          return <GithubUser key={following.id} name={following.login} avatar={following.avatar_url}/>
        })}
      </div>
    )
  }
}

export default Following;
