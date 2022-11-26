/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";

const Login = () => {
    return (
        <div>
            <body>
                <main className="custom_container | h-screen | flex flex-col justify-center items-center | overflow-hidden">
                    <header className="flex flex-col justify-center items-center">
                        <figure className="h-[90px]">
                            <img
                                className="h-full w-full object-contain"
                                src="storage/ui-photos/logo.png"
                                alt="logo"
                            />
                        </figure>
                        <div className="flex flex-col">
                            <h1 className="text-center header-1">
                                Welcome Back
                            </h1>
                            <span className="text-center text-base">
                                Pleasure to see you again
                            </span>
                        </div>
                    </header>
                    <section className="grid grid-cols-12 | gap-10 | h-min">
                        <figure className="col-span-6">
                            <img
                                className="h-full w-full object-contain"
                                src="storage/ui-photos/signin.png"
                                alt="figure image"
                            />
                        </figure>
                        <section className="col-span-6 | flex flex-col justify-center items-center">
                            <form
                                className="flex flex-col | max-w-lg w-full | ml-auto space-y-5"
                                action="{{url('loginData')}}"
                                method="post"
                            >
                                <span className="input_wrapper">
                                    <label for="email">
                                        Email or phone number
                                    </label>
                                    <input
                                        className="form-input input_base"
                                        name="email"
                                        type="text"
                                    />
                                    {/* @error('email')
                                    <span
                                        className="text-error"
                                        style="color: red"
                                    >
                                        {{ $message }}
                                    </span>
                                    @enderror */}
                                </span>
                                <span className="input_wrapper">
                                    <label for="email">Password</label>
                                    <input
                                        className="form-input input_base"
                                        name="password"
                                        type="password"
                                    />
                                    {/* @error('password')
                                        <span
                                            className="text-error"
                                            style="color: red"
                                        >
                                            {{ $message }}
                                        </span>
                                        @enderror */}
                                </span>
                                <span>
                                    <input
                                        className="form-input input_base"
                                        type="checkbox"
                                        name="remember"
                                    />
                                    <label for="email">Remember me</label>
                                </span>

                                <button
                                    className="cta_btn_base bg-green"
                                    type="submit"
                                >
                                    Log in
                                </button>

                                <button
                                    className="cta_btn_base | flex justify-center items-center | space-x-2 bg-gray__"
                                    type="submit"
                                >
                                    <img
                                        className="h-5 w-5"
                                        src="storage/ui-photos/google_logo.png"
                                        alt=""
                                    />
                                    <span> Sign-in with google</span>
                                </button>

                                <span className="text-center">
                                    Don't have an account?
                                    <a
                                        className="link"
                                        href="{{url('signup')}}"
                                    >
                                        Sign up
                                    </a>
                                </span>
                            </form>
                        </section>
                    </section>
                </main>
            </body>
        </div>
    );
};

export default Login;
