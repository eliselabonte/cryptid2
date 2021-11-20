import './authentication.scss';

export default function Authentication () {
    return  (
        <div className='authentication-container'>
            <div className='card'>
                <h4>Log In</h4>
                <form id='login' className='auth-form'>
                    <input id='email-login' placeholder='email'></input>
                    <input id='password-login' placeholder='password'></input>
                </form>
            </div>
            <div className='card signup'>
                <h4>Sign Up</h4>
                <form id='signup' className='auth-form'>
                    <input id='email-signup' placeholder='email'></input>
                    <input id='username-signup' placeholder='username'></input>
                    <input id='password-signup' placeholder='password'></input>
                </form>
            </div>
        </div>
    )
}
