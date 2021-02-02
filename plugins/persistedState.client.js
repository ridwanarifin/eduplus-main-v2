import SecureLS from 'secure-ls'
import createPersistedState from 'vuex-persistedstate'
const ls = new SecureLS({ isCompression: false })

export default ({ store }) => {
  if (process.client) {
    window.localStorage.clear()
  }

  createPersistedState({
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })(store)
}
