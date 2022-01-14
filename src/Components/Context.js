import  React , {useContext} from 'react'
import {user} from '../App'

function Context (){
    const users = useContext(user)
    return(
        <div>
            Hello {users} !
        </div>
    )
}
export default Context;