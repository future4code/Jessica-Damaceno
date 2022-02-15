import { StarshipsCardContainer, Starships } from "./StarshipsCardSTYLE";
import { Image } from "./StarshipsCardSTYLE";
import Battlefront from "../../assets/Battlefront.jpg";

export const StarshipsCard = ({ starships }) => {
  return (
    <StarshipsCardContainer>
      <Image src={Battlefront} />
      <Starships>{starships.name}</Starships>
    </StarshipsCardContainer>
  );
};
