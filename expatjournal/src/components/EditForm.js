import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

const initialItem = {
    name: '',
    image_URL: '',
    location: '',
    content: '',
    author: '',
    date: '',
}

const EditForm = props => {
    const [ item, setItem ] = useState(initialItem);
    const { id } = useParams();

    useEffect(() => {
        const itemToUpdate = props.items.find(thing => `${thing.id}`=== id);
        if(itemToUpdate) {
            setItem(itemToUpdate);
        }
    }, [props.items, id]);

//     const changeHandler = e => {
//         e.persist();
        
//     }
    const handleSubmit = e => {
        axiosWithAuth()
        .put(`/api/stories/${id}`, item)
        .then(res => {
            props.setItem(res.data);
            props.history.push(`/api/stories/${id}`);
        })
        .catch(err => console.log(err));
    };
    
    return (
        <div>
          <h2>Update Movie</h2>
          <form onSubmit={handleSubmit}>
          <label>Title</label>
            <input 
            type='text' 
            id='name'
            name='name'
            required
            value={formInputs.name || ''}
            onChange={handleChanges}
            placeholder="Enter a title"
            />

          <label>City/Town, State, Country</label>
            <input 
            type='text' 
            id='location'
            name='location'
            value={formInputs.location || ''}
            onChange={handleChanges}
            placeholder="Enter a location"
            />

          <label>Choose an date for this trip</label>
            <input 
            type='text' 
            id='date'
            name='date'
            value={formInputs.date || ''}
            onChange={handleChanges}
            placeholder="Enter an date"
            />

          <label>Your amazing story goes here</label>
            <textarea 
            type='text' 
            id='content'
            name='content'
            required
            value={formInputs.content || ''}
            onChange={handleChanges}
            placeholder="Enter your story"
            />
          </form>  
        </div>
    )
}