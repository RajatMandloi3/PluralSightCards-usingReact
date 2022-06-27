import React, { Component } from 'react'
import CardList from './components/CardList'
// import Card from './components/Cards'
import Title from './components/Title'
import Form from './components/Form'

// const PERSON=[
//   {
//     "login": "gaearon",
//     "id": 810438,
//     "node_id": "MDQ6VXNlcjgxMDQzOA==",
//     "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/gaearon",
//     "html_url": "https://github.com/gaearon",
//     "followers_url": "https://api.github.com/users/gaearon/followers",
//     "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
//     "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
//     "organizations_url": "https://api.github.com/users/gaearon/orgs",
//     "repos_url": "https://api.github.com/users/gaearon/repos",
//     "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/gaearon/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "dan",
//     "company": "@facebook ",
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": "dan_abramov",
//     "public_repos": 262,
//     "public_gists": 77,
//     "followers": 75266,
//     "following": 172,
//     "created_at": "2011-05-25T18:18:31Z",
//     "updated_at": "2022-05-12T18:52:17Z"
//     }]
export default class App extends Component {
  // constructor(props)
  // {
  //   super(props)
  //   this.state={
  //     PERSON:PERSON,
  //   }
  // }
  //we can also use the above syntax
  state={
    PERSON:[],
  }
  addNewProfile=(profileData)=>{
    this.setState(prevState=>({
      PERSON:[...prevState.PERSON , profileData]
    }))
// console.log('App', profileData);
  }
  render() {
    return (
      <div>
        <Title title='Github Cards App' />
        <Form onSubmit={this.addNewProfile}></Form>
        <CardList PERSON={this.state.PERSON} />
      </div>
    )
  }
}
