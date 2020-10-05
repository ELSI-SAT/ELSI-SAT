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
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

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
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue'),
                meta: {
                  breadcrumb: [
                    {title: 'Home', url: '/'},
                    {title: 'Übersicht', active: true},
                  ],
                  pageTitle: 'Übersicht',
                },
              },
              {
                path: '/datenschutz',
                name: 'Datenschutz',
                component: () => import('./views/Datenschutz.vue'),
                meta: {
                  breadcrumb: [
                    {title: 'Datenschutz', url: '/'},
                    {title: 'Datenschutz', active: true},
                  ],
                  pageTitle: 'Datenschutz',
                },
              },

              {
                path: '/impressum',
                name: 'Impressum',
                component: () => import('./views/Impressum.vue'),
                meta: {
                  breadcrumb: [
                    {title: 'Impressum', url: '/'},
                    {title: 'Impressum', active: true},
                  ],
                  pageTitle: 'Impressum',
                },
              },
              {
                path: '/charts',
                name: 'charts',
                component: () => import('./views/Charts.vue'),
                meta: {
                  breadcrumb: [
                    {title: 'Home', url: '/'},
                    {title: 'Ergebnis', active: true},
                  ],
                  pageTitle: 'Ergebnis',
                  rule: 'editor'
                },
              },
              {
                path: '/knowledge-base',
                name: 'knowledge-base',
                component: () => import('./views/KnowledgeBase.vue'),
                meta: {
                  breadcrumb: [
                    {title: 'Home', url: '/'},
                    {title: 'Glossar', active: true},
                  ],
                  pageTitle: 'Glossar',
                  rule: 'editor'
                },
              },
              {
                path: '/export-import',
                name: 'export-import',
                component: () => import('./views/Export-Import.vue'),
                meta: {
                  breadcrumb: [
                    {title: 'Home', url: '/'},
                    {title: 'Verwaltung', active: true},
                  ],
                  pageTitle: 'Verwaltung',
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
                    {title: 'Home', url: '/'},
                    {title: 'Fragebogen', active: true},
                  ],
                  pageTitle: 'Fragebogen',
                  rule: 'editor',
                  parent: 'email'
                }
              },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
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
              {
                path: '/pages/splash',
                name: 'splash',
                component: () => import('@/views/pages/Splash.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})


router.beforeEach((to, from, next) => {
  if (
    store.getters['email/projectMetaIsSet'] !== true
    // Avoid infinite redirect loop.
    && to.fullPath != '/pages/splash'
  ) {
    next('/pages/splash')
    return
  } else {
    next()
  }
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
