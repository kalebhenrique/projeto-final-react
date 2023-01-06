import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api"
import Cookie from "js-cookie";

const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    const login = async (email, password) => {
        try{
            const response = await api.get('/user/login', {params: {email, password}})
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common['X-User-Email'] = response.data.email
                api.defaults.headers.common['X-User-Token'] = response.data.authentication_token
                Cookie.set('canetaAzul.user', JSON.stringify(response.data), {expires: 1})
                alert("Usuário logado!")
            }
        } catch(e){
            alert(e)
        }
    }

    useEffect(() => {
        const retrievedUser = Cookie.get('canetaAzul.user');
        if(retrievedUser) {
            let parsedUser = JSON.parse(retrievedUser)
            setUser(parsedUser)
            api.defaults.headers.common["X-User-Token"] = parsedUser.authentication_token
            api.defaults.headers.common["X-User-Email"] = parsedUser.email
        }
    }, [])

    const logout = async () => {
        if(window.confirm("Tem certeza que deseja sair de sua conta ?")){
            setUser({});
            Cookie.remove('canetaAzul.user')
        }
    }

    return (
        <UserContext.Provider value={{login, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext)
    return context
}

export {useUserContext, UserProvider}