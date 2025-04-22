import Container from "@/shared/components/container"
import { unstable_ViewTransition as ViewTransition } from 'react';
import TeamsCards from "./teamsCards";
export default function Overlay() {
  return(
    <ViewTransition name="home-description">
    <div className="w-full absolute bottom-32 left-0 z-10" >
      <Container>
          <h1 className="text-9xl font-bold mb-4 text-left text-white uppercase tracking-wider font-exo2">F1 Teams</h1>
          <p className="text-2xl tracking-wider text-gray-400 text-left mb-3 font-orbitron">
            Explore the most iconic Formula 1 teams.
          </p>
          <TeamsCards/>
      </Container>
    </div>  
    </ViewTransition>
  )
}