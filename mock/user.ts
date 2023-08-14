function createUserList() {
    return [
        {
            userId: 1,
            avatar: 'https://images.evetech.net/types/33328/render?size=64',
            username: 'admin',
            password: '111111',
            desc: 'Plate',
            roles: ['admin'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token'
        },
        {
            userId: 2,
            avatar: 'https://images.evetech.net/alliances/99003581/logo?size=64',
            username: 'system',
            password: '111111',
            desc: 'SystemManager',
            roles: ['manager'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token'
        }
    ]
}

export default [{
    url: '/api/user/login',
    method: 'post',
    response: ({body}) => {
        const { username, password } = body
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password
        )
        if (!checkUser) {
            return { code: 201, data: { message: '账号密码不正确'}}
        }
        const { token } = checkUser 
        return { code: 200, data: { token }}
    }
},
{
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
        const token = request.headers.token
        const checkUser = createUserList().find(
            (item) => item.token === token
        )
        if (!checkUser) {
            return { code: 201, data: { message: '获取用户信息失败'}}
        }
        return { code: 200, data: {checkUser}}
    }
}]