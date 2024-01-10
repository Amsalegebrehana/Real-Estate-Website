
import LogoIcon from "../Icons/Logo";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const  LoginForm = () => {
    return (
      <>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow-xl sm:rounded-lg rounded-xl sm:px-12">
              <form className="space-y-8" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-lg font-thin leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-3">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-2xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-lg font-thin leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-3">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-2xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                      Remember me
                    </label>
                  </div>
  
                  <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-primary hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
  
                <div className="mt-24">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full bg-primary p-3 text-base font-semibold leading-6 text-white shadow-lg hover:bg-colur1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>
  
              <div>
                <div className="relative mt-10">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      <Link to={PathConstants.REGISTER}>
                          Sign Up
                       </Link>
                    </span>
                  </div>
                </div>
  
              
              </div>
            </div>
  
            
          </div>
      
      </>
    )
  }

export default LoginForm;
  