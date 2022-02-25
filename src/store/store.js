
import { createStore } from 'vuex'

import autentication from '../services/autentication';


export default createStore({
    modules: {
      auth:autentication
    }
})

