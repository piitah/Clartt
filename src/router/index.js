import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard/index'
import appDashboard from "@/components/dashboard/dashboard";
import wallet from '@/components/dashboard/wallet'
import payments from '@/components/dashboard/payment'
import transaction from '@/components/dashboard/transaction'
import customers from '@/components/dashboard/customers'
import merchants from '@/components/dashboard/marchant'
import developers from '@/components/dashboard/developer'
import invoice from '@/components/dashboard/invoice'
import account_login from '@/components/account_login'
import create_account from '@/components/create_account'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/dashboard',
          name: 'appDashboard',
          component: appDashboard
        },
        {
          path: '/wallet',
          name: 'wallet',
          component: wallet
        },
        {
          path: '/payment',
          name: 'payment',
          component: payments
        },
        {
          path: '/transaction',
          name: 'transaction',
          component: transaction,
          meta: {
            title: 'Clartt transaction page',
            metaTags: [
              {
                name: 'description',
                content: 'The home page of our example app.'
              },
              {
                property: 'og:description',
                content: 'The home page of our example app.'
              }
            ]
          }
        },
        {
          path: '/invoice',
          name: 'invoice',
          component: invoice
        },
        {
          path: '/customers',
          name: 'customers',
          component: customers
        },
        {
          path: '/developers',
          name: 'developers',
          component: developers
        },
        {
          path: '/app/merchant',
          name: 'merchant',
          component: merchants
        }
      ]
    },
    {
      path: '/login',
      name: 'account_login',
      component: account_login
    },
    {
      path: '/register',
      name: 'create_account',
      component: create_account
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to) {
      return { x: 0, y: 0 }
    } else {
      return { x: 0, y: 0 }
    }
  }

})
