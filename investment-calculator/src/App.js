import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  const [userInput, SetUserInput] = useState(null);
  const [userReset, SetUserReset] = useState(true);
  const calculateHandler = (userInput) => {
    SetUserReset(false);
    SetUserInput(userInput);
  };
  const resetHandler = () => {
    SetUserReset(true);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div className="App">
      <Header />
      <UserInput onCalulate={calculateHandler} isReset={resetHandler} />
      {userReset && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {!userReset && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
