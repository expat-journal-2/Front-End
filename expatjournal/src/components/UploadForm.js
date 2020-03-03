import React from 'react';

import { addStory } from '../actions';
import { connect } from 'react-redux';
import useForm from '../Utils/useForm';

const UploadForm = (props) => {
    const [ formInputs, handleChanges, clearForm ] = useForm();
    const user = localStorage.getItem('username');

    const submitHandler = e => {
        e.preventDefault();
        //get info from BE
        const {sName, sContent} = formInputs;
        //check with backend
        props.addStory({sName, sContent, sImageUrl: placeholderImg, user});
        clearForm();
        props.history.push('/dashboard');
    }

    //do we want form checking ??

    return (
        <section className='upload-container'>
          <div className='upload-top'>
             <div className='upload-amage-container'>
                <img src={uploadImg} alt='upload' /> 
                <p> Upload image</p>
             </div> 

             <form id='upload-form' onSubmit={submitHandler} className='upload-form'>
                 {/* put buttons/radio buttons here for public/private post option */}
                 <div className='input-container title'>
                    <label>Title</label>
                    <input 
                    type='text' 
                    id='title'
                    name='sName'
                    required
                    value={formInputs.sName || ''}
                    onChange={handleChanges}
                    placeholder="Enter a title"
                    />
                 </div> 

                 <div className='input-container country'>
                    <label>City/Town, State, Country</label>
                    <input 
                    type='text' 
                    id='location'
                    name='sCountry'
                    value={formInputs.sCountry || ''}
                    onChange={handleChanges}
                    placeholder="Enter a location"
                    />
                 </div> 
                    {/* // Do we want this or a description on how we felt (mybe a dropdown??) */}
                 <div className='input-container emoji'>
                    <label>Choose an Emoji for this day</label>
                    <input 
                    type='text' 
                    id='emoji'
                    name='emoji'
                    value={formInputs.emoji || ''}
                    onChange={handleChanges}
                    placeholder="Enter an emoji"
                    />
                 </div>
             </form>
            </div> 
            <div className='upload-bottom'>
              <label>Your amazing story goes here</label>
                <textarea 
                type='text' 
                id='content'
                name='sContent'
                required
                value={formInputs.sContent || ''}
                onChange={handleChanges}
                placeholder="Enter your story"
                />
            </div> 
            <div className='upload-btns'>
              <button className='upload-btn' form='upload-form type='submit>Publish</button>  
            </div>
        </section>
    )    
}

export default connect(null, { addStory })(UploadForm);