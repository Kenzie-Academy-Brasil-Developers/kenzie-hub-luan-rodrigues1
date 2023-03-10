import { IRespAddTech } from "./tech.interface";

export interface IRegister {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
    confirmPassword?: string;
}
export interface IRegisterResponse {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    created_at: string
    updated_at: string
    avatar_url: string | null
}
export interface IInfoUser {
    token: string;
    user: IIsLogged
}

export interface IIsLogged {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    created_at: string;
    updated_at: string;
    techs: IRespAddTech[];
    works: [];
    avatar_url: string | null;
}

export interface ILogin {
    email: string;
    password: string;
}