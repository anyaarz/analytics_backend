import get from 'lodash/get';

import {rootState} from '../../store/reducers';

import {GENERAL_PATH} from "./reducer";

import {fields} from './enum';

import {trainingModulesState, TrainingModuleType} from './types';

const getStateData = (state: rootState): trainingModulesState => get(state, GENERAL_PATH);
export const getTrainingModulesList = (state: rootState): Array<TrainingModuleType> => get(getStateData(state), fields.TRAINING_MODULES_LIST, []);

export const getAllCount = (state: rootState) => get(getStateData(state), fields.ALL_COUNT, 1);
export const getCurrentPage = (state: rootState) => get(getStateData(state), fields.CURRENT_PAGE, 1);
export const getSearchQuery = (state: rootState) => get(getStateData(state), fields.SEARCH_QUERY, '');

export const getSorting = (state: rootState) => get(getStateData(state), fields.SORTING, {});
export const getSortingField = (state: rootState) => get(getSorting(state), fields.SORTING_FIELD, '');
export const getSortingMode = (state: rootState) => get(getSorting(state), fields.SORTING_MODE, '');

export const getDialogData = (state: rootState) => get(getStateData(state), [fields.TRAINING_MODULE_DIALOG, fields.TRAINING_MODULE_DIALOG_DATA], {});
export const isOpenDialog = (state: rootState) => get(getStateData(state), [fields.TRAINING_MODULE_DIALOG, fields.IS_OPEN_TRAINING_MODULE_DIALOG], false);
