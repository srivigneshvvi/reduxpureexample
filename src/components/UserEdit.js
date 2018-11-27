import React, { Component } from 'react'
import {connect}  from 'react-redux';
import {PropTypes}  from 'prop-types';
import {updatePost}  from '../actions/postActions';
 class UserEdit extends Component {

    constructor(props){
        super(props);
        this.state={
          title:''
          ,body:''
          ,userId:null
          ,id:null
        };

        this.onChange=this.onChange.bind(this);
        this.onUpdate=this.onUpdate.bind(this);
        }
        onChange(e){
          this.setState({ [e.target.name] :e.target.value});   
    }
    onUpdate(e){
        e.preventDefault();
        const post={
          title:  this.state.title
          ,body: this.state.body
          ,userId: this.state.userId
          ,id: this.state.id
        };
        //call action
        this.props.updatePost(post);
        }
  render() {
    return (
      <div>
          <form onSubmit={this.onUpdate}>
          {/* <form > */}
        <h1>UserEdit</h1>
        <input type="number" name="userId" onChange={this.onChange} value={this.state.userId}/>
        <input type="number" name="id" onChange={this.onChange} value={this.state.id}/>
        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
        <input type="text" name="body" onChange={this.onChange} value={this.state.body}/>
        <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}
UserEdit.PropTypes={
  updatePost:PropTypes.func.isRequired
}

export default connect (null, {updatePost})(UserEdit);

