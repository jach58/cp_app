import {Routes} from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routesConfig: Routes = [
    {
        path: 'informacion',
        component: HelloComponent
    },
    {
      path: 'home',
      component: HelloComponent
    },
    {
      path: 'formulario',
      component: FormularioComponent
    },
    {
      path: 'usuario',
      component: UsuarioComponent
    },
    {
        path: '',
        redirectTo:'/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];