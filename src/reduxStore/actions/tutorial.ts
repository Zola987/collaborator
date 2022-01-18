import { ITutorial } from '@components/TutorialItem/types';
import actionTypes from './actionTypes';

export const addTutorial = (tutorial: ITutorial) => {
    return {
        type: actionTypes.ADD_TUTORIAL,
        payload: tutorial,
    };
};

export const removeTutorial = (id: number) => {
    return {
        type: actionTypes.REMOVE_TUTORIAL,
        payload: id,
    };
};
