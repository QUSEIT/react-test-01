import { lazy } from 'react'
import { RouteProps } from 'react-router'
const homePage = lazy (() => import('../pages/home-page'))

interface IRouteProps extends RouteProps{
  key?: string;
  auths?: string[];
  routes?: IRouteProps[];
}
const routes: IRouteProps[] = [
  { path: '/home', exact: true, component: homePage },
]

export default routes