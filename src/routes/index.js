import PageDefault from '../page/PageDefault';
import HomeStay from '../page/HomeStay';
import { SubLayout } from '../Components/Layout';

const publicRoutes = [
    {
        path: '/vi',
        component: PageDefault,
    },
    {
        path: '/vi/homestay',
        component: HomeStay,
        layout: SubLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
