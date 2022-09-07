import PageDefault from '../page/PageDefault';
import HomeStay from '../page/HomeStay';
import PageLogin from '../page/PageLogin';
import PageRegistration from '../page/PageRegistration';
import PageAddRoom from '../page/AddRoom';
import { HomeStayLayout, LoginRegistrationLayout } from '../Components/Layout';

const publicRoutes = [
    {
        path: '/vi',
        component: PageDefault,
    },
    {
        path: '/vi/homestay',
        component: HomeStay,
        layout: HomeStayLayout,
    },
    {
        path: 'vi/login',
        component: PageLogin,
        layout: LoginRegistrationLayout,
    },
    {
        path: 'vi/registration',
        component: PageRegistration,
        layout: LoginRegistrationLayout,
    },
    {
        path: 'vi/homestay/add',
        component: PageAddRoom,
        layout: LoginRegistrationLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
