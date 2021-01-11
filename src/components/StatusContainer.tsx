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
  IonLoading,
  IonToast,
  IonIcon,
  IonAlert,
} from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import "./StatusContainer.css";

const StatusContainer: React.FC = () => {
  const [dataList, setDataList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [order_id, setOrderId] = useState("");

  const getDataOrder = () => {
    const BASE_URL = `http://localhost:8080/api/orders`;
    axios
      .get(BASE_URL)
      .then((res) => res.data)
      .then((data) => {
        setDataList(data.reverse());
      });
  };

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

  const onDelete = (id: any) => {
    setShowLoading(true);
    const BASE_URL = `http://localhost:8080/api/orders/${id}`;
    axios
      .delete(BASE_URL)
      .then((res) => res.data)
      .then((data) => {
        getDataOrder();
        setShowLoading(false);
        setShowToast(true);
      });
  };

  return (
    <React.Fragment>
      <IonList>
        <IonListHeader lines="none">
          <IonLabel>List Orders</IonLabel>
        </IonListHeader>
        {dataList &&
          dataList.length > 0 &&
          dataList.map(
            ({ id, customer_name, amount, total_price, washed }, key) => (
              <div key={key}>
                <IonCard style={{ padding: "10px" }}>
                  <div className="close-wrapper">
                    <button
                      className="close"
                      onClick={() => {
                        setShowAlert(true);
                        setOrderId(id);
                      }}
                    >
                      <IonIcon
                        className="close-icon"
                        icon={closeCircleOutline}
                      />
                    </button>
                  </div>
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
              </div>
            )
          )}
      </IonList>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"Cancel Order?"}
        message={"Are you sure you want to <strong>cancel</strong>??"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: (blah) => {
              console.log("Confirm Cancel: blah");
            },
          },
          {
            text: "Sure",
            handler: () => {
              onDelete(order_id);
            },
          },
        ]}
      />
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => {
          setShowLoading(false);
          setShowToast(true);
        }}
        message={"Please wait..."}
        duration={5000}
      />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Submitted Successfully"
        position="top"
        buttons={[
          {
            text: "Done",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      />
    </React.Fragment>
  );
};

export default StatusContainer;
