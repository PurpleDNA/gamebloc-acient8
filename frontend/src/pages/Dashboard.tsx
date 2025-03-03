// import React from "react";
import GameblocTournaments from "../components/Dashborad/GameBloc Tournaments/GameblocTournaments";
import Tutorials from "../components/Dashborad/Tutorials/Tutorial";
import Header from "../components/Landing/Header";
function Dashboard() {
  return (
    <div>
      <Header />
      <Tutorials />
      <GameblocTournaments />
    </div>
  );
}

export default Dashboard;
