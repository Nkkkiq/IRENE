export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-items-center
      font-[family-name:var(--font-geist-sans)] bg-black p-0 w-screen 
      h-[calc(100vh-6rem)]  bg-cover bg-center bg-[url(https://picsum.photos/id/444/600/400?grayscale)] sm:bg-[url('https://picsum.photos/id/444/800/600?grayscale')] 
            lg:bg-[url('https://picsum.photos/id/444/1200/800?grayscale')]"
    >
      <div className="flex flex-col text-white items-center sm:items-start sm:pl-[20vw] mt-[17vh] gap-y-4 w-full h-full">
        <span className="text-5xl">Niki Qin</span>
        <span className="text-xl tracking-[0.5rem]">PHOTOGRAPHY</span>
      </div>
    </div>
  );
}
