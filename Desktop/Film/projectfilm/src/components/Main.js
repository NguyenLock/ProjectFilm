import React, { Component } from 'react';
import { data } from '../shared/ListOfFilms';
import FilmsPresentation from './FilmsPresentation';
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      films: data,
    };
  }
  render() {
    return <FilmsPresentation films={this.state.films} />;
  }
}
export default Main;
