import { useState, useMemo } from "react";
import cardsData from "./data";
import Overview from "./components/Overview";
import Details from "./components/Details";
import Controls from "./components/Controls";
import "./App.css";

export default function App() {
  const [cards, setCards] = useState(cardsData);
  const [selectedCard, setSelectedCard] = useState(null);

  const sortAsc = () => {
    setCards([...cards].sort((a, b) =>
      a.playerName.localeCompare(b.playerName)
    ));
  };

  const sortDesc = () => {
    setCards([...cards].sort((a, b) =>
      b.playerName.localeCompare(a.playerName)
    ));
  };

  const submitData = () => {
    if (!selectedCard) return;

    console.log("Submitting JSON:", JSON.stringify(selectedCard, null, 2));

    setTimeout(() => {
      alert("Data submitted successfully (mocked AJAX)");
    }, 800);
  };

  return (
    <div className="app">
      <h1>The Card Game</h1>

      <Controls
        sortAsc={sortAsc}
        sortDesc={sortDesc}
        submit={submitData}
        disabled={!selectedCard}
      />

      <div className="layout">
        <Details card={selectedCard} />
        <Overview
          cards={cards}
          selected={selectedCard}
          onSelect={setSelectedCard}
        />
      </div>
    </div>
  );
}
