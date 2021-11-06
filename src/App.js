import './App.css';
import ItemComponent from "./ItemComponent";
import Data from "./Data";

function App() {
  return (
    <>
      <div className="main-div">
        <h1>Accordion</h1>
        {
          Data.map((currentData, index) => {
            const { id, question, answer } = currentData;
            return (
              <>
                <ItemComponent
                  key = {index}
                  id={id}
                  question={question}
                  answer={answer}
                />
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
