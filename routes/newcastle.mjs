export default[
    {
      id: 1,
      name: "Callum Wilson",
      position: "Striker",
      age: 31,
      nationality: "England",
      goals: 15,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Bruno Guimarães",
      position: "Central Midfielder",
      age: 26,
      nationality: "Brazil",
      goals: 7,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Sven Botman",
      position: "Center Back",
      age: 24,
      nationality: "Netherlands",
      goals: 3,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Nick Pope",
      position: "Goalkeeper",
      age: 32,
      nationality: "England",
      cleanSheets: 18,
      saves: 87,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Joelinton",
      position: "Defensive Midfielder",
      age: 27,
      nationality: "Brazil",
      goals: 4,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Kieran Trippier",
      position: "Right Back",
      age: 33,
      nationality: "England",
      goals: 2,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Dan Burn",
      position: "Left Back",
      age: 32,
      nationality: "England",
      goals: 1,
      assists: 4,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Miguel Almirón",
      position: "Right Winger",
      age: 30,
      nationality: "Paraguay",
      goals: 12,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Allan Saint-Maximin",
      position: "Left Winger",
      age: 26,
      nationality: "France",
      goals: 8,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Sean Longstaff",
      position: "Central Midfielder",
      age: 26,
      nationality: "England",
      goals: 4,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Fabian Schär",
      position: "Center Back",
      age: 32,
      nationality: "Switzerland",
      goals: 2,
      assists: 1,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];

  router.get("/all",(req,res) => {
    res.send("newcastle")
})