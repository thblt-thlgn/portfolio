import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FunctionComponent = () => {
  const { t } = useTranslation('home');
  return <h1>{t('title')}</h1>;
};

export default HomePage;
