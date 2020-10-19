/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'

Vue.use(Router)

const router = new Router({
    // Electron works only in hash mode.
    mode: 'hash',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            // =============================================================================
            // FULL PAGE LAYOUTS
            // =============================================================================
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/pages/Home.vue')
                },
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/stammdaten',
                    name: 'stammdaten',
                    component: () => import('./views/Stammdaten.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Stammdaten', active: true },
                        ],
                        pageTitle: 'Stammdaten Ihres Forschungsvorhabens',
                    },
                },
                {
                    path: '/datenschutz',
                    name: 'datenschutz',
                    component: () => import('./views/Datenschutz.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Datenschutz', active: true },
                        ],
                        pageTitle: 'Datenschutz',
                    },
                },
                {
                    path: '/impressum',
                    name: 'impressum',
                    component: () => import('./views/Impressum.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Impressum', active: true },
                        ],
                        pageTitle: 'Impressum',
                    },
                },
                {
                    path: '/legal',
                    name: 'rechtlicher-hinweis',
                    component: () => import('./views/Rechtliches.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Rechtlicher Hinweis', active: true },
                        ],
                        pageTitle: 'Rechtlicher Hinweis',
                    },
                },
                {
                    path: '/gender',
                    name: 'gender',
                    component: () => import('./views/Gender.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Gender-Hinweis', active: true },
                        ],
                        pageTitle: 'Gender-Hinweis',
                    },
                },
                {
                    path: '/charts',
                    name: 'charts',
                    component: () => import('./views/Charts.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Auswertung', active: true },
                        ],
                        pageTitle: 'Auswertung Ihrer Antworten',
                        rule: 'editor'
                    },
                },
                {
                    path: '/knowledge-base',
                    name: 'knowledge-base',
                    component: () => import('./views/KnowledgeBase.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Glossar', active: true },
                        ],
                        pageTitle: 'Glossar',
                        rule: 'editor'
                    },
                },
                {
                    path: '/export',
                    name: 'export',
                    component: () => import('./views/Export.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Export', active: true },
                        ],
                        pageTitle: 'Export des ELSI-SAT-Assessments',
                    },
                },
                {
                    path: '/apps/email',
                    redirect: '/apps/email/all'
                },
                {
                    path: '/apps/email/:filter',
                    name: 'email',
                    component: () => import('./views/apps/email/Email.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Fragebogen', active: true },
                        ],
                        pageTitle: 'ELSI-Fragebogen zu Ihrem Forschungsvorhaben',
                        rule: 'editor',
                        parent: 'email'
                    }
                },
            ],
        },

        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
