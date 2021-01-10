import React, { useState } from "react";
import axios from "axios";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonIcon,
  IonFab,
  IonFabButton,
  IonLoading,
  IonToast,
} from "@ionic/react";
import {
  bagHandleOutline,
  pricetagOutline,
  radioButtonOnOutline,
  walletOutline,
} from "ionicons/icons";
import "./OrderContainer.css";

const OrderContainer: React.FC = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("0");
  const [totalPrice, setTotalPrice] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const formatRupiah = (num: any) => {
    let thousand;
    const reverse = num.toString().split("").reverse().join("");
    thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join(".").split("").reverse().join("");

    return `Rp ${thousand},-`;
  };

  const onSubmitOrder = (params: any) => {
    setShowLoading(true);
    const { name, amount, totalPrice } = params;
    const BASE_URL = `http://localhost:8080/api/orders`;
    const dataPost = {
      customer_name: name,
      amount,
      total_price: totalPrice,
    };
    axios
      .post(BASE_URL, dataPost)
      .then((res) => res.data)
      .then((data) => {
        setShowLoading(false);
        setShowToast(true);
        setName("");
        setAmount("0");
        setTotalPrice(0);
      });
  };

  return (
    <React.Fragment>
      <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonFabButton color="warning">
          <IonIcon icon={radioButtonOnOutline} />
        </IonFabButton>
      </IonFab>
      <div className="shape-top">
        <div className="container top">
          <p>
            <a href="https://en.wikipedia.org/wiki/Red">Wash App</a>
          </p>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Wash App</IonCardSubtitle>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonButton>
                      <IonIcon size="large" icon={walletOutline} />
                    </IonButton>
                    <IonLabel>Wash Pay</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonButton>
                      <IonIcon size="large" icon={bagHandleOutline} />
                    </IonButton>
                    <IonLabel>Wash Shop</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonButton>
                      <IonIcon size="large" icon={pricetagOutline} />
                    </IonButton>
                    <IonLabel>Wash Promo</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardHeader>
          </IonCard>
        </div>
      </div>
      <div className="container form">
        <div className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Customer Name</IonLabel>
            <IonInput
              type="text"
              onIonChange={(e) => setName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Amount (Kg)</IonLabel>
            <IonInput
              type="number"
              onIonChange={(e) => {
                if (e.detail.value === "") {
                  setAmount("0");
                  setTotalPrice(0);
                } else {
                  setAmount(e.detail.value!);
                  let val = parseFloat(e.detail.value!);
                  setTotalPrice(val * 5000);
                }
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Total</IonLabel>
            {formatRupiah(totalPrice)}
          </IonItem>
          <IonButton
            onClick={() => {
              const params = {
                name,
                amount,
                totalPrice,
              }
              onSubmitOrder(params);
            }}
            className="ion-margin-top"
            type="button"
            expand="block"
          >
            Submit
          </IonButton>
        </div>
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
      </div>
    </React.Fragment>
  );
};

export default OrderContainer;
