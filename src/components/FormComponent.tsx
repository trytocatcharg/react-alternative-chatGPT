import React, { useState } from 'react'
import './FormComponent.scss';

export interface FormProps {
    isLoading: boolean;
    generateResponse: (newQuestion: string, setNewQuestion: any) => void;

}

const FormComponent = ({ isLoading, generateResponse }: FormProps ) => {
    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div className="form-section">
        <textarea
            rows={5}
            className="form-control"
            placeholder="Ask me anything..."
            value={newQuestion}
            disabled = {isLoading}
            onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>
        <div className='btn-container'>
        <button className="btn"
            disabled = {isLoading}
            onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                Generate Response 🤖
        </button>
        </div>
        
    </div>
    )
}

export default FormComponent