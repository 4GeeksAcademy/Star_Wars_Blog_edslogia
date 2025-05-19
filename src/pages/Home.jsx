import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ScrollContainer } from "../components/ScrollContainer.jsx";
import { SingleCard } from "../components/SingleCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="bg-dark">
      <ScrollContainer title="Characters">
        <SingleCard
          name="Luke Skywalker"
          item1="Height: 177"
          item2="Eye color: blue"
          item3="Gender: Male"
          imglink="https://lumiere-a.akamaihd.net/v1/images/cassian-andor-main_69925fe9.jpeg?region=359%2C0%2C1414%2C798"
        />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </ScrollContainer>

      <ScrollContainer title="Planets">
        <SingleCard
          name="Lola Sayu"
          item1="Population: 177"
          item2="Climate: Arid"
          item3="Gravity: 1G"
          imglink="https://lumiere-a.akamaihd.net/v1/images/lola-sayu_e41867d8.jpeg?region=69%2C0%2C1422%2C800"
        />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </ScrollContainer>
    </div>
  );
};
