import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import AuthAppHandler from '../../communication/AuthAppHandler';
import theme from '../../../../config/theme';

const LoginApp = React.lazy(() => import('auth_app/App'));

const Login: FunctionComponent = () => {
  const { t } = useTranslation('common');

  return (
    <AuthAppHandler>
      <LoginApp theme={theme} strings={{ welcomeText: t('loginTitle'), platform: 'phoenix_operations_hub' }} />
    </AuthAppHandler>
  );
};

export default Login;
