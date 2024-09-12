export default[
    {
      id: 1,
      name: "Mason Grant",
      position: "Attacking Midfielder",
      age: 24,
      nationality: "England",
      goals: 10,
      assists: 12,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Kai Muller",
      position: "Striker",
      age: 25,
      nationality: "Germany",
      goals: 18,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Thiago Silva",
      position: "Center Back",
      age: 38,
      nationality: "Brazil",
      goals: 2,
      assists: 1,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Édouard Mendy",
      position: "Goalkeeper",
      age: 31,
      nationality: "Senegal",
      cleanSheets: 15,
      saves: 85,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "N'Golo Kanté",
      position: "Defensive Midfielder",
      age: 32,
      nationality: "France",
      goals: 2,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Ben Chilwell",
      position: "Left Back",
      age: 26,
      nationality: "England",
      goals: 3,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Reece James",
      position: "Right Back",
      age: 24,
      nationality: "England",
      goals: 4,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Raheem Sterling",
      position: "Left Winger",
      age: 29,
      nationality: "England",
      goals: 14,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Hakim Ziyech",
      position: "Right Winger",
      age: 30,
      nationality: "Morocco",
      goals: 11,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Enzo Fernández",
      position: "Central Midfielder",
      age: 22,
      nationality: "Argentina",
      goals: 5,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Kalidou Koulibaly",
      position: "Center Back",
      age: 33,
      nationality: "Senegal",
      goals: 1,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];
  
  router.get("/all",(req,res) => {
    res.send("brentford")
})