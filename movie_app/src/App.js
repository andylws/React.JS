import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// ##############################################################################

// const bayernPlayers = [
//   {
//     id: 1,
//     name: "Manuel Neuer",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/manuel_neuer_.png",
//     rating: 2.5
//   },
//   {
//     id: 2,
//     name: "Thomas Muller",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/thomas_mueller_.png",
//     rating: 1.5
//   },
//   {
//     id: 3,
//     name: "Robert Lewandowski",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/robert_lewandowski_.png",
//     rating: 1
//   },
//   {
//     id: 4,
//     name: "David Alaba",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/david_alaba_.png",
//     rating: 2.5
//   },
//   {
//     id: 5,
//     name: "Jerome Boateng",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/jerome_boateng_.png",
//     rating: 2
//   },
//   {
//     id: 6,
//     name: "Javi Martinez",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/javi_martinez_.png",
//     rating: 2.5
//   },
//   {
//     id: 7,
//     name: "Joshua Kimmich",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/joshua_kimmich_.png",
//     rating: 1.5
//   },
//   {
//     id: 8,
//     name: "Kingsley Coman",
//     image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/kingsley_coman_.png",
//     rating: 1
//   }
// ]

// function Player({name, image, rating}) {
//   return <section>
//     <h2>FC Bayern {name}</h2>
//     <h4>{rating}/5</h4>
//     <img src={image} alt={name} />
//   </section>
// }

// Player.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function App() {
//   return <section>
//     {bayernPlayers.map(player => (
//       <Player key={player.id} name={player.name} image={player.image} rating={player.rating}/>
//     ))}
//   </section>;
// }

// ##############################################################################

// class App extends React.Component {
//   constructor(props){ //JS thing, not React thing
//     super(props);
//     console.log("Hello");
//   }
//   state = {
//     count: 0
//   };
//   plus = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };
//   componentDidMount(){
//     console.log("component rendered");
//   }
//   componentDidUpdate(){
//     console.log("component updated");
//   }
//   componentWillUnmount(){
//     console.log("Goodbye");
//   }
//   render(){
//     console.log("I'm rendering");
//     return (
//       <section>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.plus}>Plus</button>
//         <button onClick={this.minus}>Minus</button>
//       </section>
//     );
//   }
// }

// ##############################################################################

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
