function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-600">GourmetOn</h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <a 
          href="#contato"
          className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition"
        >
          Baixar App
        </a>
      </nav>
    </header>
  )
}

export default Navbar
