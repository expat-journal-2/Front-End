import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_ERROR,
  ADD_STORY,
  ADD_STORY_SUCCESS,
  ADD_STORY_ERROR,
  DELETE_STORY_START,
  DELETE_STORY_SUCCESS,
  DELETE_STORY_ERROR
} from '../actions';

const initialState = {
    stories: [],
    error: '',
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STORY_START:
            return {
                ...state,
               isFetching: true,
               error:false
            };
        case FETCH_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                stories: action.payload.reverse()
            };
        case FETCH_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case ADD_STORY:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case ADD_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                stories: action.payload,
            };
        case ADD_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case DELETE_STORY_START:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case DELETE_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false
            };
        case DELETE_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
            
        default:
            return state;    
    }
};

export default reducer;