export interface AuthRegisterResponse {

    token: string;
    username: string;
    email: string;
    role: string;
    photoUrl: string;
    created: Date;
    active: boolean;
}