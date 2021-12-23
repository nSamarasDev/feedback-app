import {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch feedback
    const fetchFeedback = async () => {
        const responce = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await responce.json()

        setFeedback(data)
        setIsLoading(false)
    }

    //Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you shure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    //Update feedback Item
    const updateFeedback = (id, upItem) => {
       setFeedback(feedback.map((item) => item.id === id ? {...item, ...upItem } : item))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
 
    return ( 
        <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            
        }}
        >
            {children}
        </FeedbackContext.Provider>
   ) 
}

export default FeedbackContext