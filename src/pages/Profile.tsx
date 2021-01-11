import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ProfileContainer from '../components/ProfileContainer';
import './Profile.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProfileContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
