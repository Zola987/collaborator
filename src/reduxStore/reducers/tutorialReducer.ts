import actionTypes from '@reduxStore/actions/actionTypes';
import { IStateTutorial, ITutorial } from '@components/TutorialItem/types';

const initialState = {
    tutorials: [
        {
            id: 0,
            title: 'tutorial',
            author: 'hello',
        },
    ],
};

const tutorialsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_TUTORIAL: {
            const newState = addNewTutorial(state, action.payload);
            return {
                ...state,
                tutorials: [...newState.tutorials],
            };
        }

        case actionTypes.REMOVE_TUTORIAL: {
            const newState = removeTutorial(state, action.payload);
            return {
                ...newState,
                tutorials: [...newState.tutorials],
            };
        }

        default:
            return state;
    }
};

export default tutorialsReducer;

function addNewTutorial(state: IStateTutorial, tutorial: ITutorial) {
    const newState = { ...state };
    const newTutorial = { ...tutorial, id: generateRandomNumber() };
    newState.tutorials.push(newTutorial);
    return newState;
}

function removeTutorial(state: IStateTutorial, id: number) {
    return {
        ...state,
        tutorials: state.tutorials.filter((val) => val.id !== id),
    };
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000 + Math.random() * 500);
}
