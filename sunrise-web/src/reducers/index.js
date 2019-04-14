import {DATA_UPDATE, NEW_EVENT} from '../actions'

const initialState = {
    events: [{date: new Date(10000000000), text: "Placeholder"}, {date: new Date(0), text: "Medicine given."}],
    emotions: [{worry: 100, happy: 0, love: 0, sad: 100, hate: 100, date: new Date()},
        {worry: 10, happy: 50, love: 2, sad: 25, hate: 2, date: new Date(0)},
        {worry: 54, happy: 9, love: 43, sad: 3, hate: 1, date: new Date(10000000000)}]
}

function sunriseApp(state = initialState, action) {
    switch(action.type){
        case DATA_UPDATE:
            return {
                ...state,
                events: action.events,
                emotions: action.emotions
            };
        case NEW_EVENT:
            return Object.assign({}, state, {
                events: [
                    ...state.events, 
                    action.event
                ],
            });
        default:
            return state;
    }
}

export default sunriseApp;