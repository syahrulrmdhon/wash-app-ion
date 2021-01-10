import React, { useState } from "react";
import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import "./OrderContainer.css";

const OrderContainer: React.FC = () => {
  const [amount, setAmount] = useState("0");
  const [totalPrice, setTotalPrice] = useState(0);

  const formatRupiah = (num: any) => {
    let thousand;
    const reverse = num.toString().split('').reverse().join('');
    thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join('.').split('').reverse().join('');

    return `Rp ${thousand},-`;
  }

  return (
    <div className="container">
      <strong>Form Order Laundry</strong>
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
  );
};

export default OrderContainer;
