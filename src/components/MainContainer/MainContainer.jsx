import { PlusCircle } from "phosphor-react";

import { OptionsField } from "../Wrapper/Wrapper.style";
import OptionCard from "../OptionCard/OptionCard";
import { ContainerText } from "../../styles/Typography.style";
import { Image } from "../Images/Image.style";

const MainContainer = ({ addedItem, deleteOption }) => {
  return (
    <OptionsField>
      {addedItem.length === 0 ? (
        <>
          <Image src="assets/icons/plate.svg" alt="food"></Image>
          <ContainerText>
            Adicione opções <br />
            clicando em <PlusCircle size={16} weight="fill" />
          </ContainerText>
        </>
      ) : (
        <>
          {addedItem.map((item) => (
            <OptionCard item={item} deleteOption={deleteOption} />
          ))}
        </>
      )}
    </OptionsField>
  );
};

export default MainContainer;
