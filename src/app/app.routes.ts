import { Routes } from '@angular/router';
import { LandingPage } from './features/landing-page/landing-page';


// Define the routes for the application
export const routes: Routes = [

    // Route for the landing page
    {
        path: '',
        component: LandingPage
    }

];
