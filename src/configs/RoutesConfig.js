import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'main.dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        component: React.lazy(() => import('views/app-views/main/dashboard')),
    },
    {
        key: 'main.clients',
        path: `${APP_PREFIX_PATH}/main/clients/list`,
        component: React.lazy(() => import('views/app-views/main/clients/list')),
    },
    {
        key: 'main.clients.list.editprofile',
        path: `${APP_PREFIX_PATH}/main/clients/list/editprofile`,
        component: React.lazy(() => import('views/app-views/main/clients/list/editprofile')),
    },

    {
        key: 'system.settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        component: React.lazy(() => import('views/app-views/system/settings')),
    },
    {
        key: 'system.mobileapp',
        path: `${APP_PREFIX_PATH}/system/mobileapp`,
        component: React.lazy(() => import('views/app-views/system/mobileapp')),
    },
    {
        key: 'system.logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        component: React.lazy(() => import('views/app-views/system/logs')),
    }
]
