import React, { useState } from "react";
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
} from "@ionic/react";
import {
  bagHandleOutline,
  pricetagOutline,
  walletOutline,
} from "ionicons/icons";
import "./OrderContainer.css";

const OrderContainer: React.FC = () => {
  const [amount, setAmount] = useState("0");
  const [totalPrice, setTotalPrice] = useState(0);

  const formatRupiah = (num: any) => {
    let thousand;
    const reverse = num.toString().split("").reverse().join("");
    thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join(".").split("").reverse().join("");

    return `Rp ${thousand},-`;
  };

  return (
    <React.Fragment>
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
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Customer Name</IonLabel>
            <IonInput />
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
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Submit
          </IonButton>
        </form>
      </div>
    </React.Fragment>
  );
};

export default OrderContainer;
