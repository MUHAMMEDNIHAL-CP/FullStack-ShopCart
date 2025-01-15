import api from "../../api"
import "./RegisterPage.css"
import { useState } from "react"
import Error from "../ui/Error"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const userInfo = { username, email, password }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    api.post("register/", userInfo)
      .then(response => {
        console.log(response.data)
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setLoading(false)
        setError("")
        navigate("/login")
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
        setLoading(false)
      })
  }

  return (
    <div className='register-container' style={{ margin: '15px' }}>
      <div className='register-card shadow'>
        {error && <Error error={error} />}
        <h2 className='register-title'>Create an Account</h2>
        <p className='register-subtitle'>Please fill in the details to create your account</p>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="username" className='form-label'>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' id='username' placeholder='Enter your username' required />
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' id='email' placeholder='Enter your email' required />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' id='password' placeholder='Enter your password' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='form-control' id='confirmPassword' placeholder='Confirm your password' required />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>Register</button>
        </form>

        <div className='register-footer'>
          <p>Already have an account? <a href='/login'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
