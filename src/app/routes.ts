import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { HelpPage } from './pages/HelpPage';
import { SupportusPage } from './pages/SupportusPage';
import { ContactPage } from './pages/ContactPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { PakoRiderPage } from './pages/PakoRiderPage';
import { AboutPage } from './pages/AboutPage';
import { CommunityPage } from './pages/CommunityPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/blog',
    Component: BlogPage,
  },
  {
    path: '/yardim',
    Component: HelpPage,
  },
  {
    path: '/destek-ol',
    Component: SupportusPage,
  },
  {
    path: '/iletisim',
    Component: ContactPage,
  },
  {
    path: '/isletmeler',
    Component: BusinessesPage,
  },
  {
    path: '/pako-rider',
    Component: PakoRiderPage,
  },
  {
    path: '/hakkinda',
    Component: AboutPage,
  },
  {
    path: '/topluluk',
    Component: CommunityPage,
  },
  {
    path: '/cerez-politikasi',
    Component: CookiePolicyPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
