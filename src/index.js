import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from './components/SearchMovies';


class Main extends Component {
  render(){
    return (
      <div className="container">
        <h1 className="title"> CineFind </h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);