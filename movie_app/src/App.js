import React from "react";
import PropTypes from "prop-types";

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
//   return <div>
//     <h2>FC Bayern {name}</h2>
//     <h4>{rating}/5</h4>
//     <img src={image} alt={name} />
//   </div>
// }

// Player.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function App() {
//   return <div>
//     {bayernPlayers.map(player => (
//       <Player key={player.id} name={player.name} image={player.image} rating={player.rating}/>
//     ))}
//   </div>;
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
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.plus}>Plus</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// ##############################################################################


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!"}</div>
  }
}

export default App;