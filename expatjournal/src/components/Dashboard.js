import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import { deleteStory } from '../actions';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';
import styled from 'styled-components';

const StylesDel = styled.button`
    text-align: center;
    padding 3 px;
    margin: 4 px;
    cursor: pointer;
    border-radius: 9px;
    background: #E85A4F;
    color: #EAE7DC;
`;
const StylesEdit = styled.button`
    text-align: center;
    padding 3 px;
    margin: 4 px;
    cursor: pointer;
    border-radius: 9px;
    background: #8E8D8A;
    color: #EAE7DC;
`;

const Dashboard = (props) => {

    useEffect(() => {
        props.fetchStories();
        },[]);

    return (
      <div className='main'>
        <div className='new-posts'> New posts from Expats</div>
        <div className='all-stories'>
            {props.stories.map(story => {
                // console.log(story);
                return (
                <div>
                    <div id={story.id} className='story'>
                    <Link to={ `/api/stories/${story.id}`}>
                        {''}
                        <img src={story.image_URL} /> 
                        <h1>{story.name}</h1>
                    </Link>
                      <div className='function-btns'>
                        <StylesEdit>
                          <button className='edit-btn' type='submit'>Edit Story</button>
                        </StylesEdit>
                        <StylesDel>
                          <button className='delete-btn' type='submit'>Delete Story</button>
                        </StylesDel>  
                      </div>
                    </div>
                </div>
                );
            })}
        </div>
        <UploadForm component={UploadForm}/>
      </div>
    );
    }

const mapStateToProps = state => {
    return {
        stories: state.stories,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchStories, deleteStory }
)(Dashboard);