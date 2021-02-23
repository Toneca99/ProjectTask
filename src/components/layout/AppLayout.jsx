import React from 'react';
import Header from 'components/partials/Header';
import SubHeader from 'components/partials/SubHeader';
import LeftSidebarNav from 'components/partials/LeftSidebarNav';
import PreviewScreen from 'components/partials/PreviewScreen';
import FormPreview from 'components/partials/FormPreview';
import { PreviewScreenProvider } from 'components/shared/PreviewScreenContext';
import style from './styles/AppLayout.module.scss';

const Applayout = () => (
    <div className={style.container}>
        <PreviewScreenProvider >
            <Header />
            <SubHeader />
            <div className={style.content}>
                <LeftSidebarNav />
                <FormPreview />
                <PreviewScreen />
            </div>
        </PreviewScreenProvider>
    </div>
);

export default Applayout;