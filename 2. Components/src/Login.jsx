import React from 'react'

export const users = [
    {
        username : "furkan",
        password : "123123"
    },
    {
        username : "ali",
        password : "asdasd"
    }
]

function Login() {
    return (
        <div className='login-wrapper'>
            Kullanıcı Adınız : <input type="text" />
            Şifreniz : <input type="text" />
            <button>Giriş</button>
        </div>
    )
}

export default Login