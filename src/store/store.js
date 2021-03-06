
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import autentication from '../services/autentication';
import loader from '../services/loader';
import regions from '../services/regions';
import users from '../services/user';
import emails from '../services/email';


export default createStore({
    plugins: [createPersistedState()],
    modules: {
      auth:autentication,
      loader:loader,
      regions:regions,
      users:users,
      emails:emails
    }
})

