import axios from "axios";
import { useState } from "react";

const RegisterPopup = (props) => {

    const { handleRegister, handleLogin } = props;

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSumbit = async (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setMessage('Password is not match')
            return;
        }

        try{
            const res = await axios.post('http://localhost:5000/api/auth/register',{
                username,
                email,
                password
            })
            if(res.status == 201){
                localStorage.setItem('token', res.data.token)
                handleRegister(false)
                handleLogin(false)
            }
        }catch(err){
            console.log(err)
            setMessage(err.response.message || 'Register failed')
        }
    }

    return (
        <div onClick={handleRegister} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0   ">
            <div onClick={(e) => e.stopPropagation()} className="bg-white flex flex-row justify-between items-center h-[695px] w-2/3 rounded-3xl">
                <div className="flex flex-col bg-zinc-300 w-1/2 h-full rounded-l-3xl">
                    <div className="flex items-center h-1/6 px-12">
                        <h1 className="text-[30px] text-black opacity-50">Welcome!</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center h-4/6">
                        <img src="/images/logo-big.png" alt="logo" className="w-[130px]" />
                        <span className="text-[30px] font-semibold">SANNONGVAN</span>
                    </div>
                    <div className="flex items-center h-1/6 px-12">
                        <p className="text-[17px]">
                            <span className="text-black text-opacity-50">
                                Have account already?
                            </span>
                            <span onClick={handleRegister} className="ml-2 font-medium cursor-pointer hover:underline">
                                Login now
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full">
                    <div className="flex flex-col h-4/5 p-10 space-y-4">
                        <h1 className="text-[28px] font-semibold">Register with your e -mail</h1>
                        <div>
                            <form onSubmit={handleSumbit} className="space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="username" className="text-[15px]">USERNAME <span className="text-red-500">*</span></label>
                                    <input type="text"
                                        className="text-[15px] p-2 border-b-2 focus:outline-none"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="username" className="text-[15px]">EMAIL <span className="text-red-500">*</span></label>
                                    <input type="text"
                                        className="text-[15px] p-2 border-b-2 focus:outline-none"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex flex-row justify-between space-x-4">
                                    <div>
                                        <label htmlFor="password" className="text-[15px]">PASSWORD <span className="text-red-500">*</span> </label>
                                        <input type="password"
                                            className="text-[15px] p-2 border-b-2 focus:outline-none"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="text-[15px]">REPEAT PASSWORD <span className="text-red-500">*</span></label>
                                        <input type="password"
                                            className="text-[15px] p-2 border-b-2 focus:outline-none"
                                            placeholder="Repeat password"
                                            value={confirmPassword}
                                            onChange={(e) => setconfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 pt-2">
                                    <p className="text-[15px] text-black text-opacity-50">
                                        Sannongvan may keep me informed with personalized emails
                                        about products and services. See our  <span className="text-black font-medium">Privacy Policy</span>  for more details.
                                    </p>
                                    <label className="flex flex-col items-center space-y-2 pt-2">
                                        <div className="flex items-center w-full">
                                            <input type="checkbox" name="rememberme" className="form-checkbox h-5 w-5 border-gray-300 rounded" />
                                            <span className="ml-2 text-[15px] text-black text-opacity-80">Please contact me via e-mail</span>
                                        </div>
                                        <div className="flex items-center w-full">
                                            <input type="checkbox" name="rememberme" className="form-checkbox h-5 w-5 border-gray-300 rounded" />
                                            <span className="ml-2 text-[15px] text-black text-opacity-80">I have read and accept the Terms and Conditions</span>
                                        </div>
                                    </label>
                                </div>
                                <div className="flex flex-col">
                                    <button className="w-full bg-black text-white font-semibold p-[16px] rounded-[10px] hover:bg-gray-800">
                                        Create Account
                                    </button>
                                </div>
                            </form>
                            {message && (
                                <p className="w-full text-end mt-2">{message}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col h-1/5 px-10 pt-8">
                        <p>Or register with</p>
                        <div className="flex flex-row justify-center items-center space-x-4 pt-2">
                            <div className="py-2">
                                <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-50">
                                    <img src="/images/google-icon.png" alt="Google" className="w-5 h-5" />
                                    <span className="text-[15px]">Google</span>
                                </button>
                            </div>
                            <div className="py-2">
                                <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-50">
                                    <img src="/images/apple-icon.png" alt="Apple" className="w-5 h-5" />
                                    <span className="text-[15px]">Apple ID</span>
                                </button>
                            </div>
                            <div className="py-2">
                                <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-50">
                                    <img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
                                    <span className="text-[15px]">Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPopup;