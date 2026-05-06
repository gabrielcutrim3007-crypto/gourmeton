function Benefits() {
  const benefits = [
    {
      title: "Entrega rápida",
      description: "Receba seus pedidos com agilidade e acompanhamento em tempo real."
    },
    {
      title: "Variedade de restaurantes",
      description: "Escolha entre diversas opções de culinária para todos os gostos."
    },
    {
      title: "Pagamento fácil",
      description: "Pague com cartão, Pix ou carteira digital de forma segura."
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Por que escolher o GourmetOn?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl shadow-md bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
