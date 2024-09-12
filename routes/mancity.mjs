 export default[
    {
      id: 1,
      name: "Kevin De Bruyne",
      position: "Central Midfielder",
      age: 31,
      nationality: "Belgium",
      goals: 12,
      assists: 18,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Erling Haller",
      position: "Striker",
      age: 23,
      nationality: "Norway",
      goals: 30,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Phil Anderson",
      position: "Attacking Midfielder",
      age: 21,
      nationality: "England",
      goals: 10,
      assists: 11,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Rúben Dias",
      position: "Center Back",
      age: 26,
      nationality: "Portugal",
      goals: 3,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Ederson Moraes",
      position: "Goalkeeper",
      age: 30,
      nationality: "Brazil",
      cleanSheets: 19,
      saves: 80,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Bernardo Silva",
      position: "Right Winger",
      age: 28,
      nationality: "Portugal",
      goals: 8,
      assists: 10,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Jack Greaves",
      position: "Left Winger",
      age: 27,
      nationality: "England",
      goals: 9,
      assists: 12,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Rodrigo Hernandez",
      position: "Defensive Midfielder",
      age: 26,
      nationality: "Spain",
      goals: 5,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Kyle Walker",
      position: "Right Back",
      age: 32,
      nationality: "England",
      goals: 1,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "João Cancelo",
      position: "Left Back",
      age: 29,
      nationality: "Portugal",
      goals: 2,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "John Stones",
      position: "Center Back",
      age: 29,
      nationality: "England",
      goals: 4,
      assists: 3,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];

  router.get("/all",(req,res) => {
    res.send("mancity")
})