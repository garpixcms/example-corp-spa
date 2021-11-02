import React from "react";
import SocialButton from "../SocialButton";
import api from "../../api";

export default class LoginWithFB extends React.Component {

    handleSocialLogin = async (user) => {
        console.log(user);
        await api.convertTokenFacebook({token: user._token.accessToken})
    };

    handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    render() {
        return (
            <div>
                <SocialButton
                    provider="facebook"
                    appId="633797477783383"
                    onLoginSuccess={
                        this.handleSocialLogin
                    }
                    onLoginFailure={
                        this.handleSocialLoginFailure
                    }
                >
                    Login with Facebook
                </SocialButton>
            </div>
        )
    }
}