import { Routes } from "@angular/router";

export default [
    {
        path: "profile",
        children: [
            {
                path: "new",
                loadComponent: () => import('./profile/profile.component')
                .then(m => m.ProfileComponent)
            },
            {
                path: ":id",
                loadComponent: () => import('./profile/profile.component')
                .then(m => m.ProfileComponent)
            }
        ]
    },
    {
        path: "login",
        loadComponent: () => import('./login/login.component')
        .then(m => m.LoginComponent)
    }
] as Routes