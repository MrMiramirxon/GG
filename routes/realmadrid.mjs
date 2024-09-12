export default [
  {
    id: 1,
    name: "Carlos Perez",
    position: "Forward",
    age: 24,
    nationality: "Spain",
    goals: 18,
    assists: 9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bar%C3%A7a_Napoli_10_%28cropped%29.jpg/1200px-Bar%C3%A7a_Napoli_10_%28cropped%29.jpg"
  },
  {
    id: 2,
    name: "Mateo Lopez",
    position: "Midfielder", 
    age: 27,
    nationality: "Argentina",
    goals: 6,
    assists: 12,
    imageUrl: "https://defensorsporting.com.uy/wp-content/uploads/2007/08/Mateo-Lopez.jpg"
  },
  {
    id: 3,
    name: "Rafael Santos",
    position: "Center Back",
    age: 30,
    nationality: "Brazil",
    goals: 3,
    assists: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Rafael_Alves_dos_Santos.jpg"
  },
  {
    id: 4,
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    age: 31,
    nationality: "Belgium",
    cleanSheets: 20,
    saves: 90,
    imageUrl: "https://assets.goal.com/images/v3/blt2eb4893bbbf3bf14/Thibaut-Courtois.jpeg"
  },
  {
    id: 5,
    name: "David Martinez",
    position: "Defensive Midfielder",
    age: 23,
    nationality: "Colombia",
    goals: 4,
    assists: 10,
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpghttps://tmssl.akamaized.net/images/foto/galerie/martinez-david-venezuela-u17-2023-1703856518-125180.jpg?lm=1703856611"
  },
  {
    id: 6,
    name: "Alejandro Gomez",
    position: "Forward",
    age: 28,
    nationality: "Spain",
    goals: 22,
    assists: 7,
    imageUrl: "https://vcdn1-english.vnecdn.net/2023/10/21/gomezz-1697853122-1697853133-4642-1697853138.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=2KUWAuB3wkRUl3tkXMHZcQ"
  },
  {
    id: 7,
    name: "Fernando Ruiz",
    position: "Right Back",
    age: 29,
    nationality: "Portugal",
    goals: 2,
    assists: 4,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYTZiNzkwYWYtYjg4Ni00NDYxLWFlM2QtMmQ4OTgwMzRmODI5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    id: 8,
    name: "Sergio Alvarez",
    position: "Central Midfielder",
    age: 25,
    nationality: "Spain",
    goals: 5,
    assists: 11,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/XXIII_Memorial_Quinocho_%28RC_Celta_vs_Mainz_05%29_-_06_%28cropped%29.jpg/1200px-XXIII_Memorial_Quinocho_%28RC_Celta_vs_Mainz_05%29_-_06_%28cropped%29.jpg"
  },
  {
    id: 9,
    name: "vinicius jr",
    position: "Left Winger",
    age: 21,
    nationality: "Brazil",
    goals: 15,
    assists: 8,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdJ2bmqoshxZYK_Z0EScN83wElYeofiZN6w&s"
  },
  {
    id: 10,
    name: "Andres Silva",
    position: "Left Back",
    age: 32,
    nationality: "Spain",
    goals: 1,
    assists: 3,
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.transfermarkt.com%2Fandre-silva%2Fprofil%2Fspieler%2F198008&psig=AOvVaw0s4vjJm5D0Tq4rsk6sT9bG&ust=1724853325640000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND4276plYgDFQAAAAAdAAAAABAE"
  },
  {
    id: 11,
    name: "Luis Fernandez",
    position: "Attacking Midfielder",
    age: 26,
    nationality: "Spain",
    goals: 7,
    assists: 14,
    imageUrl: "https://img.a.transfermarkt.technology/portrait/big/230212-1670964058.png?lm=1"
  }
];

router.get("/all",(req,res) => {
  res.send("realmadrid")
})