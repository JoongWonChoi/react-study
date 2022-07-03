import logo from './logo.svg';
import './App.css';
import TOC from "./components/TOC.js";
import Subject from "./components/Subject.js";
import ReadContent from "./components/ReadContent.js";
import CreateContent from "./components/CreateContent.js";
import Control from "./components/Control";
import Counter from "./components/Counter";
import Input from "./components/Input";
import UserList from "./components/UserList";
import React, { Component, useDebugValue } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3; //state값으로 굳이 할 필요가 없음. 로직을 위한 변수
    this.state = {
      mode : "create",
      selected_content_id : 2,
      welcome : {title : "Welcome", desc : "welcome!!"},
      subject : {title : "WEB", sub : "world wide web!"},
      contents : [
        {id:1, title:"HTML", desc:"HTML is HyperText. ."},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"Javascript is for interactive"}
      ]
    }
  }
  render() {
    console.log("App render");
    var _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === "read"){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc);
        this.max_content_id += 1;
        //this.state.contents.push({id : this.max_content_id, title:_title, desc:_desc});
        var _contents =  this.state.contents.concat({id : this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents : _contents
        });
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
          <UserList></UserList>
          <Input></Input>
          <Counter></Counter>
          <Subject
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={function(){
              //alert("hihihi");
              this.setState({
                mode : "welcome"
              })
            }.bind(this)}
          >
          </Subject>
          <TOC 
            onChangePage={function(id){
              //alert('for content');
              this.setState({
                mode : "read",
                selected_content_id : Number(id)
              })
            }.bind(this)}
            data={this.state.contents}>
          </TOC>
          <Control onChangeMode={function(_mode){
            this.setState({
              mode : _mode
            })
          }.bind(this)}></Control>
          {_article}
      </div>
    );
  }
}

export default App;
