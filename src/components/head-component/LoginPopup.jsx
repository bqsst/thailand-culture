import { useState, useEffect } from "react";
import axios from "axios";
import RegisterPopup from "./RegisterPopup";
import Loader from "../ui/Apploader";

const LoginPopup = ({ handleLogin }) => {

   const [openRegister, setOpenRegister] = useState(false)
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [laoding, setLoading] = useState(true)

   useEffect(() => {
      setLoading(false)
   }, [])

   const handleRegister = () => {
      setOpenRegister(!openRegister)
   }

   const loginSubmit = async (e) => {
      e.preventDefault()

      try {
         const res = await axios.post('http://localhost:5000/api/auth/login', {
            username,
            password
         })
         if (res.status == 200) {
            localStorage.setItem('token', res.data.token)
            handleLogin(false)
         }
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <div onClick={handleLogin} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         {laoding ? (
            <div className="flex justify-center items-center h-full">
               <Loader />
            </div>
         ) : (
            <div onClick={(e) => e.stopPropagation()} className="bg-white flex flex-row justify-between items-center h-[650px] w-2/3 rounded-3xl">
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
                           Not a member yes?
                        </span>
                        <span onClick={handleRegister} className="ml-2 font-medium cursor-pointer hover:underline">
                           Register now
                        </span>
                     </p>
                  </div>
               </div>
               <div className="flex flex-col w-1/2 h-full">
                  <div className="flex flex-col h-4/5 p-10 space-y-8">
                     <h1 className="text-[30px] font-semibold">Log in</h1>
                     <div>
                        <form onSubmit={loginSubmit} className="space-y-10">
                           <div className="flex flex-col space-y-2">
                              <label htmlFor="username">USERNAME</label>
                              <input type="text"
                                 className="p-2 border-b-2 focus:outline-none"
                                 placeholder="Username"
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}
                                 required
                              />
                           </div>
                           <div className="flex flex-col space-y-2">
                              <label htmlFor="password">PASSWORD </label>
                              <input type="password"
                                 className="p-2 border-b-2 focus:outline-none"
                                 placeholder="Password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 required
                              />
                           </div>
                           <div className="flex flex-col space-y-2">
                              <label className="flex items-center space-x-2">
                                 <input type="checkbox" name="rememberme" className="form-checkbox h-5 w-5 border-gray-300 rounded" />
                                 <span className="ml-2 text-black text-opacity-50">Keep me logged in</span>
                              </label>
                           </div>
                           <div className="flex flex-col space-y-4">
                              <button className="w-full bg-black text-white font-semibold p-[16px] rounded-[10px] hover:bg-gray-800">
                                 Log in now
                              </button>
                              <div className="flex flex-col items-end space-y-2">
                                 <button>
                                    <p className="underline">Forgot your password?</p>
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="flex flex-col h-1/5 px-10">
                     <div>
                        <p>Or sign in with</p>
                     </div>
                     <div className="flex flex-row justify-center items-center pt-4 space-x-4">
                        <div className="py-2">
                           <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-50">
                              <img src="/images/google-icon.png" alt="Google" className="w-5 h-5" />
                              <span>Google</span>
                           </button>
                        </div>
                        <div className="py-2">
                           <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-50">
                              <img src="/images/apple-icon.png" alt="Apple" className="w-5 h-5" />
                              <span>Apple ID</span>
                           </button>
                        </div>
                        <div className="py-2">
                           <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-50">
                              <img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
                              <span>Facebook</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
         {openRegister && (
            <RegisterPopup handleLogin={handleLogin} handleRegister={handleRegister} />
         )}
      </div>
   )
}

export default LoginPopup;