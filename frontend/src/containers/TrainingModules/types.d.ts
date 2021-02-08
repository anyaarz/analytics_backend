import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {WithStyles} from "@material-ui/core";

import {SortingType} from "../../components/SortingButton/types";

import {mapStateToProps, mapDispatchToProps} from "./TrainingModules.connect";
import {TrainingModuleFields, fields} from './enum';

import styles from "./TrainingModules.styles";

export interface TrainingModulesActions {
    getTrainingModulesList: ActionCreatorWithoutPayload;
    setTrainingModulesList: ActionCreatorWithPayload;

    changeSearchQuery: ActionCreatorWithPayload;
    changeCurrentPage: ActionCreatorWithPayload;
    changeAllCount: ActionCreatorWithPayload;
    changeSorting: ActionCreatorWithPayload;

    openDialog: ActionCreatorWithPayload<OpenDialogPayload>;
    closeDialog: ActionCreatorWithoutPayload;

    createTrainingModule: ActionCreatorWithPayload<CreateTrainingModulePayload>;
    changeTrainingModule: ActionCreatorWithPayload<ChangeTrainingModulePayload>;
    deleteTrainingModule: ActionCreatorWithPayload;
}

export type OpenDialogPayload = {
    data: TrainingModuleType|{};
}

export type CreateTrainingModulePayload = {
    data: {
        [TrainingModuleFields.NAME]: string;
        [TrainingModuleFields.DESCRIPTION]: string;
    };
}
export type ChangeTrainingModulePayload = {
    data: TrainingModuleType
}

export interface trainingModulesState {
    [fields.TRAINING_MODULES_LIST]: Array<TrainingModuleType>;
    [fields.SORTING]: {
        [fields.SORTING_FIELD]: string,
        [fields.SORTING_MODE]: SortingType;
    };
    [fields.ALL_COUNT]: number;
    [fields.CURRENT_PAGE]: number;
    [fields.SEARCH_QUERY]: string;
    [fields.TRAINING_MODULE_DIALOG]: {
        [fields.IS_OPEN_TRAINING_MODULE_DIALOG]: boolean;
        [fields.TRAINING_MODULE_DIALOG_DATA]: TrainingModuleType|{};
    };
}

export interface TrainingModulesProps extends WithStyles<typeof styles>, PropsFromRedux, ActionsFromRedux{}

export type PropsFromRedux = ReturnType<mapStateToProps>;
export type ActionsFromRedux = ReturnType<mapDispatchToProps>;

export type TrainingModuleType = {
    [TrainingModuleFields.ID]: number;
    [TrainingModuleFields.NAME]: string;
    [TrainingModuleFields.DESCRIPTION]: string;
}