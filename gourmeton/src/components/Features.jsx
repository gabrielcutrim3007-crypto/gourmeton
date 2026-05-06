function Features() {
  const features = [
    "Busca por tipo de comida",
    "Filtros por preço e avaliação",
    "Favoritos personalizados",
    "Acompanhamento do pedido",
    "Cupons e promoções",
    "Avaliações de restaurantes"
  ]

  return (
    <section id="funcionalidades" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Funcionalidades do App
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-2xl">
              <p className="text-lg font-semibold">🍽️ {feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
