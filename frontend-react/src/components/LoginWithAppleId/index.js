import React from "react";
import AppleSignin from 'react-apple-signin-auth';
import api from "../../api";

export default class LoginWithAppleId extends React.Component {

    handleSocialLogin = async (data) => {
        console.log(data);
        await api.convertTokenApple({token: data.authorization.id_token})
        // await api.convertTokenApple({token: data.authorization.code})
    };
    //
    // handleSocialLoginFailure = (err) => {
    //     console.error(err);
    // };

    render() {
        return (
            <div>
                <AppleSignin
                    /** Auth options passed to AppleID.auth.init() */
                    authOptions={{
                      clientId: 'com.garpix.ExampleCMSService',
                      scope: 'email name',
                      redirectURI: 'https://example.cms.garpix.com',
                      state: '',
                      nonce: 'nonce',
                      usePopup: true,
                    }}
                    /** General props */
                    uiType="dark"
                    /** className */
                    className="apple-auth-btn"
                    /** Allows to change the button's children, eg: for changing the button text */
                    buttonExtraChildren="Continue with Apple ID"
                    /** Checkout README.md for further customization props. */
                    /** Spread rest props if needed */
                    /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
                    onSuccess={this.handleSocialLogin} // default = undefined
                    /** Called upon signin error */
                    onError={(error) => console.error(error)} // default = undefined
                  />
            </div>
        )
    }
}