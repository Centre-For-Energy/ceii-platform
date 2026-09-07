/**
 * AppRoutes — maps the central route configuration to <Route> elements.
 * The configuration itself (routes, navigation, metadata) lives in
 * ./config.tsx.
 */

import { Route, Routes } from 'react-router'
import { SiteLayout } from '../layouts/SiteLayout'
import { APP_ROUTES } from './config'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {APP_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}