import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Films from './Films';

import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const FILM_API_URL = 'http://omdbapi.com/?s=';
const APIKEY = '&apikey=be51c9a';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      searchBarInput: ""
    };

  }

  submitSearch = (event) => {
    event.preventDefault();
    console.log("searched for" + this.state.searchBarInput);
    this.queryMovieApi(this.state.searchBarInput);

  }

  searchBarHandling = (data) => {
    console.log('CHANGE', data.target.id, data.target.value);
    this.setState({
      searchBarInput: data.target.value
    })

  }
  queryMovieApi = (filmName) => {
    axios.get(FILM_API_URL + filmName + APIKEY).then((response) => {
      console.log(response);
      this.setState({ user: response.data.Search });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Search</h1>
        <Row>
          <Col>
            <Form inline onSubmit={this.submitSearch}>
              <FormControl onChange={this.searchBarHandling} type="text" placeholder="Search" className="mr-sm-2" />
              <Button type='submit' variant="outline-success">Search</Button>

            </Form>
          </Col>
        </Row>
        {this.state.user.map((film, i) => <Films key={i} {...film} />)}


      </div>
    );
  }

}


