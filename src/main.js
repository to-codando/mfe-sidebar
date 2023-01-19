import { render, createApp } from 'terezzu'

import { sidebar } from './components/appSidebar'

const appSidebar = createApp({
  appName: 'sidebar',
  mount: () => {
    render(sidebar)
  }
})
// prettier-ignore
export { appSidebar }
