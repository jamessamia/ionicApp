import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardTitle,IonCard,IonItem, IonCardSubtitle, IonButton, IonLabel,IonIcon,IonCardContent } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
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
            <IonCardSubtitle>225g</IonCardSubtitle>
            <IonCardTitle>Meaty Burger</IonCardTitle>
          </IonCardHeader>

          
          <IonCardContent>
            <img src="./assets/icon/burger.jpg" width="50%" alt="Logo"/> <br></br>
            Now, get mouth-wateringly delicious all-beef goodness from Pampanga’s Best Hamburger Patties.  Just serve with cheese, lettuce, tomatoes, onions and top with ketchup and mustard and you’ll have a sandwich filling that’s way better than those served in those fast-food joints or fancy restaurants.  Have fun eating these at home or at a picnic
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

export default Tab3;
