import Logo from '../../assets/logo.svg';

const LogoIcon = () => {
    return (
        <div className='flex'>
            <div className='rounded-full w-10 h-10 bg-primary p-3 text-white'>

                <img src={Logo} alt='logo' />
            </div>
            <p className=' font-semibold p-2 text-center text-xl'>Rezilla</p>
        </div>
    )
}

export default LogoIcon;