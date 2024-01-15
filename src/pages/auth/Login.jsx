import LoginForm from "../../components/Auth/Login";
import LogoIcon from "../../components/Icons/Logo";

const  Login = () => {
    return (
      <div className="container">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            
            <div className="flex items-center justify-center">
              <LogoIcon />
            </div>
             
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base font-thin leading-5 text-gray-600 max-w">
              Welcome back! 
            </p>
          </div>
              <LoginForm />
          </div>
      </div>
    )
}

export default Login;

