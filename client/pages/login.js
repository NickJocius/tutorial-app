import { useState } from 'react';

export default function Login() {

    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        error: '',
        success: 's'
    })

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value, error: '', success: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

  return (
    <div className="container min-h-full min-w-full flex items-center justify-center mx-auto mt-4 py-16">
			<div className="flex min-w-full px-6 my-0 justify-center ">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg shadow-rose-500/50 hover:translate-y-2 transition-all hover:duration-500 hover:shadow-rose-700/60 hover:shadow-2xl">
					
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-regBG"
					></div>
				
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-3xl text-center font-mono">Login to your Account</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
							<div className="mb-4">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
										Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="name"
                                        name="userName"
										type="text"
                                        placeholder="Your Name"
                                        value={values.userName}
                                        onChange={handleChange}
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
								/>
							</div>
							<div className="mb-4">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
                                        type="password"
                                        name="password"
                                        placeholder="******************"
                                        value={values.password}
                                        onChange={handleChange}
									/>
									<p className="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Login
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Need an account? Register Here!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}
