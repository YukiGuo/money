import Vue from 'vue';
import VueRouter from 'vue-router';
import Label from '@/views/Label.vue';
import Money from '@/views/Money.vue';
import Notfound from '@/views/Notfound.vue';
import LabelEdict from '@/views/LabelEdict.vue';
import Bill from '@/views/Bill.vue';
import BillEdict from '@/components/BillEdict.vue';
import NewLabel from '@/views/NewLabel.vue';
import Statistics from '@/views/Statistics.vue';
Vue.use(VueRouter);

const routes = [
   {
        path: '/',
        redirect: '/money'
    },
    {
        path:'/money',
        component: Money
    },
    {
        path:'/bill',
        component: Bill
    },
    {
        path:'/bill/edict',
        component: BillEdict,
        name: 'newLocation'
    },
    {
        path:'/statistics',
        component: Statistics
    },
    {
        path:'/label',
        component: Label
    },
    {
        path:'/label/new/:type',
        component: NewLabel
    },
    {
        path:'/label/edict/:id',
        component: LabelEdict
    },
    {
        path:'/404',
        component: Notfound
    },
    {
        path:'*',
        component: Notfound
    },


];


const router = new VueRouter({
    routes
});

export default router;
