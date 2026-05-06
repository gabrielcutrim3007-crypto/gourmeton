function Contact() {
  return (
    <section id="contato" className="py-20 bg-orange-600 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Receba novidades do GourmetOn
        </h2>

        <p className="mb-8">
          Cadastre seu e-mail para receber promoções e atualizações do app.
        </p>

        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="flex-1 px-5 py-4 rounded-full text-gray-900"
          />

          <button className="bg-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-black transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
