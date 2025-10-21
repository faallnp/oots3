export default function Section1() {
  return (
    <section className="mb-52 flex min-h-[70vh] items-center justify-center">
      <div id="home" className="flex flex-col">
        {/* Teks sambutan */}
        <div className="mb-2 text-xl">
          <p>Hii, Welcome to my</p>
        </div>

        {/* Teks utama: PORTOFOLIO */}
        <div className="flex">
          {/* Kata pertama */}
          <p className="cursor-default text-8xl font-bold">PORTO</p>

          {/* Kata kedua dengan efek outline */}
          <p
            className="cursor-none text-8xl font-bold text-transparent transition-all duration-500 hover:text-white/80"
            style={{
              WebkitTextStroke: '2px white',
            }}
          >
            FOLIO
          </p>
        </div>
      </div>
    </section>
  )
}
