import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-col sm:flex-row w-full pb-5">
      <section className="flex-1 text-white p-5 sm:py-10 ">
        <div className="max-w-sm m-auto flex flex-col gap-y-10">
          <span className="block text-5xl ">Biography</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </section>

      <section className="flex-1 p-5 sm:py-10">
        <div className="max-w-sm m-auto relative h-[500px]">
          <Image
            alt="Mountains"
            src="https://picsum.photos/id/454/1200/800"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
