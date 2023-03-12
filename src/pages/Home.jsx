import { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import MainContainer from "../components/MainContainer/MainContainer";

const Home = () => {
  const [items, setItems] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [optionChoose, setOptionChoose] = useState(null);

  const [headerMessage, setHeaderMessage] = useState(
    "Clique no botão para escolher uma opção aleatória"
  );

  const addOption = (addedItem) => {
    if (addedItem.option === null) {
      setHeaderMessage("Por favor, insira pelo menos três opções!");
    } else {
      setItems([...items, addedItem]);
    }
  };

  const deleteOption = (id) => {
    let filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const chooseOption = (e) => {
    if (items.length === 0) {
      setHeaderMessage("Sem opções disponíveis não consigo escolher!");
    } else {
      let randomOption = items[Math.floor(Math.random() * items.length)];
      console.log(randomOption.option);
      setShowModal((prev) => !prev);
      setOptionChoose(randomOption.option);
    }
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        optionChoose={optionChoose}
      />
      <Header headerInfo={headerMessage} />
      <MainContainer addedItem={items} deleteOption={deleteOption} />
      <Footer addOption={addOption} chooseOption={chooseOption} />
    </>
  );
};

export default Home;
