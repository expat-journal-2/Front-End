import React, { useEffect, useState } from 'react';
import axios from 'axios';
//may need to upgrade to AWA
import { deleteStory } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Story(props) {
    const [trip, setTrip] = useState([]);
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

    useEffect(() => {
        axios
        .get(`https://expat-journal.herokuapp.com/${props.match.params.id}`)
        .then(res => {
            setTrip(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const TripActions = () => {
        if(currentUser === trip.user) {
            return (
                <div className='top-bar-actions'>
                  <Link className='edit-btn' to={`/edit/${props.match.params.id}`}>Edit Post</Link>  
                  
                </div>
            )
        }
    }
}
//this page needs a ton of work and help on logic flow.