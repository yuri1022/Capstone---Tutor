
export default function AppReducer(state, action ){
    switch(action.type){
        case 'LOGIN':
            return{
                logindata:action.payload.logindata,
                isLogin: action.payload.isLogin,
                isTeacher:action.payload.isTeacher,

            }
        case 'LOGOUT':
            return {
                logindata:'',
                isLogin: false,
                isTeacher: 0,
            }
        default:
            return state;
    }
}