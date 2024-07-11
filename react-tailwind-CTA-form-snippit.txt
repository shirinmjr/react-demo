export default function Newsletter() {
  return (
    <div className=" flex-row h-10 w-full">
      <form className=" shadow-lg rounded-lg">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            aria-label="Enter your Email"
            required
            className="block w-full px-4 py-4 my-2 border-4 bg-[#232935]  border-gray-700 rounded-full shadow-sm placeholder:text-white focus:outline-none gap-y-8"
          />
          <button
            type="submit"
            className=" block w-full md:w-auto sm:absolute text-[14px] items-center bg-[#5D5DFF] sm:inset-y-0 right-1  py-4 md:py-2 px-10 my-1 text-white  rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

