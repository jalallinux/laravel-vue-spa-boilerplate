export const namespaced = true;

export const state = {
    user: JSON.parse(localStorage.getItem('user')),
    isLoggedIn: !! localStorage.getItem('token'),
    token: localStorage.getItem('token')
};

export const getters = {
    user(state) {
         return state.user
    },
    isLoggedIn(state) {
         return state.isLoggedIn
    },
    token(state) {
         return state.token
    },
};

export const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
        state.isLoggedIn = true;

        localStorage.setItem('user', JSON.stringify(payload));
    },
    SET_TOKEN(state, payload) {
        state.token = payload;

        localStorage.setItem('token', payload);
    },
    LOGOUT_USER(state) {
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;

        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};

export const actions = {
    login({ state, commit }, payload) {
        return payload.post('/api/login', payload)
            .then(({ data }) => {
                commit('SET_USER', data.data);
                commit('SET_TOKEN', data.data.token);

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
            })
    },
    register({ state, commit }, payload) {
        return payload.post('/api/register', payload)
            .then(({ data }) => {
                commit('SET_USER', data.data);
                commit('SET_TOKEN', data.data.token);

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
            })
    },
    logout({ commit }) {
        commit('LOGOUT_USER')
    },
    async getUser({ commit, state }) {
        return await axios.get('/api/me')
                .then(({ data }) => {
                    commit('SET_USER', data);
                }).catch(err => {
                    state.isLoggedIn = false;
                })
    }
};
