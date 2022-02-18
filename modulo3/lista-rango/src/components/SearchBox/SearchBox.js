import styled from "styled-components";
import { formColor, shadowColor } from "../../Constants/colors";

const InputContainer = styled.div`
display: flex;
justify-content: center;
margin: 30px
`;

const InputStyled = styled.input`
  /* top: 155px; */
  /* left: 221px; */
  width: 840px;
  height: 40px;

  background: ${formColor} 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px ${shadowColor};
  opacity: 1;
`;

export const SearchBox = ({ value, onChange }) => {
  return (
    <InputContainer>
      <InputStyled value={value} onChange={onChange} />
    </InputContainer>
  );
};
