import React from 'react'
import { ResponseModel } from './response.model';
import './AnswerComponent.scss';

export interface AnswerProps {
  storedValues: ResponseModel[]
}
const AnswerComponent = ({storedValues}: AnswerProps) => {

  return (
    <>
      <div className="answer-container">
        {storedValues.map((value, index) => {
                        return (
                            <div className="answer-section" key={index}>
                                <p className="question">{value.question}</p>
                                <p className="answer"  dangerouslySetInnerHTML={{__html:value.answer as string}} ></p>
                                <div className="copy-icon">
                                    <i className="fa-solid fa-copy"></i>
                                </div>
                            </div>
                        );
        })}
      </div>
    </>
  )
}

export default AnswerComponent