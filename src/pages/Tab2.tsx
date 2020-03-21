import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardTitle,IonCard,IonItem, IonCardSubtitle, IonButton, IonLabel,IonIcon,IonCardContent } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pampangas Best</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>450g</IonCardSubtitle>
            <IonCardTitle>Skinless Longaniza</IonCardTitle>
          </IonCardHeader>

          
          <IonCardContent>
            <img src="./assets/icon/longaniza.jpg" width="50%" alt="Logo"/> <br></br>
            With this untraditional sausage, each bite starts sweet and then ends with a spicy kick  —  definitely not your lola’s longaniza.   A familiar yet distinctive taste in a new format, this longaniza can be eaten fried or grilled, alone or as a viand, in a sandwich or with rice, mixed as an ingredient in a dish or as the dish itself.  It’s as versatile as the modern city slicker!
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>Pampanga's Best, Inc.</IonLabel>
            <IonButton fill="outline" slot="end" href="http://www.pampangasbest.com/">View</IonButton>
          </IonItem>

          <IonCardContent>
          The main office and plant of Pampanga's Best Inc. is located at Barangay dela Paz Norte, City of San Fernando, Pampanga - http://www.pampangasbest.com/
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
