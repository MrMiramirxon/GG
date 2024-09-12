export default[
    {
      id: 1,
      name: "Jordan Smith",
      position: "Striker",
      age: 27,
      nationality: "England",
      goals: 23,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Adam Williams",
      position: "Central Midfielder",
      age: 26,
      nationality: "Wales",
      goals: 7,
      assists: 11,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Diego Mendes",
      position: "Center Back",
      age: 29,
      nationality: "Portugal",
      goals: 4,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Alisson Becker",
      position: "Goalkeeper",
      age: 31,
      nationality: "Brazil",
      cleanSheets: 17,
      saves: 89,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Fabio Silva",
      position: "Defensive Midfielder",
      age: 28,
      nationality: "Brazil",
      goals: 3,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Andrew Robertson",
      position: "Left Back",
      age: 29,
      nationality: "Scotland",
      goals: 1,
      assists: 10,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Trent Alexander",
      position: "Right Back",
      age: 25,
      nationality: "England",
      goals: 2,
      assists: 12,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Roberto Fernandes",
      position: "Attacking Midfielder",
      age: 26,
      nationality: "Brazil",
      goals: 10,
      assists: 9,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Mohamed Khaled",
      position: "Right Winger",
      age: 24,
      nationality: "Egypt",
      goals: 17,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Luis Diaz",
      position: "Left Winger",
      age: 26,
      nationality: "Colombia",
      goals: 16,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Sadio Mane",
      position: "Center Forward",
      age: 30,
      nationality: "Senegal",
      goals: 18,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];
  
  router.get("/all",(req,res) => {
    res.send("liverpool")
})