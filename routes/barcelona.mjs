 export default [
    {
      id: 1,
      name: "Pablo Rodriguez",
      position: "Forward",
      age: 24,
      nationality: "Spain",
      goals: 20,
      assists: 10,
      imageUrl: "https://img.a.transfermarkt.technology/portrait/big/537765-1673252276.jpg?lm=1"
    },
    {
      id: 2,
      name: "Lucas Martinez",
      position: "Central Midfielder",
      age: 28,
      nationality: "Argentina",
      goals: 5,
      assists: 14,
      imageUrl: "https://s.hs-data.com/bilder/spieler/gross/310731.jpg"
    },
    {
      id: 3,
      name: "Miguel Santos",
      position: "Center Back",
      age: 30,
      nationality: "Brazil",
      goals: 2,
      assists: 3,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnvkEWHB-1t9-668WDCRPmTm2QMgs3JrppA&s"
    },
    {
      id: 4,
      name: "Marc-André ter Stegen",
      position: "Goalkeeper",
      age: 31,
      nationality: "Germany",
      cleanSheets: 18,
      saves: 85,
      imageUrl: "https://cdn.vox-cdn.com/thumbor/CrSLntkvNeMxXRnVfM5LEgbGYCM=/0x0:3014x4522/1200x800/filters:focal(1224x884:1706x1366)/cdn.vox-cdn.com/uploads/chorus_image/image/72637814/1612735971.0.jpg"
    },
    {
      id: 5,
      name: "Andres Suarez",
      position: "Defensive Midfielder",
      age: 27,
      nationality: "Spain",
      goals: 3,
      assists: 8,
      imageUrl: "https://c8.alamy.com/comp/R1DF9W/barcelona-spain-credit-d-11th-nov-2018-andres-guardado-betis-luis-suarez-barcelona-footballsoccer-spanish-primera-division-liga-santander-match-between-fc-barcelona-3-4-real-betis-at-camp-nou-stadium-in-barcelona-spain-credit-d-nakashimaafloalamy-live-news-R1DF9W.jpg"
    },
    {
      id: 6,
      name: "Jordi Morales",
      position: "Left Back",
      age: 29,
      nationality: "Spain",
      goals: 1,
      assists: 5,
      imageUrl: "https://media.gettyimages.com/id/515291326/photo/kansas-city-ks-pedro-morales-of-vancouver-whitecaps-takes-a-header-over-jordi-quintilla-of.jpg?s=612x612&w=gi&k=20&c=gtmn5iqYLm0WZtM8cSqwSTmq0zp8U36a4cvlnmTXH-0="
    },
    {
      id: 7,
      name: "Diego Gonzalez",
      position: "Right Back",
      age: 26,
      nationality: "Uruguay",
      goals: 2,
      assists: 4,
      imageUrl: "https://img.a.transfermarkt.technology/portrait/big/349836-1510233455.jpg?lm=1"
    },
    {
      id: 8,
      name: "Alejandro Torres",
      position: "Attacking Midfielder",
      age: 24,
      nationality: "Spain",
      goals: 8,
      assists: 12,
      imageUrl: "https://www.topdrawersoccer.com/media/player/?mediaId=127089"
    },
    {
      id: 9,
      name: "Rafael Diaz",
      position: "Right Winger",
      age: 22,
      nationality: "Brazil",
      goals: 15,
      assists: 7,
      imageUrl: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/RAPHINHA-%20RETRAT.jpg"
    },
    {
      id: 10,
      name: "Luis Ramirez",
      position: "Left Winger",
      age: 25,
      nationality: "Mexico",
      goals: 14,
      assists: 9,
      imageUrl: "https://2.bp.blogspot.com/-I8FhMg0xNOI/VoQsCPecz7I/AAAAAAAAF48/z7njUlbc6wI/s1600/sandro-ramirezfuera-partido-betis-mas-cerca-salida.jpg"
    },
    {
      id: 11,
      name: "Fernando Lopez",
      position: "Center Forward",
      age: 27,
      nationality: "Spain",
      goals: 21,
      assists: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FernandoLopesDhofar.jpg/800px-FernandoLopesDhofar.jpg"
    }
  ];

  router.get("/all",(req,res) => {
    res.send("barcelona")
})