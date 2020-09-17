import { React } from "../../utils/Imports";

let AnswerListForm = (
  id,
  amount,
  setAmount,
  newAnswerId,
  setNewAnswerId,
  allAnswerIds,
  setAllAnswerIds,
  answersArray,
  setAnswersArray,
  setDisabledSubmit
) => {
  let handleChange = (e) => {
    const id = e.target.id;
    if (e.target.checked === true) {
      setAmount((prev) => {
        return [...prev, id];
      });
    } else {
      setAmount((prev) => {
        return prev.filter((element) => {
          return element !== id;
        });
      });
    }
    //document.getElementById(id).checked = !document.getElementById(id).checked
    //e.target.checked = !e.target.checked
  };

  const removeAnswerAndSummary = (id) => {
    console.log(id);

    setNewAnswerId();

    allAnswerIds.pop();
    setAllAnswerIds(allAnswerIds);

    // Poistetaan vastaus- ja yhteenveto-objekti arraystä
    answersArray.pop();
    answersArray.pop();
    setAnswersArray(answersArray);

    setDisabledSubmit(answersArray.length < 1);
  };

  return (
    <div>
      <p> Vastaus </p>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="radio"
              aria-label="Radio button for following text input"
            />
          </div>
        </div>

        <input
          type="text"
          id={"answerInput" + id} //newAnswerId}
          className="form-control"
          aria-label="Text input with radio button"
        />

        <div class="input-group-append">
          <button
            className="btn btn-secondary"
            type="button"
            id={id}
            data-toggle="tooltip"
            data-placement="top"
            data-type="info"
            title="Poista vastaus ja yhteenveto"
            onClick={removeAnswerAndSummary}
          >
            x
          </button>
        </div>
      </div>
      <br />
      <span style={{float: "left"}}>
        <label>
          <input
            id={id} //newAnswerId}
            type="checkbox"
            onChange={handleChange}
          ></input>
          &nbsp;&nbsp;Lisää Jatkokysymys
        </label>
      </span>
      <br />
      <br />
    </div>
  );
};

export default AnswerListForm;
