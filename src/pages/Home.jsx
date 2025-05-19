import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ScrollContainer } from "../components/ScrollContainer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="bg-dark">
			<ScrollContainer>
				<CharacterCard/>
			</ScrollContainer>
		</div>
	);
}; 