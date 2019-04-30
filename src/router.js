import Vue from 'vue'
import Router from 'vue-router'


import popularDestinations from '@/components/popularDestinations.vue'
import contact from '@/components/contacts.vue'
import userinfo from '@/components/userInfo.vue'
import shoppingcart from '@/components/shoppingCart.vue'
import checkoffer from '@/components/checkOffer.vue'
import gallery from '@/components/offerPictureGallery.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: popularDestinations,
            meta: { title: 'Populaarsed sihtkohad' }
        },

        {
            path: '/eripakkumised',
            name: 'Eripakkumised',
            component: popularDestinations,
            meta: { title: 'Eripakkumised' }
        },
        {
            path: '/reisid',
            name: 'Reisid',
            component: popularDestinations
        },

        {
            path: '/euroopa',
            name: 'Euroopa',
            component: popularDestinations,
            meta: { title: 'Euroopa' }
        },
        {
            path: '/põhja_ameerika',
            name: 'Põhja-Ameerika',
            component: popularDestinations,
            meta: { title: 'Põhja-Ameerika' }
        },
        {
            path: '/lõuna_ameerika',
            name: 'Lõuna-Ameerika',
            component: popularDestinations,
            meta: { title: 'Lõuna-Ameerika' }
        },
        {
            path: '/aasia',
            name: 'Aasia',
            component: popularDestinations,
            meta: { title: 'Aasia' }
        },
        {
            path: '/austraalia',
            name: 'Austraalia',
            component: popularDestinations,
            meta: { title: 'Austraalia' }
        },
        {
            path: '/kontaktinfo',
            name: 'Kontaktinfo',
            component: contact,
            meta: { title: 'Kontaktinfo' }
        },
        {
            path: '/kasutajainfo',
            name: 'Kasutajainfo',
            component: userinfo,
            meta: { title: 'Kasutajainfo' }
        },

        {
            path: '/ostukorv',
            name: 'Ostukorv',
            component: shoppingcart,
            meta: { title: 'Ostukorv' }
        },
        {
            path: '/pakkumine',
            name: 'Pakkumine',
            component: checkoffer,

        },
        {
            path: '/galerii',
            name: 'Galerii',
            component: gallery,
            meta: { title: 'Pildid reisist' }

        },
    ]
})
