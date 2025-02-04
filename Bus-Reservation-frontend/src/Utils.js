
import { config } from './config'

// path = user/login
// url = http://localhost:4000/
// http://localhost:4000/user/login


export function createUrl(path) {
    return `${config.serverUrl}/${path}`
}