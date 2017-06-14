import React from 'react'
import {Link} from 'react-router'

class GithubUser extends React.Component {
  render () {
    return(
      <Link to={`/user/${this.props.name}`} >
        <img className="GithubUser" src={this.props.avatar} />
        <p>{this.props.name}</p>
      </Link>
    )
  }
}

export default GithubUser;
