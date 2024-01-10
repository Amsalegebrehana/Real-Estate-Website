
import RegisterForm from '../../components/Auth/Register'


const Register = () => {
    return (
        <div className='container shadow-xl rounded-md p-10 m-10'>
            <h2 className="mt-6 text-left text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Register
            </h2>
            <RegisterForm />
        </div>
    );
};

export default Register;