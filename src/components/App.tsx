import Box from '@mui/material/Box';
import React, { useState } from 'react'
import '../style.scss';
import AnswerComponent from './AnswerComponent';
import FormComponent from './FormComponent';
import LoadingComponent from './LoadingComponent';
import { ResponseModel } from './response.model';
import writeSonic from '../assets/write-sonic-logo.svg';
import reactLogo from '../assets/react-logo.svg';

const App = () => {
      const [storedValues, setStoredValues] = useState([] as ResponseModel[]);
      const [loading, setLoading] = useState(false);

      const generateResponse = async (newQuestion: any, setNewQuestion: any) => {
      const lang = document.documentElement?.lang || 'en';        

        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-KEY': import.meta.env.VITE_APP_WRITE_SONIC_API_KEY as string
          },
          body: JSON.stringify({
            enable_google_results: 'true',
            enable_memory: false,
            input_text: newQuestion
          })
        };
      setLoading(true);
      const response =  await fetch(`https://api.writesonic.com/v2/business/content/chatsonic?
                                      engine=premium&language=${lang}`, options);
      const data = await response.json();
     
      if (data.message) {
        setLoading(false);
        setStoredValues([
            {
                question: newQuestion,
                answer: data.message,
            },
            ...storedValues,
        ]);
        setNewQuestion('');
    }
  };
    
  return (
    <>
    <Box
    sx={{display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center', 
          gap: '5px',
          margin: '10px'}}
    >
      <div className='img-container'>
        <img src={reactLogo} alt="React Logo" style={{width: '90px'}}></img>
        <a href="https://writesonic.com/chat" 
          target="_blank">
            <img src={writeSonic} alt="Write Sonic Logo" ></img>
          </a>
      </div>
      <h2> REACT + WRITESONIC AI</h2>
      <p>
            You are welcome to ask me any question you may have, and I will do my best to offer you a
						reliable response. Kindly keep in mind that I am a machine and
						operate solely based on programmed algorithms.
      </p>
    </Box>
      <Box
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}
      >
          <FormComponent generateResponse={generateResponse} isLoading={loading} ></FormComponent>
          {
            loading && <LoadingComponent />
          }
          <AnswerComponent storedValues={storedValues} />
          
      </Box>

    </>
  )
}

export default App
// {
//   (storedValues.length > 0 && !loading) && <AnswerComponent storedValues={storedValues} />
// } 