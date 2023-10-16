import React from 'react';
import { useTranslation } from 'react-i18next';

import AnalyticsIcon from '@mui/icons-material/Analytics';

import DrawerNavigation from '../navigation/DrawerNavigation';

const Sidebar: React.FunctionComponent = () => {
  const { t } = useTranslation('common');

  const routeData = [
    {
      name: 'reports',
      icon: <AnalyticsIcon />,
      routeNameText: t('reports'),
    },
  ];

  return (
    <DrawerNavigation
      routeData={routeData}
    />
  );
};

export default Sidebar;
