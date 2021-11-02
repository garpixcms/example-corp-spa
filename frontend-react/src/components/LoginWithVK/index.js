import React from 'react';
import VKLogin from 'react-vk-login-button';
import api from '../../api';

export default class LoginWithVK extends React.Component {

    callbackVK = async ({code, redirectUri}) => {
        console.log(code, redirectUri);
        await api.convertTokenVk({vkToken: code})
    }

    render() {
        return (
            <VKLogin
                clientId='7989716'
                callback={this.callbackVK}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>
                        Login with VK
                    </button>
                )}
            />
        )
    }

}
