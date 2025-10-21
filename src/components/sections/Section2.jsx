export default function Section2() {
  return (
    <section id="about" className="min-h-[70vh]">
      {/* text about */}
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-center text-xl font-semibold">About me</p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-15 border-b-2 border-white" />
          <div className="h-3 w-3 rotate-45 bg-white" />
          <div className="h-1 w-15 border-b-2 border-white" />
        </div>
      </div>

      {/* biografi singkat */}
      <div className="flex justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center text-center">
          <p className="text-xl font-semibold text-[#00b4d8]">I'm a Developer</p>
          <p className="mb-3 text-2xl font-bold capitalize">i can build amazing web applications.</p>
          <p className="italic">
            Hello semuanya, Aku Faisal, seorang developer yang berdedikasi untuk menciptakan solusi digital yang inovatif.
            memiliki pengalaman pada bidang web development membuat saya memiliki skill untuk mengembangkan aplikasi web
            yang responsif dan user-friendly. dan siap berkolaborasi dengan siapa saja
          </p>
        </div>
      </div>
    </section>
  )
}
