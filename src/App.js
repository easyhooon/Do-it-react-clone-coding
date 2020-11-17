import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">두잇! 리액트 시작하기</h1>
      </div>
    );
  }
}

export default App;

//render함수는 HTML을 반환하고 이것이 웹 브라우저에 출력됨 
//HTML의 스타일 클래스 이름은 자바스크립트 클래스(class) 키워드와 같으므로 리액트에서는 class가 아니라 className으로 정의하여 사용함 