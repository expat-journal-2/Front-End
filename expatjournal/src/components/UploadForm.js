import React from 'react';

import { addStory } from '../actions';
import { connect } from 'react-redux';
import useForm from '../Utils/useForm';

const UploadForm = (props) => {
    const [ formInputs, handleChanges, clearForm ] = useForm();
   //  const user = localStorage.getItem('username');

    const submitHandler = e => {
        e.preventDefault();
        //get info from BE
        const {name, content, image_URL, location, author, date} = formInputs;
        //check with backend
        props.addStory({name, content, image_URL, location, author, date});
        clearForm();
      //   props.history.push('/dashboard');
    }

    //do we want form checking ??

    return (
        <section className='upload-container'>
          <div className='upload-top'>
             <div className='upload-amage-container'>
                {/* <img src={uploadImg} alt='upload' />  */}
                <p> Upload image</p>
             </div> 

             <form id='upload-form' onSubmit={submitHandler} className='upload-form'>
                 {/* put buttons/radio buttons here for public/private post option */}
                 <div className='input-container title'>
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
                 </div> 

                 <div className='input-container country'>
                    <label>City/Town, State, Country</label>
                    <input 
                    type='text' 
                    id='location'
                    name='location'
                    value={formInputs.location || ''}
                    onChange={handleChanges}
                    placeholder="Enter a location"
                    />
                 </div> 
                    
                 <div className='input-container date'>
                    <label>Choose an date for this trip</label>
                    <input 
                    type='text' 
                    id='date'
                    name='date'
                    value={formInputs.date || ''}
                    onChange={handleChanges}
                    placeholder="Enter an date"
                    />
                 </div>
             </form>
            </div> 
            <div className='upload-bottom'>
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
            </div> 
            <div className='upload-btns'>
              <button className='upload-btn' form='upload-form' type='submit'>Publish</button>  
            </div>
        </section>
    )    
}

export default connect(null, { addStory })(UploadForm);