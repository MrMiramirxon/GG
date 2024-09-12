export default[
    {
      id: 1,
      name: "Dominic Calvert",
      position: "Striker",
      age: 26,
      nationality: "England",
      goals: 16,
      assists: 4,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Abdoulaye Doucoure",
      position: "Central Midfielder",
      age: 30,
      nationality: "Mali",
      goals: 6,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "James Tarkowski",
      position: "Center Back",
      age: 31,
      nationality: "England",
      goals: 2,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Jordan Pickford",
      position: "Goalkeeper",
      age: 30,
      nationality: "England",
      cleanSheets: 12,
      saves: 90,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Amadou Onana",
      position: "Defensive Midfielder",
      age: 22,
      nationality: "Belgium",
      goals: 3,
      assists: 4,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Vitaliy Mykolenko",
      position: "Left Back",
      age: 24,
      nationality: "Ukraine",
      goals: 1,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Nathan Patterson",
      position: "Right Back",
      age: 22,
      nationality: "Scotland",
      goals: 1,
      assists: 3,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Dwight McNeil",
      position: "Left Winger",
      age: 24,
      nationality: "England",
      goals: 7,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Demarai Gray",
      position: "Right Winger",
      age: 28,
      nationality: "Jamaica",
      goals: 6,
      assists: 4,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Alex Iwobi",
      position: "Attacking Midfielder",
      age: 27,
      nationality: "Nigeria",
      goals: 5,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Michael Keane",
      position: "Center Back",
      age: 31,
      nationality: "England",
      goals: 2,
      assists: 1,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];

  router.get("/all",(req,res) => {
    res.send("everton")
})