export const enum Type {
    USER = 'userStore',
    TAB = 'tabStore',
    COLLAPSE = 'collapseStore',
    MENU = 'menuStore',
}

export interface IUserState {
    token: string;
    userId: string | number;
    permissions: Array<string>;
}

export interface ITab {
    title: string;
    path: string;
}
export interface ITabState {
    count: number;
    collapse: boolean;
    tabList: Array<ITab>;
}

export interface ICollapseState {
    count: number;
    collapse: boolean;
}

export interface IMenuState {
    count: number;
    collapse: boolean;
    menuList: any;
}