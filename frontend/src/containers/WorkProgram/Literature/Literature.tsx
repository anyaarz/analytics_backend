import React from 'react';
import Scrollbars from "react-custom-scrollbars";

import Typography from "@material-ui/core/Typography";
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";

import {FourthStepProps} from './types';
import {fields} from "../enum";
import {literatureFields} from '../../Literature/enum';

import LiteratureAddModal from "./LiteratureModal";

import connect from './Literature.connect';
import styles from './Literature.styles';

class Literature extends React.PureComponent<FourthStepProps> {
    handleCreateNewTopic = () => {
        const {literatureList} = this.props;

        this.props.actions.openDialog({dialogType: fields.ADD_NEW_LITERATURE, data: literatureList});
    };

    handleClickDelete = (id: number) => () => {
        this.props.actions.deleteLiterature(id);
    };

    render() {
        const {classes, literatureList, isCanEdit} = this.props;

        return (
            <div className={classes.root}>
                <Scrollbars>
                    <div className={classes.list}>
                        {literatureList.map((literature) => (
                            <div className={classes.item}>
                                <Typography className={classes.title}>
                                    {literature[literatureFields.DESCRIPTION]}
                                </Typography>

                                {isCanEdit &&
                                    <div className={classes.actions}>
                                        <IconButton onClick={this.handleClickDelete(literature[literatureFields.ID])}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </Scrollbars>

                {isCanEdit &&
                    <Fab color="secondary"
                         className={classes.addIcon}
                         onClick={this.handleCreateNewTopic}
                    >
                        <AddIcon/>
                    </Fab>
                }

                {isCanEdit && <LiteratureAddModal />}
            </div>
        );
    }
}

export default connect(withStyles(styles)(Literature));
