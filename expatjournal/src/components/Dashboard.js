import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchStories();
    }

    render() {
        return (
            <div className='main'>
                <div className='new-posts'> New posts from Expats</div>
                <div className='all-stories'>
                    {this.props.stories && this.props.stories.map(story => {
                        console.log(story);
                        return (
                            <div>
                                <div id={story.id} className='story'>
                                    <Link to={ `/api/stories/${story.id}`}>
                                        {''}
                                        <img src={story.image_URL} /> 
                                        {/* check naming conventions!! */}
                                        <h1>{story.name}</h1>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <UploadForm component={UploadForm}/>
            </div>
        );
    }
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
    { fetchStories }
)(Dashboard);