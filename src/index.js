
import app from "./app.js";
import {port} from './config.js'

await import('./database.js');
app.listen(port)
console.log('server on port', port)