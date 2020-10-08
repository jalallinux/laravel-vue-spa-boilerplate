export default function auth({next, store}) {
    return store.dispatch('auth/getUser')
        .then(() => {
            let isLoggedIn = store.getters['auth/isLoggedIn'];
            if (isLoggedIn !== undefined && ! isLoggedIn) {
                store.dispatch('auth/logout');
                return next({ name: 'auth', params: { url: 'login' } });
            }
            return next();
        })
}
