//Layout
import { HeaderOnly } from '~/components/Layout';

//Page
import Home from '~/Pages/Home'
import Follwo from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Follwo},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload ,layout: HeaderOnly},
    {path: '/search', component: Search ,layout: null},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }