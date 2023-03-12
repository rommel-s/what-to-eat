import { useState } from "react";

import { Plus } from "phosphor-react";

import UserInput from "../Input/Input.style";
import { MainButton, AddButton } from "../Buttons/Button.style";
import { InputAndChoose, InputArea } from "../Wrapper/Wrapper.style";

const Footer = ({ chooseOption, addOption }) => {
  const [optionInput, setOptionInput] = useState(null);
  const [id, setId] = useState(0);

  const createOption = (opt) => {
    const optionObj = { option: opt, id: id };
    setId(id + 1);
    addOption(optionObj);
    document.getElementById("userInput").value = null;
  };

  return (
    <InputAndChoose>
      <InputArea>
        <UserInput
          id="userInput"
          placeholder="Nova opção"
          onChange={(e) => setOptionInput(e.target.value)}
        ></UserInput>
        <AddButton onClick={() => createOption(optionInput)}>
          <Plus size={16} weight="bold" />
        </AddButton>
      </InputArea>

      <MainButton onClick={() => chooseOption()}>Escolher</MainButton>
    </InputAndChoose>
  );
};

export default Footer;
