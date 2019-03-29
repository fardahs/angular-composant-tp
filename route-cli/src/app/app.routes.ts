import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS} from './app.routes.constantes';
import {FormationsComponent} from "./formations/formations.component";
import {ConnaissancesComponent} from "./connaissances/connaissances.component";

export const ROUTES:Routes = [
  {path:PATH_HOME, component:HomeComponent},
  {
    path:PATH_DETAIL + '/:idDetail',
    component:DetailComponent,
    children:[
      {path:"", pathMatch:'full', redirectTo:PATH_DETAIL_FORMATIONS},
      {path:PATH_DETAIL_FORMATIONS + '/:idFormation', component:FormationsComponent},
      {path:PATH_DETAIL_SKILLS + '/:idSkills', component:ConnaissancesComponent}
    ]
  }

];
