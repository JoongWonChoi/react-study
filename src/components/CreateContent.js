import React, { Component } from 'react';

class CreateContent extends Component{
    render() {
    console.log("content render");
      return(
        <article>
          <h2>Create Form</h2>
          <form //onSubmit : form을 포함하는 submit 동작이 수행될 시 발생하는 이벤트
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value, 
              e.target.desc.value);
            alert("submit!");
          }.bind(this)}>
            <p><input name = "title" placeholder='title'></input></p>
            <p><textarea name = "desc" placeholder='desc'></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }

export default CreateContent;