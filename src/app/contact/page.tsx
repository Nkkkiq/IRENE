"use client";

export default function Contact() {
  const email = "ed22c15d14667f27c57fa89d9c160a2c"; // formSubmit random string for email

  return (
    <div className="flex items-center justify-items-center pb-5">
      <div className="flex w-full flex-col sm:flex-row">
        <div className="flex-1 text-white p-5 sm:p-10">
          <span className="text-5xl">Contact</span>
        </div>

        <section className="flex-1 p-5 sm:p-10">
          <div className="max-w-screen-sm">
            <form
              action={`https://formsubmit.co/${email}`}
              method="POST"
              className="text-white space-y-8 group"
            >
              <div className="flex gap-x-5">
                <input type="hidden" name="_template" value="table" />
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium"
                  >
                    <span>First Name *</span>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="text-sm block w-full p-2.5 bg-transparent no-underline border-b border-white outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      required
                      placeholder=" "
                      pattern="[A-Za-z\s]+"
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                      Enter a first name.
                    </span>
                  </label>
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium"
                  >
                    <span>Last Name *</span>

                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder=" "
                      className="shadow-sm  text-sm  block w-full p-2.5 bg-transparent no-underline  border-b border-white outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      required
                      pattern="[A-Za-z\s]+"
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                      Enter a last name.
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex gap-x-5">
                <div className="flex flex-col flex-1">
                  <label htmlFor="email" className="mb-2">
                    <span>Email *</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm text-sm  bg-transparent no-underline block w-full p-2.5 border-b border-white outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                      placeholder=" "
                      required
                      pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
                    />
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                      Please enter a valid email address
                    </span>
                  </label>
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="subject" className="mb-2">
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
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium  dark:text-gray-400"
                >
                  Leave a message...
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  className="block p-2.5 w-full text-sm  shadow-sm  bg-transparent no-underline appearance-none border-b border-white outline-none resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full py-3 px-10 text-sm font-medium text-center text-white border border-white sm:w-fit hover:bg-primary-800 group-invalid:pointer-events-none group-invalid:opacity-50"
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
