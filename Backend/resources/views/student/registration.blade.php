<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/app.css" rel="stylesheet" />
        <title>Sign up</title>
    </head>
    <body>

        <main
            class="custom_container | h-screen | flex flex-col justify-center items-center | overflow-hidden"
        >
            <section class="grid grid-cols-12 | gap-10 | h-min">
                <figure class="col-span-5">
                    <img
                        class="h-full w-full object-contain"
                        src="storage/ui-photos/signup.png"
                        alt="figure image"
                    />
                </figure>
                <section
                    class="col-span-7 | flex flex-col justify-center items-center | space-y-10"
                >
                    <header class="flex flex-col | w-full">
                        <figure class="h-[90px]">
                            <img
                                class="h-full object-contain"
                                src="storage/ui-photos/logo.png"
                                alt="logo"
                            />
                        </figure>
                        <div class="flex flex-col">
                            <h1 class="header-1">Create account</h1>
                            <span class="text-base"
                                >Be a member of your family</span
                            >
                        </div>
                    </header>
                    @if(Session::has('regSuccess'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                          <span class="font-medium">{{Session::get('regSuccess')}}</span>
                        </div>
                      </div>
                    @endif
                    <form
                        class="w-full"
                        action="{{url('registrationData')}}"
                        method="post"
                        enctype="multipart/form-data"
                    >
                    @csrf
                        <div class="grid grid-cols-12 | gap-5">
                            <span class="col-span-6 input_wrapper">
                                <label for="name">Name</label>
                                <input
                                    class="form-input input_base"
                                    name="name"
                                    type="text"
                                    value="{{old("name")}}"
                                />
                                @error('name')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>
                            <span class="col-span-6 input_wrapper">
                                <label for="dob"
                                    >Date of birth (MM/DD/YY)</label
                                >
                                <input
                                    class="form-input input_base"
                                    name="dob"
                                    type="date"
                                    value="{{old("dob")}}"
                                />
                                @error('dob')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>

                            <span class="col-span-6 input_wrapper">
                                <label for="school_collage_name"
                                    >School or Collage name</label
                                >
                                <input
                                    class="form-input input_base"
                                    name="school"
                                    type="text"
                                    value="{{old("school")}}"
                                />
                                @error('school')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>

                            <span class="col-span-6 input_wrapper">
                                <label for="school_collage_name">Class</label>
                                <select name="class" id="class" value="{{old("class")}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select>
                                @error('class')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>

                            <span class="col-span-6 input_wrapper">
                                <label for="email">Email Phone number</label>
                                <input
                                    class="form-input input_base"
                                    name="email"
                                    type="text"
                                    value="{{old("email")}}"
                                />
                                @error('email')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>

                            <span class="col-span-6 input_wrapper">
                                <label for="phone_number">Phone number</label>
                                <input
                                    class="form-input input_base"
                                    name="phone_number"
                                    type="text"
                                    value="{{old("phone_number")}}"
                                />
                                @error('phone_number')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>

                            <span class="col-span-6 input_wrapper">
                                <label for="password">Password</label>
                                <input
                                    class="form-input input_base"
                                    name="password"
                                    type="password"
                                />
                                @error('password')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror
                            </span>


                            <span class="col-span-6 input_wrapper">
                                <label for="upload_photo">Upload photo</label>
                                <input
                                    class="form-input input_base"
                                    name="photo"
                                    type="file"
                                    accept="image/*"
                                    value="{{old("photo")}}"
                                />
                            </span>

                            {{-- <span
                                class="col-span-6 flex space-x-2 justify-center items-center"
                            >
                                <input
                                    class="form-input input_base"
                                    name="checkbox"
                                    type="checkbox"
                                />
                                <label for="email"
                                    >I agree to all the
                                    <a href="" class="link">Terms </a>and
                                    <a href="" class="link"> Privacy policy</a>
                                </label>
                            </span> --}}
                        </div>

                        <div class="grid grid-cols-12 | gap-5 | my-10">
                            <button
                                class="col-span-6 | cta_btn_base bg-blue__"
                                type="submit"
                            >
                                Create account
                            </button>

                            <button
                                class="col-span-6 | cta_btn_base | flex justify-center items-center | space-x-2 bg-gray__"
                                type="submit"
                            >
                                <img
                                    class="h-5 w-5"
                                    src="storage/ui-photos/google_logo.png"
                                    alt=""
                                />
                                <span> Sign-in with google</span>
                            </button>
                        </div>
                        <span class="text-center w-full"
                            >Already have an account?
                            <a class="text-blue-700" href="{{'login'}}">Sign in</a></span
                        >
                    </form>
                </section>
            </section>
        </main>
    </body>



</html>
