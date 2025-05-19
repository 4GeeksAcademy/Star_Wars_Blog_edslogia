import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ScrollContainer } from "../components/ScrollContainer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="bg-dark">
      <ScrollContainer title="Characters">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ScrollContainer>
	  
      <ScrollContainer title="Planets">
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
      </ScrollContainer>
    </div>
  );
};
