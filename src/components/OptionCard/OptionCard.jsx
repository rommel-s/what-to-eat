import { Trash } from "phosphor-react";

import { Card, Item } from "./OptionCard.style";

const OptionCard = ({ item, deleteOption }) => {
  return (
    <Card>
      <Item>{item.option}</Item>
      <Trash size={25} weight="bold" onClick={() => deleteOption(item.id)} />
    </Card>
  );
};

export default OptionCard;
