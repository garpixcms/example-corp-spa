import React from 'react';
import VKLogin from 'react-vk-login-button';

export default class LoginWithVK extends React.Component {

    callbackVK = ({code, redirectUri}) => {
        console.log(code, redirectUri);
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
