function Player({name, image}) {
  return <div>
    <h2>FC Bayern {name}</h2>
    <img src={image} />
  </div>
}

const bayernPlayers = [
  {
    name: "Manuel Neuer",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/manuel_neuer_.png"
  },
  {
    name: "Thomas Muller",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/thomas_mueller_.png"
  },
  {
    name: "Robert Lewandowski",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/robert_lewandowski_.png"
  },
  {
    name: "David Alaba",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/david_alaba_.png"
  },
  {
    name: "Jerome Boateng",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/jerome_boateng_.png"
  },
  {
    name: "Javi Martinez",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/javi_martinez_.png"
  },
  {
    name: "Joshua Kimmich",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/joshua_kimmich_.png"
  },
  {
    name: "Kingsley Coman",
    image: "https://img.fcbayern.com/image/upload/t_cms-fullbody/f_auto/w_349,h_780,c_fill/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/kingsley_coman_.png"
  }
]

function App() {
  return <div>
    {bayernPlayers.map(player => (
      <Player name={player.name} image={player.image}/>
    ))}
  </div>;
}

export default App;
