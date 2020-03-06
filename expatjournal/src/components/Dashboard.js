import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import { deleteStory } from '../actions';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';
import styled from 'styled-components';


const StoryBox = styled.div`
  box-sizing: border-box;
  width: 20%;
  border: 1px solid red;
  background: #D8C3A5;
  
  justify-content: center;
  margin: auto;
  
`;

const ExpatHeader = styled.header`
  text-align: center;
  padding: 10px 0;
  font-size: 1.5em;
  border: solid;
  background-color: #E85A4F;
  color: #EAE7DC;
  display: inline-block;
  `;

const StoryLinks = styled.div`
  font-size: .8em;
  border: 1px solid green;

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

 const UploadLinks = styled.div`
  background-color: #E85A4F;
  box-sizing: border-box;
  height: 200px;
  width: 300px;
  border: 1px solid red;
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
        <StoryBox>
        <div className='all-stories'>
            {props.stories.map(story => {
                // console.log(story);
                return (
                <div>
                    <StoryLinks>
                    <div id={story.id} className='story'>
                        
                            <Link to={ `/api/stories/${story.id}`}>
                                {''}
                                <img src={story.image_URL} /> 
                                <h1>{story.name}</h1>
                            </Link>
                        
                      <div className='function-btns'>
                          <button className='edit-btn' type='submit'>Edit Story</button>
                          <button className='delete-btn' type='submit'onClick={deleteStory}>Delete Story</button>
                      </div>
                       
                    </div>
                    </StoryLinks>
                </div>
                );
            })}
        </div></StoryBox>
        
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
    { fetchStories, deleteStory }
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