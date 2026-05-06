function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-orange-600 font-semibold mb-3">
            Delivery rápido, fácil e delicioso
          </p>

          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Sua comida favorita entregue em poucos minutos
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Com o GourmetOn, você encontra restaurantes, pratos e ofertas perto de você com poucos cliques.
          </p>

          <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition">
            Baixar agora
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Comida deliciosa"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}

export default Hero
