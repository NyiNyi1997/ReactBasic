import React from "react";
import Card from "../card/card.components";

const CardLList = (props) => {
  console.log(props.players);
  return (
    <div className="card-list">
      {props.players.map((player) => (
        <Card key={player.id} player={player}></Card>
      ))}
    </div>
  );
};
export default CardLList;
