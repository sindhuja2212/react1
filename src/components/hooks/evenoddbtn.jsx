import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { CardTypeData } from "./jsHelper";

const CardType = () => {
  const [card] = useState(CardTypeData());
  const [clickedCardType, setClickedCardType] = useState();

  const clickCardHandler = (cardId) => {
    const clickedCard = cardId;
    const cardType = clickedCard % 2 == 0 ? "EVEN" : "ODD";
    const finalValue = `This selected card is ${cardType};`
    setClickedCardType(finalValue);
  };
  return (
    <>
      <h1>Card Type</h1>
      {<h1>{clickedCardType}</h1>}


      <div className="container mt-5">
        <div className="row">
        
        
        {card.map((eachCard) => {
        return (
          
              <div onClick={() => {clickCardHandler(eachCard.id)}} className="col-sm-4 border m-2 p-2 w-25 text-center" >
                <h1>{eachCard.text}</h1>
                <Button variant="primary">Only for showoff</Button>
            </div>
        
        );
      })}
        </div>
      </div>
      
    </>
  );
};
export default CardType;