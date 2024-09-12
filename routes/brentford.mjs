export default[
    {
      id: 1,
      name: "Ivan Toney",
      position: "Striker",
      age: 27,
      nationality: "England",
      goals: 20,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Christian Nørgaard",
      position: "Central Midfielder",
      age: 30,
      nationality: "Denmark",
      goals: 5,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Ben Mee",
      position: "Center Back",
      age: 34,
      nationality: "England",
      goals: 3,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "David Raya",
      position: "Goalkeeper",
      age: 28,
      nationality: "Spain",
      cleanSheets: 14,
      saves: 88,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Mathias Jensen",
      position: "Defensive Midfielder",
      age: 26,
      nationality: "Denmark",
      goals: 4,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Rico Henry",
      position: "Left Back",
      age: 25,
      nationality: "England",
      goals: 2,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Aaron Hickey",
      position: "Right Back",
      age: 21,
      nationality: "Scotland",
      goals: 1,
      assists: 4,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Bryan Mbeumo",
      position: "Right Winger",
      age: 24,
      nationality: "Cameroon",
      goals: 10,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Yoane Wissa",
      position: "Left Winger",
      age: 26,
      nationality: "Congo",
      goals: 9,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Josh Dasilva",
      position: "Attacking Midfielder",
      age: 25,
      nationality: "England",
      goals: 6,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Ethan Pinnock",
      position: "Center Back",
      age: 30,
      nationality: "Jamaica",
      goals: 2,
      assists: 1,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];

  router.get("/all",(req,res) => {
    res.send("brentford")
})
  