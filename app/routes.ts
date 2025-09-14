import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    {
        path: "/",
        index: true,
        file: "routes/home.tsx",
    },
    {
        path: "/auth",
        file: "routes/auth.tsx",
    },
] satisfies RouteConfig;
