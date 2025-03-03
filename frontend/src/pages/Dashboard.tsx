// import React from "react";
import GameblocTournaments from "../components/Dashborad/GameBloc Tournaments/GameblocTournaments";
import Tutorials from "../components/Dashborad/Tutorials/Tutorial";
import Header from "../components/Landing/Header";
import Carousel from "../components/Dashborad/Carousel/Carousel";
function Dashboard() {
  return (
    <div>
      <Header />
      <Carousel />
      <Tutorials />
      <GameblocTournaments />
    </div>
  );
}

export default Dashboard;
