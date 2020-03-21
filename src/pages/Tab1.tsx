import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardTitle,IonCard,IonItem, IonCardSubtitle, IonButton, IonLabel,IonIcon,IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import './Tab1.css';

const Tab1: React.FC = () => {
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
            <IonCardSubtitle>480g</IonCardSubtitle>
            <IonCardTitle>ORIGINAL TOCINO</IonCardTitle>
          </IonCardHeader>

          
          <IonCardContent>
            <img src="./assets/icon/tocino.png" width="50%" alt="Logo"/> <br></br>
            The original sweet-salty pork dish that has been a staple Filipino breakfast item for many years. Try it for lunch and dinner as well – with eggs and sinangag, kamatis or sukang sasa or even as sandwich filling. So delicious, you’ll keep coming back for more!
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

export default Tab1;
