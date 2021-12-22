import { FaTimes } from 'react-icons/fa';
import {useContext} from 'react';
import React from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';


import Card from './shared/Card'


function FeedbackItem({ item }) {
    const {deleteFeedback} = useContext(FeedbackContext)


    return (
        <Card>   
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
         </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
