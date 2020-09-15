import React, {useState, createContext, useEffect} from 'react';
import {
    getLastQuestionId, 
    getLastFollowUpQuestionId
} from '../functions/ClientFunctions'

export const CRUDContext = createContext();

export const CRUDProvider = props => {
    const [newQuestionId, setNewQuestionId] = useState(0);
    const [newFollowUpQuestionId, setNewFollowUpQuestionId] = useState([]);
    const [answersArray, setAnswersArray] = useState([]);
    const [allAnswerIds, setAllAnswerIds] = useState([]);
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [newAnswerId, setNewAnswerId] = useState(0);
    const [followUpAmount, setFollowUpAmount] = useState([]);
    const [followUpChecked, setFollowUpChecked] = useState(false)
  
    
    useEffect(() => {  
        if(newQuestionId === 0){ 
            getNewQuestionId();
            if(newFollowUpQuestionId.length === 0){ 
                getNewFollowUpQuestionId();
                // if(newAnswerId.length === 0){ 
                //     getNewAnswerId();
                // } 
            } 
        }     
    });

    let getNewQuestionId = async () => {
        const response = (await getLastQuestionId()) + 1
        setNewQuestionId(response);
    }
    let getNewFollowUpQuestionId = async () => {
        const response = (await getLastFollowUpQuestionId()) + 1
        setNewFollowUpQuestionId(prevNewFollowUpQuestionId => [...prevNewFollowUpQuestionId, response]);
    }
    // let getNewAnswerId = async () => {
    //     const response = (await getLastAnswerId()) + 1
    //     setNewAnswerId(prevNewAnswerId => [...prevNewAnswerId, response]);
    // }

    return (
        <CRUDContext.Provider value={{ 
            newQuestionIdObject: [newQuestionId, setNewQuestionId],
            newFollowUpIdObject: [newFollowUpQuestionId, setNewFollowUpQuestionId],
            answersArrayObject: [answersArray, setAnswersArray],
            allAnswerIdsObject: [allAnswerIds, setAllAnswerIds],
            disabledSubmitObject: [disabledSubmit, setDisabledSubmit],
            newAnswerIdObject: [newAnswerId, setNewAnswerId],
            followUpAmountObject: [followUpAmount, setFollowUpAmount],
            followUpCheckedObject: [followUpChecked, setFollowUpChecked]
        }}>
            {props.children}
        </CRUDContext.Provider>
    )
}





