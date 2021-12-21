import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Card from './components/shared/Card';


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you shure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    return (
        <>
        <Header />
        <div className='container'>
            <FeedbackForm handleAdd= {addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback} />
            <h1></h1>
        </div>
        </>
    )
}

export default App