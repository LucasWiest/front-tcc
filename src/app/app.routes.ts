import { Routes } from '@angular/router';
import { WelcomeScreenComponent } from './modules/welcome-screen/welcome-screen.component';
import { LayoutComponent } from './core/layout/layout.component';



export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { 
                path: 'welcome', 
                loadComponent: () => import('./modules/welcome-screen/welcome-screen.component')
                .then(m => m.WelcomeScreenComponent) 
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./modules/dashboard/dashboard.component')
                .then(m => m.DashboardComponent)
            },
            {
                path: 'group',
                children: [
                    {
                        path: 'new',
                        loadComponent: () => import('./modules/group/edit/edit.component')
                            .then(m => m.EditComponent)
                    },
                    {
                        path: ':id',
                        loadComponent: () => import('./modules/group/group.component')
                            .then(m => m.GroupComponent)
                    }
                ]
            },
            {
                path: '',
                children: [
                    { path: '', loadChildren: () => import("../app/core/nav/nav.routes") }
                ]
            }

            // {
            //     path: 'group/new',
            //     loadComponent: 
            // }
        ],
    }
];
