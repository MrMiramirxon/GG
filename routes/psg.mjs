 export default[
    {
      id: 1,
      name: "Kylian Lefevre",
      position: "Striker",
      age: 25,
      nationality: "France",
      goals: 29,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Marco Bernardi",
      position: "Central Midfielder",
      age: 28,
      nationality: "Italy",
      goals: 7,
      assists: 11,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Thiago Santos",
      position: "Center Back",
      age: 31,
      nationality: "Brazil",
      goals: 2,
      assists: 3,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Gianluigi Donnarumma",
      position: "Goalkeeper",
      age: 25,
      nationality: "Italy",
      cleanSheets: 20,
      saves: 95,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Leandro Paredes",
      position: "Defensive Midfielder",
      age: 29,
      nationality: "Argentina",
      goals: 4,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Achraf Hakimi",
      position: "Right Back",
      age: 25,
      nationality: "Morocco",
      goals: 3,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Nuno Mendes",
      position: "Left Back",
      age: 22,
      nationality: "Portugal",
      goals: 2,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Lionel García",
      position: "Attacking Midfielder",
      age: 33,
      nationality: "Argentina",
      goals: 15,
      assists: 12,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Neymar Da Silva",
      position: "Left Winger",
      age: 32,
      nationality: "Brazil",
      goals: 17,
      assists: 10,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Lucas Delgado",
      position: "Right Winger",
      age: 23,
      nationality: "Argentina",
      goals: 13,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Sergio Ramos",
      position: "Center Back",
      age: 37,
      nationality: "Spain",
      goals: 5,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];
  
  router.get("/all",(req,res) => {
    res.send("psg")
})