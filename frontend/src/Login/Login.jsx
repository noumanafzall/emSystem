import React from 'react'

function Login() {
  return (
    <div clas>
        <div>
            <h2>Login</h2>
            <h4>Please login to continue!!</h4>

            <div>
                <form>

                    <div className='mb-3'>
                        <label><strong>Email:</strong></label>
                        <input type="email" name='email' placeholder='Enter email address' autoComplete='off' className='rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label><strong>Password:</strong></label>
                        <input type="password" name='password' placeholder='Enter your password' autoComplete='off' className='rounded border border-gray-500 p-1'/>
                    </div>
                    
                    <button>Submit</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Login