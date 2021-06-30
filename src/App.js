import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies : [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb')
    .then(response => response.json())
    .then(users => this.setState({ movies: users.results}));
  }

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter(movie => movie.original_title.toLowerCase().includes(searchField.toLowerCase())); 
    return (
      <div className="App">
        <h1 className='heading-font'> Movies-Box </h1>
        <SearchBox
          placeholder = 'Search Movie'
          handleChange = {e => this.setState({ searchField: e.target.value })}
        />
        <CardList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;
