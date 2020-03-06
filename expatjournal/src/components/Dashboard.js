import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStories, editStory } from '../actions';
import { deleteStory } from '../actions';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';
import styled from 'styled-components';

const ExpatHeader = styled.header`
  text-align: center;
  padding: 10px 0;
  font-size: 1.5em;
  border: solid;
  background-color: #E85A4F;
  color: #EAE7DC;
  display: inline-block;
  `;

  const UploadLinks = styled.div`
  background-color: #E85A4F;
  box-sizing: border-box;
  height: 200px;
  width: 300px;
  border: 1px solid red;
  `;

const StoryBox = styled.div`
  box-sizing: border-box;
  width: 115px;
  border: 5px solid red;
  background: #D8C3A5;
  disply: flex;
  flex-wrap: wrap;
`;

const StoryLinks = styled.div`
  font-size: .8em;
  

  .edit-btn{
    text-align: center;
    padding 3 px;
    margin: 4 px;
    cursor: pointer;
    border-radius: 9px;
    background: #8E8D8A;
    color: #EAE7DC;
  }

  .delete-btn{
    text-align: center;
    padding 3 px;
    margin: 4 px;
    cursor: pointer;
    border-radius: 9px;
    background: #E85A4F;
    color: #EAE7DC;
  }
  `;

const Dashboard = (props) => {

    useEffect(() => {
        props.fetchStories();
        },[]);


    return (
      <div className='main'>
          <ExpatHeader>
        <div className='new-posts'> New posts from Expats</div>
        </ExpatHeader>
        <div className='all-stories'>
            {props.stories.map(story => {
                // console.log(story);
                return (
                <div>
                    <StoryLinks>
                    <div id={story.id} className='story'>
                        <StoryBox>
                            <Link to={ `/api/stories/${story.id}`}>
                                {''}
                                <img src={story.image_URL} /> 
                                <h1>{story.name}</h1>
                            </Link>
                        </StoryBox>
                      <div className='function-btns'>

                        <StylesEdit type='button'onClick={() => props.editStory(story.id)}>
                          Edit {/* <button className='edit-btn' type='button' onClick={editStory}>Edit Story</button> */}
                        </StylesEdit>
                        <StylesDel type='button'onClick={() => props.deleteStory(story.id)}>
                         Delete
                        </StylesDel>  

                          <button className='edit-btn' type='submit'>Edit Story</button>
                          <button className='delete-btn' type='submit'onClick={deleteStory}>Delete Story</button>

                      </div>
                       
                    </div>
                    </StoryLinks>
                </div>
                );
            })}
        </div>
            <UploadLinks>
                <UploadForm component={UploadForm}/>
            </UploadLinks>
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
    { fetchStories, deleteStory, editStory }
)(Dashboard);

// return (
//     <div className='main'>
//         <ExpatHeader>
//         <div className='new-posts'> New posts from Expats</div>
//         </ExpatHeader>
//         <div className='all-stories'>
        
//         {/* {console.log(this.props.stories)} */}
//         {/* this.props.stories &&  */}
//             {props.stories.map(story => {
//                 console.log(story);
//                 return (
//                     <StoryLinks>
//                     <div>
//                         <div id={story.id} className='story'>
//                             <Link to={ `/api/stories/${story.id}`}>
//                                 {''}
//                                 <img src={story.image_URL} /> 
                                
//                                 <h1>{story.name}</h1>
//                             </Link>
//                         </div>
//                     </div>
//                     </StoryLinks>
//                 );
//             })}
            
//         </div>
//         <UploadLinks>
//         <UploadForm component={UploadForm}/>
//         </UploadLinks>
//     </div>
    
// );