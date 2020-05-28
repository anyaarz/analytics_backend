import React from 'react';

// @ts-ignore
import Link from "react-router-dom/Link";
import {withRouter, RouteComponentProps} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import {WithStyles} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from '@material-ui/icons/HomeOutlined';

import {appRouter} from "../../service/router-service";

import styles from './Menu.styles';

interface MenuProps extends WithStyles<typeof styles>, RouteComponentProps {
    isOpen: boolean
}

class Menu extends React.PureComponent<MenuProps>{
    render() {
        const {classes, isOpen} = this.props;
        const {pathname} = this.props.location;

        return(
            <Drawer
                variant="persistent"
                anchor="left"
                open={isOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >

                <List className={classes.menuList}>
                    <Link to={appRouter.getCoursesRoute()} className={classes.link}>
                        <MenuItem
                            selected={pathname === appRouter.getCoursesRoute()}
                            classes={{
                                selected: classes.selectedMenuItem,
                                root: classes.menuItem,
                            }}
                        >
                            <HomeIcon className={classes.icon} />
                            &nbsp;Онлайн курсы
                        </MenuItem>
                    </Link>
                </List>

            </Drawer>
        );
    }
}

export default withStyles(styles)(withRouter(Menu));