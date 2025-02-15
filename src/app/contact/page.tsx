"use client";

export default function Contact() {
  const email = "ed22c15d14667f27c57fa89d9c160a2c";
  return (
    <div className="flex flex-col items-center justify-items-center">
      <div className="flex w-full px-20">
        <div className="flex flex-col flex-1 gap-y-10 p-10 text-white">
          <span className="text-5xl text-white">Contact</span>
        </div>

        <section className="flex-1 p-10">
          <div className="max-w-screen-sm">
            <form
              action={`https://formsubmit.co/${email}`}
              method="POST"
              className="text-white space-y-8 group"
              novalidate
            >
              <div className="flex gap-x-5">
                <input type="hidden" name="_template" value="table" />
                <div className="flex flex-col flex-1">
                  <label
                    for="firstName"
                    className="block mb-2 text-sm font-medium"
                  >
                    <span>First Name *</span>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="text-sm  block w-full p-2.5 bg-transparent no-underline border-b border-white outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      required
                      placeholder=""
                      pattern="[A-Za-z\s]+"
                    />
                    <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                      Enter a first name.
                    </span>
                  </label>
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    for="lastName"
                    className="block mb-2 text-sm font-medium"
                  >
                    <span>Last Name *</span>

                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder=""
                      className="shadow-sm  text-sm  block w-full p-2.5 bg-transparent no-underline  border-b border-white outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      required
                      pattern="[A-Za-z\s]+"
                    />
                    <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                      Enter a last name.
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div className="flex flex-col flex-1">
                  <label for="email" class="mb-2">
                    <span>Email *</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="shadow-sm text-sm  bg-transparent no-underline block w-full p-2.5 border-b border-white outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder=" "
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                      Please enter a valid email address
                    </span>
                  </label>
                </div>
                <div className="flex flex-col flex-1">
                  <label for="subject" className="mb-2">
                    <span>Subject</span>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="shadow-sm text-sm  bg-transparent no-underline block w-full p-2.5 border-b border-white outline-none"
                    />
                  </label>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium  dark:text-gray-400"
                >
                  Leave a message...
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  className="block p-2.5 w-full text-sm  shadow-sm  bg-transparent no-underline appearance-none border-b border-white outline-none resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-10 text-sm font-medium text-center text-white border border-white sm:w-fit hover:bg-primary-800 group-invalid:pointer-events-none group-invalid:opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
