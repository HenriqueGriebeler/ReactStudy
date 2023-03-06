import { ChangeProfile } from "./changeProfile.js"
export const Profile = (props) => {
    return <div>
        <p>eita bixo página do perfil</p>

        <div>
            Nome do perfik é??????? : {props.username} 
        <ChangeProfile setUsername={props.setUsername}/></div>
    </div>
}