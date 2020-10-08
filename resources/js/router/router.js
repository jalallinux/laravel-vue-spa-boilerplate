import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
import checkAuth from '@/middleware/check-auth';
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter);

import routes from "./routes";

const router = new VueRouter({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes
});


router.beforeEach((to, from, next) => {
    let parentMiddleware = [];
    to.matched.some(parentMeta => parentMiddleware = parentMeta.meta.middleware);
    if (to.meta.middleware === undefined && ! parentMiddleware === undefined) {
        return next();
    }
    let middleware = [checkAuth];
    if (to.meta.middleware !== undefined && to.meta.middleware.length) {
        middleware = middleware.concat(to.meta.middleware);
    }

    if (parentMiddleware !== undefined && parentMiddleware.length) {
        middleware = middleware.concat(parentMiddleware)
    }

    const context = {
        to, from, next, store
    };
    return middleware[0]({
        ...context, next: middlewarePipeline(context, middleware, 1)
    })
});

export default router;

