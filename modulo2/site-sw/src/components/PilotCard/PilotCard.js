import { PilotCardContainer, Name } from "./PilotCardSTYLE";
import { Image } from "./PilotCardSTYLE";
import starWars from "../../assets/starWars.jpg";

export const PilotCard = ({ name, image }) => {
  return (
    <PilotCardContainer>
      <Image src={starWars} />
      <Name>{name}</Name>
    </PilotCardContainer>
  );
};
