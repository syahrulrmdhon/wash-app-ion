import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
} from "@ionic/react";

import "./StatusContainer.css";

const StatusContainer: React.FC = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const BASE_URL = `http://localhost:8080/api/orders`;
    axios
      .get(BASE_URL)
      .then((res) => res.data)
      .then((data) => {
        if (isMounted) {
          setDataList(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <IonList>
      <IonListHeader lines="none">
        <IonLabel>List Orders</IonLabel>
      </IonListHeader>
      {dataList &&
        dataList.length > 0 &&
        dataList.map(({ customer_name, amount, total_price }) => (
          <React.Fragment>
            <IonCard>
              <IonGrid>
                <IonRow>
                  <IonCol size="5">Name:</IonCol>
                  <IonCol>{customer_name}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="5">Amount:</IonCol>
                  <IonCol>{amount} Kg</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="5">Total Price:</IonCol>
                  <IonCol>{total_price}</IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          </React.Fragment>
        ))}
    </IonList>
  );
};

export default StatusContainer;
