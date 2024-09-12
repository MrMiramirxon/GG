export default [
    {
      id: 1,    
      name: "Harry Thompson",
      position: "Striker",
      age: 28,
      nationality: "England",
      goals: 25,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Oliver Brown",
      position: "Central Midfielder",
      age: 26,
      nationality: "England",
      goals: 6,
      assists: 10,
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Lucas Andrade",
      position: "Center Back",
      age: 30,
      nationality: "Brazil",
      goals: 3,
      assists: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Hugo Lloris",
      position: "Goalkeeper",
      age: 34,
      nationality: "France",
      cleanSheets: 15,
      saves: 88,
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Pierre Ndombele",
      position: "Defensive Midfielder",
      age: 27,
      nationality: "France",
      goals: 4,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Ryan Johnson",
      position: "Left Back",
      age: 25,
      nationality: "Scotland",
      goals: 1,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Kyle Davis",
      position: "Right Back",
      age: 29,
      nationality: "England",
      goals: 2,
      assists: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "James Cooper",
      position: "Attacking Midfielder",
      age: 24,
      nationality: "England",
      goals: 9,
      assists: 12,
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Roberto Diaz",
      position: "Right Winger",
      age: 22,
      nationality: "Spain",
      goals: 14,
      assists: 8,
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Eduardo Silva",
      position: "Left Winger",
      age: 26,
      nationality: "Brazil",
      goals: 13,
      assists: 7,
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      id: 11,
      name: "Vincent Kane",
      position: "Center Forward",
      age: 29,
      nationality: "England",
      goals: 22,
      assists: 6,
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];
  
  router.get("/all",(req,res) => {
    res.send("tottenham")
}) 