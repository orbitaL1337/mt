import {
  Clock3,
  Gift,
  HeartHandshake,
  Instagram,
  Layers3,
  Mail,
  Palette,
  Rocket,
} from 'lucide-react'

const whyUs = [
  {
    icon: Layers3,
    title: 'Pełna personalizacja',
    text: 'Tworzymy metryczki szyte na miarę historii Twojego dziecka — od detali typografii po subtelne akcenty kolorystyczne.',
  },
  {
    icon: Palette,
    title: 'Piękny design premium',
    text: 'Każdy projekt jest elegancki, harmonijny i ponadczasowy, aby po latach nadal zachwycał jako wyjątkowa pamiątka.',
  },
  {
    icon: Gift,
    title: 'Idealny prezent dla rodziców',
    text: 'Metryczka staje się osobistym gestem pełnym emocji — doskonałym upominkiem na narodziny, chrzest lub baby shower.',
  },
  {
    icon: Rocket,
    title: 'Szybka realizacja',
    text: 'Proces zamówienia jest prosty i sprawny: od briefu po gotowy projekt otrzymujesz profesjonalne wsparcie na każdym etapie.',
  },
]

const projects = [
  {
    name: 'Skandynawski Minimal',
    style: 'Czysta forma, delikatny kontrast i spokojna typografia inspirowana północnym wzornictwem.',
    baby: { name: 'Lena Kowalska', date: '15.02.2025', time: '07:42', weight: '3340 g', height: '54 cm' },
  },
  {
    name: 'Boho Floral',
    style: 'Naturalne motywy kwiatowe, miękkie linie i ciepłe beże tworzą przytulny, artystyczny klimat.',
    baby: { name: 'Jan Nowak', date: '03.04.2025', time: '14:18', weight: '3650 g', height: '56 cm' },
  },
  {
    name: 'Pastel Princess',
    style: 'Lawendowo-różowa paleta i subtelne zdobienia podkreślają lekkość oraz bajkową elegancję kompozycji.',
    baby: { name: 'Maja Wiśniewska', date: '21.01.2025', time: '22:05', weight: '3120 g', height: '52 cm' },
  },
  {
    name: 'Little Explorer',
    style: 'Inspiracja podróżą i odkrywaniem świata — pastelowe błękity, mapowe detale i nowoczesna prostota.',
    baby: { name: 'Aleksander Zieliński', date: '09.05.2025', time: '11:26', weight: '3480 g', height: '55 cm' },
  },
  {
    name: 'Modern Neutral',
    style: 'Neutralna, premium estetyka w odcieniach piasku i kremu, idealna do współczesnych wnętrz.',
    baby: { name: 'Zofia Dąbrowska', date: '28.02.2025', time: '05:59', weight: '3250 g', height: '53 cm' },
  },
  {
    name: 'Dreamy Clouds',
    style: 'Eteryczne przejścia barw, chmurki i kojąca kompozycja dla rodziców ceniących subtelność.',
    baby: { name: 'Antoni Lewandowski', date: '17.03.2025', time: '19:33', weight: '3520 g', height: '57 cm' },
  },
]

