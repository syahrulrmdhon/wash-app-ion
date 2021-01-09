import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Order.css";
import OrderContainer from "../components/OrderContainer";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <OrderContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
