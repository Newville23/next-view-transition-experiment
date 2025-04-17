import Container from "@/shared/components/container"

export default function Overlay() {
  return(
    <div className="w-full absolute bottom-32 left-0 z-10">
      <Container>
        <h1 className="text-9xl font-bold mb-4 text-left text-white uppercase tracking-wider">F1 Teams</h1>
        <p className="text-4xl text-gray-400 text-left">
          Explore the iconic Formula 1 teams.
        </p>
      </Container>
    </div>  
  )
}