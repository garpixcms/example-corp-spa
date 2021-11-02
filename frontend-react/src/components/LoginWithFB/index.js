import React from "react";
import SocialButton from "../SocialButton";

export default class LoginWithFB extends React.Component {

    handleSocialLogin = (user) => {
        console.log(user);
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