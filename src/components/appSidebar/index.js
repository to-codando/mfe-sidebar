import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'sidebar'
const app = { name, model, view, controller }
const sidebar = createComponent(app)

export { sidebar }
