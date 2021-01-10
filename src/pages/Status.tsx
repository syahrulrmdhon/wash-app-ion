import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Status.css';
import StatusContainer from '../components/StatusContainer';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <StatusContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
