import React, { FunctionComponent, useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import useStyles from './style';

export type IMDrawerNavigationClassType = {
  drawer?: string;
  drawerOpen?: string;
  drawerClose?: string;
  drawerPaper?: string;
  drawerOpenPaper?: string;
  drawerClosePaper?: string;
  list?: string;
  listItem?: string;
  listItemExpand?: string;
  listItemSelectedBackground?: string;
  listItemIcon?: string;
  selectedListItemIcon?: string;
  listItemText?: string;
  selectedListItemText?: string;
};

export interface IRouteData {
  name: string;
  icon: React.ReactElement;
  routeNameText: string;
}

export interface IIMDrawerNavigationProps {
  routeData: IRouteData[];
  classes?: IMDrawerNavigationClassType;
}

const IMDrawerNavigation: FunctionComponent<IIMDrawerNavigationProps> = (props) => {
  const classes = useStyles();
  const location = useLocation();

  const [selectedRoute, setSelectedRoute] = useState('');
  const [expandDrawer, setDrawerExpand] = useState<boolean>(false);

  const toggleDrawerOpen = () => setDrawerExpand((value) => !value);

  useEffect(() => {
    const route = location.pathname.split('/')[1];
    setSelectedRoute(route);
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, 
        expandDrawer && classes.drawerOpen,
        !expandDrawer && classes.drawerClose,
        props.classes?.drawer,
        expandDrawer && props.classes?.drawerOpen,
        !expandDrawer && props.classes?.drawerClose,
      )}
      classes={{
        paper: clsx(classes.drawerPaper,
          expandDrawer && classes.drawerOpenPaper,
          !expandDrawer && classes.drawerClosePaper,
          props.classes?.drawerPaper,
          expandDrawer && props.classes?.drawerOpenPaper,
          !expandDrawer && props.classes?.drawerClosePaper,
        ),
      }}
    >
      <List
        className={clsx(classes.list, props.classes?.list)}
        component="nav"
        onMouseEnter={toggleDrawerOpen}
        onMouseLeave={toggleDrawerOpen}
      >
        {props.routeData.map((route, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={`/${route.name}`}
            className={clsx(classes.listItem,
              expandDrawer && classes.listItemExpand,
              selectedRoute === route.name && classes.listItemSelectedBackground,
              props.classes?.listItem,
              expandDrawer && props.classes?.listItemExpand,
              selectedRoute === route.name && props.classes?.listItemSelectedBackground,
            )}
          >
            <ListItemIcon
              className={clsx(
                classes.listItemIcon,
                props.classes?.listItemIcon,
                selectedRoute === route.name && classes.selectedListItemIcon,
                selectedRoute === route.name && props.classes?.selectedListItemIcon,
              )}
            >
              {route.icon}
            </ListItemIcon>
            {expandDrawer && (
              <ListItemText
                primary={route.routeNameText}
                primaryTypographyProps={{
                  className: clsx(
                    classes.listItemText,
                    selectedRoute === route.name && classes.selectedListItemText,
                    props.classes?.listItemText,
                    selectedRoute === route.name && props.classes?.selectedListItemText,
                  ),
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default IMDrawerNavigation;
