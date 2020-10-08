export default async function checkAuth({ next, store }) {
    if (store.getters['auth/token'] && ! store.getters['auth/isLoggedIn']) {
        axios.get('/api/me')
            .then(({ data }) => {
                store.commit('auth/SET_USER', data);
            }).catch(err => {
                store.state.auth.isLoggedIn = false;
            });
        return next();
    }
    return next();
}