const navLinks = ['Hero', 'Dlaczego my', 'O produkcie', 'Galeria', 'Kontakt']

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-baby text-slate-800">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-tight">Atelier Metryczek</p>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-slate-600 transition hover:text-slate-900">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:gap-24 md:py-20">
        <section className="grid items-center gap-10 rounded-3xl bg-gradient-to-r from-blush via-cream to-lavender p-8 shadow-soft md:grid-cols-2 md:p-12">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Premium pamiątka narodzin
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Zamień najważniejsze chwile w elegancką metryczkę, która zostaje na lata.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Projektujemy wyjątkowe metryczki narodzin z dbałością o proporcje, światło i detale. Każdy projekt opowiada historię Waszej rodziny z klasą.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                Stwórz metryczkę
              </button>
              <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                Zobacz projekty
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-md">
            <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Autorska jakość</p>
            <p className="mt-4 text-2xl font-medium">Projekt przygotowany z myślą o druku premium.</p>
            <p className="mt-3 text-slate-600">
              Otrzymujesz gotowe pliki do druku oraz wersję cyfrową. Każda metryczka przechodzi ręczną kontrolę estetyki i czytelności.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Dlaczego my</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Spokój, estetyka i profesjonalizm w jednym procesie.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon className="mb-4 h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">O produkcie</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Metryczka, która dopełnia wnętrze i chroni wspomnienia.</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Nasze projekty powstają w duchu nowoczesnego minimalizmu, dzięki czemu pięknie komponują się z pokojem dziecka i przestrzenią dzienną.
            Korzystamy z harmonijnych palet pastelowych oraz dopracowanej hierarchii informacji, aby całość była czytelna, subtelna i ponadczasowa.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Galeria</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Przykładowe kolekcje metryczek</h2>
            </div>
            <button className="w-fit rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1">
              Zobacz wszystkie style
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-sand bg-[#fffdf8] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-2xl border border-[#eee3d3] bg-cream p-5 shadow-inner">
                  <h3 className="text-xl font-medium text-slate-800">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.style}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-slate-500">Imię</dt>
                      <dd className="font-medium text-slate-800">{project.baby.name}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Data</dt>
                      <dd className="font-medium text-slate-800">{project.baby.date}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Godzina</dt>
                      <dd className="font-medium text-slate-800">{project.baby.time}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Waga</dt>
                      <dd className="font-medium text-slate-800">{project.baby.weight}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Wzrost</dt>
                      <dd className="font-medium text-slate-800">{project.baby.height}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-sage to-baby p-8 shadow-sm md:p-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Gotowi na projekt?</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Podaruj swojej historii formę, która wzrusza i zachwyca detalem.</h2>
            <p className="text-slate-700">
              Wypełnij formularz i otrzymaj propozycję pierwszej koncepcji. Pracujemy z wyczuciem estetyki i pełnym zrozumieniem emocji, które kryją się za każdą datą i imieniem.
            </p>
            <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
              Stwórz metryczkę
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Kontakt</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Opowiedz nam o swojej metryczce.</h2>
              <p className="text-slate-600">
                Im więcej szczegółów podasz, tym precyzyjniej dopasujemy styl projektu. Odpowiadamy zwykle w ciągu 24 godzin.
              </p>
            </div>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-600">
                Imię
                <input
                  type="text"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder="Twoje imię"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600">
                Email
                <input
                  type="email"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder="adres@email.com"
                />
              </label>
              <label className="md:col-span-2 flex flex-col gap-2 text-sm text-slate-600">
                Temat
                <input
                  type="text"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder="Np. Metryczka na prezent"
                />
              </label>
              <label className="md:col-span-2 flex flex-col gap-2 text-sm text-slate-600">
                Wiadomość
                <textarea
                  rows="5"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder="Opisz styl, kolorystykę i dane do metryczki"
                />
              </label>
              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/80">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-lg font-semibold">Atelier Metryczek</h3>
            <p className="max-w-md text-sm text-slate-600">
              Tworzymy autorskie metryczki narodzin w estetyce premium — subtelne, eleganckie i głęboko osobiste.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Nawigacja</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Hero</li>
              <li>Dlaczego my</li>
              <li>Galeria</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p className="font-medium text-slate-800">Kontakt</p>
            <p>kontakt@ateliermetryczek.pl</p>
            <p>+48 500 200 300</p>
            <div className="flex gap-3 pt-1">
              <a href="#" className="rounded-full border border-slate-300 p-2 transition hover:border-slate-500" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-slate-300 p-2 transition hover:border-slate-500" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-slate-300 p-2 transition hover:border-slate-500" aria-label="Wsparcie">
                <HeartHandshake className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-slate-300 p-2 transition hover:border-slate-500" aria-label="Czas realizacji">
                <Clock3 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Atelier Metryczek. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  )
}

export default App
