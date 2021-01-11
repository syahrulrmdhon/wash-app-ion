import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import hero from "../assets/hero-wash-app.png";
import about from "../assets/about-wash-app.png";
import washed from "../assets/washed.png";
import "./ProfileContainer.css";

const ProfileContainer: React.FC = () => {
  return (
    <React.Fragment>
      <IonGrid>
        <IonRow>
          <IonCol>
            <p>
              <a href="/">Wash App</a>
            </p>
            <img alt="hero" src={hero} />
            <h1 style={{ textAlign: "center" }}>
              <strong>Jasa Laundry Terbaik Untukmu</strong>
            </h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6">
            <p className="about">
              Cucian kamu akan dijemput dan dikembalikan ke lokasi Kamu. Mau
              cuci jadi gak perlu anter sendiri.
            </p>
          </IonCol>
          <IonCol>
            <div className="image-wrapper">
              <img className="about-img" alt="about" src={about} />
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className="image-wrapper">
              <img className="about-img" alt="washed" src={washed} />
            </div>
          </IonCol>
          <IonCol>
            <p className="about">
              Kepastian harga, layanan, waktu pengerjaan, dan status pencucian
              dapat Kamu pantau lewat Aplikasi D-Laundry. Kapan pun, di mana
              pun.
            </p>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <h1 style={{ textAlign: "center" }}>
              <strong>Kamu sibuk? Pakai Wash App Aja</strong>
            </h1>
            <h1 style={{ color: "#ffdd1b", textAlign: "center" }}>
              #GakPakeRibet
            </h1>
          </IonCol>
        </IonRow>
      </IonGrid>
    </React.Fragment>
  );
};

export default ProfileContainer;
