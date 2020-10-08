export default function guest({next, store}) {
    let isLoggedIn = store.getters['auth/isLoggedIn'];
    if (isLoggedIn) {
        return next({ name: 'dashboard' });
    }
    return next();
}
