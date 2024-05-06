
function LoginButton(){

    const login_buttonStyle = {
        position: 'absolute',
        marginLeft: '90vw',
        marginBottom: '90vh',
        marginRight: '10px',
        display: 'none'
    }

    return(
        <div id='login_button_holder' style={login_buttonStyle}>
            <button id = 'loggin_button'>LOG IN</button>
        </div>
    )
}

export default LoginButton