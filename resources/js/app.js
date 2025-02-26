import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
const pages = import.meta.glob('./Pages/**/*.vue');

createInertiaApp({
    resolve: name => {
        const page = pages[`./Pages/${name}.vue`];
        if (!page) {
            throw new Error(`Page ${name} not found`);
        }
        return page();
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
