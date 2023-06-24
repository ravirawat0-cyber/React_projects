import { useState } from "react";
import classes from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
export default function UserInput(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalulate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    props.isReset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <div>
          <label>Current Savings ($)</label>
          <input
            type="number"
            className="current-saving"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
          />
        </div>
        <div>
          <label>Yearly Savings ($)</label>
          <input
            type="number"
            className="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </div>
      </div>

      <div className={classes["input-group"]}>
        <div>
          <label>Expected Interest (%, per year)</label>
          <input
            type="number"
            className="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </div>
        <div>
          <label>Investment Duration (years)</label>
          <input
            type="number"
            className="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
          />
        </div>
      </div>

      <div className={classes.actions}>
        <button
          type="reset"
          className={classes["button-reset"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes["button-submit"]}>
          Calculate
        </button>
      </div>
    </form>
  );
}
