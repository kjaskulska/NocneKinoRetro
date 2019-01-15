import React from 'react';
import '../sass/App.scss'
import Hero from './Hero';
import $ from 'jquery';

class App extends React.Component {
    constructor() {
        super(props);
        this.state = {}
        this.pobierzDane ("a") }

            const pobierzDane = (searchTerm) => {
            const urlDB = "https://api.themoviedb.org/3/search/movie?api_key=02b7c790eefcf035ffc889efdfc6cb77&query=" + searchTerm
            $.ajax({
                url: urlDB,
                success: (searchResults) => {
                  console.log("Pobrano API")
                  const results = searchResults.results
                            
                  const movieRows = []
          
                  results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow)
                  })
          
                  this.setState({rows: movieRows})
                },
                error: (xhr, status, err) => {
                  console.error("Bład pobierania danych")
                }
              })
            }
          
            searchChangeHandler(event) {
              console.log(event.target.value)
              const boundObject = this
              const searchTerm = event.target.value
              boundObject.pobierzDane(searchTerm)
            }
        
    render() {

        return <Hero />;
        // {this.state.XXX}
    }
}

export default App;