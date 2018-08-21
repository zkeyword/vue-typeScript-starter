declare module "mint-ui" {
    import _Vue from "vue";

    export function Toast(): any;

    export function Header(): any;

    export function install(vue: typeof _Vue): void;
}
