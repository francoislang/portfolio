import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "",
            component: () => import("@/components/mainPage.vue")
        },
        {
            path: "/mainPage",
            name: "MainPage",
            component: () => import("@/components/mainPage.vue")
        },
        {
            path: "/workPage",
            name: "WorkPage",
            component: () => import("@/components/workPage.vue")
        },
        {
            path: "/resumePage",
            name: "ResumePage",
            component: () => import("@/components/resumePage.vue")
        },
        {
            path: "/contactPage",
            name: "ContactPage",
            component: () => import("@/components/contactPage.vue")
        },

    ],
});

export default router;
