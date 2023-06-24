import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: ShoppingCartOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-catalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'sidenav.main.catalog.goods',

          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-cathegories',
          path: `${APP_PREFIX_PATH}/main/catalog/cathegories`,
          title: 'sidenav.main.catalog.categories',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'sidenav.main.clients.list',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clients',
          path: `${APP_PREFIX_PATH}/main/clients/groups`,
          title: 'sidenav.main.clients.groups',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'sidenav.main.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offlineSpots',
      path: `${APP_PREFIX_PATH}/main/offlinespots`,
      title: 'sidenav.main.offlinespots',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offlineSpots-adress',
          path: `${APP_PREFIX_PATH}/main/offlinespots/`,
          title: 'sidenav.main.offlinespots.adress',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offlineSpots-geo',
          path: `${APP_PREFIX_PATH}/main/offlinespots/`,
          title: 'sidenav.main.offlinespots.geo',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailing',
      path: `${APP_PREFIX_PATH}/main/mailing`,
      title: 'sidenav.main.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: MailOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileapp',
      path: `${APP_PREFIX_PATH}/system/mobileapp`,
      title: 'sidenav.system.mobileapp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'sidenav.system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;
