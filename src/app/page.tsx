import Navigation from "@/components/navigation";
export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-black relative p-0 w-screen h-screen bg-[url(https://picsum.photos/id/444/1999/1328?grayscale)] bg-cover bg-linear-to-r from-cyan-500 to-blue-500">
      <Navigation />
      <main className="flex flex-col w-full h-full">
        <div className="flex flex-col text-white pl-[20vw] pt-[20vh] gap-y-4">
          <span className="text-5xl">Niki Qin</span>
          <span className="text-xl tracking-[0.5rem]">PHOTOGRAPHY</span>
        </div>
      </main>
      <footer className="flex text-white text-xs py-5">
        <p>&copy; {year} Niki Qin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
