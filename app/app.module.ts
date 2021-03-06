import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomepageComponent } from './homepage/homepage.component';
import { ActionsComponent } from './actions/actions.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { CharactersComponent } from './characters/characters.component';
import { CharCardsComponent } from './characters/char-cards/char-cards.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { StoryPanelComponent } from './synopsis/story-panel/story-panel.component';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { NgPartnersModule } from 'ng-partners';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ActionsComponent,
    CharactersComponent,
    CharCardsComponent,
    SynopsisComponent,
    StoryPanelComponent,
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    //NgPartnersModule
   
    
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
