import { React, CRUDContext, useContext } from "../../utils/Imports";

let AnswerListForm = (props) => {
  const {
    answersArrayObject,
    allAnswerIdsObject,
    disabledSubmitObject,
    followUpAmountObject,
    followUpCheckedObject
  } = useContext(CRUDContext);
  const [answersArray, setAnswersArray] = answersArrayObject;
  const [allAnswerIds, setAllAnswerIds] = allAnswerIdsObject;
  const [disabledSubmit, setDisabledSubmit] = disabledSubmitObject;
  const [followUpAmount, setFollowUpAmount]=  followUpAmountObject;
  const [followUpChecked, setFollowUpChecked] = followUpCheckedObject;
  
  const removeAnswerAndSummary = (e) => {
    const id = e.target.id;
    const index = allAnswerIds.indexOf(parseInt(id));

    

    if (index !== -1) {
      const newArray = [...allAnswerIds];
      newArray.splice(index, 1);

      setAllAnswerIds((prev) => {
        // let array = [...prev]
        // array.splice(index, 1)
        return newArray;
      });

      // Poistetaan vastaus- ja yhteenveto-objekti arraystä

      const newAnsArray = [...answersArray];
      newAnsArray.splice(index, 1);

      setAnswersArray((prev) => {
        // let array = [...prev]
        // array.splice(index, 1)
        return newAnsArray;
      });

      setDisabledSubmit(newAnsArray.length === 0);
    }

    
  };

  let handleChange = (e) => {
    const id = e.target.id;
    if (e.target.checked === true) {
      setFollowUpAmount((prev) => {
        return [...prev, id];
      });
      setFollowUpChecked(true)
    } else {
      setFollowUpAmount((prev) => {
        return prev.filter((element) => {
          return element !== id;
        });
      
      });
      setFollowUpChecked(false)
    }
   
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
          id={"answerInput" + props.id}
          className="form-control"
          aria-label="Text input with radio button"
          defaultValue={props.txt}
        />

        <div class="input-group-append">

        <button
            className="btn btn-secondary greyBtn"
            type="button"
            
            id={props.id}
            data-toggle="tooltip"
            data-placement="top"
            data-type="info"
            title="Poista vastaus ja yhteenveto"
            onClick={removeAnswerAndSummary}
          >
           <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             
              <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> 
           </svg>
          </button>
          
        </div>
      </div>
      <br />
      <span style={{ float: "left" }}>
        <label>
          <input
            id={props.id}
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
