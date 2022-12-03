<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <title>Sign in</title>
    </head>
    <body>
        <main
            class="custom_container | h-screen | flex flex-col justify-center items-center | overflow-hidden"
        >
            <header class="flex flex-col justify-center items-center">
                <figure class="h-[90px]">
                    <img
                        class="h-full w-full object-contain"
                        src="storage/ui-photos/logo.png"
                        alt="logo"
                    />
                </figure>
                <div class="flex flex-col">
                    <h1 class="text-center header-1">Welcome Back</h1>
                    <span class="text-center text-base"
                        >Pleasure to see you again</span
                    >
                </div>
            </header>
            <section class="grid grid-cols-12 | gap-10 | h-min">
                <figure class="col-span-6">
                    <img
                        class="h-full w-full object-contain"
                        src="storage/ui-photos/signin.png"
                        alt="figure image"
                    />
                </figure>
                <section
                    class="col-span-6 | flex flex-col justify-center items-center"
                >
                    <form
                        class="flex flex-col | max-w-lg w-full | ml-auto space-y-5"
                        action="{{url('loginData')}}" method="post"
                    >
                    @csrf

                        <span class="input_wrapper">
                            <label for="email">Email or phone number</label>
                            <input
                                class="form-input input_base"
                                name="email"
                                type="text"
                            />
                            @error('email')
                            <span class="text-error" style="color: red">{{$message}}</span>
                            @enderror
                        </span>
                        <span class="input_wrapper">
                            <label for="email">Password</label>
                            <input
                                class="form-input input_base"
                                name="password"
                                type="password"
                            />
                            @error('password')
                            <span class="text-error" style="color: red">{{$message}}</span>
                            @enderror
                        </span>
                       <span>
                            <input
                                class="form-input input_base"
                                type="checkbox"
                                name="remember"
                            />
                            <label for="email">Remember me</label>
                        </span>

                        <button class="cta_btn_base bg-green" type="submit">
                            Log in
                        </button>

                        <button
                            class="cta_btn_base | flex justify-center items-center | space-x-2 bg-gray__"
                            type="submit"
                        >
                            <img
                                class="h-5 w-5"
                                src="storage/ui-photos/google_logo.png"
                                alt=""
                            />
                            <span> Sign-in with google</span>
                        </button>

                        <span class="text-center"
                            >Don't have an account?
                            <a class="link" href="{{url('signup')}}">Sign up</a></span
                        >
                    </form>
                </section>
            </section>
        </main>
    </body>
</html>
