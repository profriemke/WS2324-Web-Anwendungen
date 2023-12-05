
import { sessionConfig } from '@adonisjs/session/build/config'
import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
export default sessionConfig({
  enabled: true,
  driver: Env.get('SESSION_DRIVER'),
  cookieName: 'adonis-session',
  clearWithBrowser: true,
  age: '60m',
  cookie: {
    path: '/', httpOnly: false, sameSite: false,
  },
  file: { location: Application.tmpPath('sessions'),},
})