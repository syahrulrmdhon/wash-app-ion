import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IonList,
  IonListHeader,
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
          setDataList(data.reverse());
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <React.Fragment>
      <IonList>
        <IonListHeader lines="none">
          <IonLabel>List Orders</IonLabel>
        </IonListHeader>
        {dataList &&
          dataList.length > 0 &&
          dataList.map(({ customer_name, amount, total_price, washed }) => (
            <React.Fragment>
              <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol size="5">
                      <strong>Name:</strong>
                    </IonCol>
                    <IonCol>{customer_name}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="5">
                      <strong>Amount:</strong>
                    </IonCol>
                    <IonCol>{amount}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="5">
                      <strong>Total Price:</strong>
                    </IonCol>
                    <IonCol>{total_price}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="5">
                      <strong>Status:</strong>
                    </IonCol>
                    <IonCol>{washed ? "washed" : "On Progress"}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </React.Fragment>
          ))}
      </IonList>
    </React.Fragment>
  );
};

export default StatusContainer;
