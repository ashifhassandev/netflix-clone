import "./Login.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import useAuth from '../../hooks/useAuth';
import AlertMessage from '../../components/AlertMessages/AlertMessages';

const Login = () => {
  const {
    loginState,
    formState,
    alertMessage,
    setAlertMessage,
    loading,
    toggleLoginState,
    handleChange,
    handleUserAuthentication,
  } = useAuth();

  if (loading) {
    return (
      <div className="loading-spinner">
        <img src={netflix_spinner} alt="" />
      </div>
    );
  };

  return (
    <>
      {alertMessage && (
        <AlertMessage 
          type={alertMessage.type} 
          message={alertMessage.message} 
          onClose={() => setAlertMessage(null)} 
        />
      )}

      <div className='login'>
        <img src={logo} className='login-logo' alt="" />
        <div className="login-form">
          <h1>{loginState}</h1>
          <form>
            {loginState === "Sign Up" && (
              <input 
                type="text" 
                name='name'
                placeholder='Your Name' 
                value={formState.name} 
                onChange={handleChange} 
              />
            )}
            <input
              type="email"
              name='email'
              placeholder='Email'
              value={formState.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name='password'
              placeholder='Password'
              value={formState.password}
              onChange={handleChange}
            />
            <button
              onClick={handleUserAuthentication}
              type='button'
            >
              {loginState}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {loginState === "Sign Up" ? (
              <p>Already have account? <span onClick={toggleLoginState}>Sign In Now</span></p>
            ) : (
              <p>New to Netflix? <span onClick={toggleLoginState}>Sign Up Now</span></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;