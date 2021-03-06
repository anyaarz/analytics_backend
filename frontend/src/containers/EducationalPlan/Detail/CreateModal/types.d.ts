import {WithStyles} from "@material-ui/core";
import {BlocksOfWorkProgramsType, EducationalPlanActions} from '../../types';
import {WorkProgramListActions} from "../../../WorkProgramList/types";

import styles from "./AddWorkProgramModal/AddWorkProgramModal.styles";
import {SelectorListType} from "../../../../components/SearchSelector/types";

export interface CreateModalProps extends WithStyles<typeof styles> {
    actions: EducationalPlanActions;
    isOpen: boolean;
    educationalPlan: any;
    planId: number;
    workProgramActions: WorkProgramListActions;
    workProgramList: SelectorListType;
    blockOfWorkPrograms: BlocksOfWorkProgramsType;
}