import React from "react"
import firebase from '../components/firebase'

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      desc:''      
    }
  } 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {title , desc} = this.state;
    const post ={
      title,desc
    }
    console.log("Post Details",post)
    firebase
      .firestore()
    .collection("posts")
    .add(post)
    .then(ref => {
      console.log("Added Post: ", ref.id)
    })
  }
  // chnageRedirect =()=>{
  //   // this.props.history.push(`show`);
  //   this.props.history.push("/show");
  // }
  render(){
    const posts=this.state.posts
    console.log("Posts Available",posts)
  return(
    <div>
        <h1>Firestore CRUD App </h1>
        <h2>Item List</h2>
        <h2>Add Item</h2>
        <form>
          <label>Post Title</label>
          <input type="text" name="title" onChange={this.handleChange} value={this.state.title} /><br/>
          <label>Post Description</label>
          <input type="text" name="desc" onChange={this.handleChange} value={this.state.desc}/><br/>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
        <h2>Title : {this.state.title}</h2>
        <h2>Description : {this.state.desc}</h2>
        <button onClick={event =>  window.location.href='/show'}>Show Posts</button>
    </div >
  );
  }
}