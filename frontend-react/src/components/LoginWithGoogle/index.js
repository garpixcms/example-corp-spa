import React from "react";
import SocialButton from "../SocialButton";
import api from "../../api";

export default class LoginWithGoogle extends React.Component {

    handleSocialLogin = async (user) => {
        console.log(user);
        await api.convertTokenGoogle({token: user._token.accessToken})
    };

    handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    render() {
        return (
            <div>
                <SocialButton
                    provider="google"
                    appId="315679150239-u16pv68d6gm0l652f6hlem2q5rfvnel4.apps.googleusercontent.com"
                    onLoginSuccess={
                        this.handleSocialLogin
                    }
                    onLoginFailure={
                        this.handleSocialLoginFailure
                    }
                >
                    Login with Google
                </SocialButton>
            </div>
        )
    }
}