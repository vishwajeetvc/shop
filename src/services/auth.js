import conf from "./config/conf"

export class AuthService{
    url;
    constructor() {
        url = conf.url
    }

    async login({email,password}) {
        return
    }
    async getCurrentUser() {
        return
    }
    async logout() {
        return
    }
    async changePassword({username, password}) {
        return
    }

}

const authService = new AuthService();

export default authService;