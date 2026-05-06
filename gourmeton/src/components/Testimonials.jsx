function Testimonials() {
  const testimonials = [
    {
      name: "Marina Souza",
      text: "O GourmetOn salvou meus almoços da semana. Rápido e super fácil de usar!"
    },
    {
      name: "Lucas Lima",
      text: "Adorei os filtros por tipo de comida. Achei restaurantes novos perto de casa."
    },
    {
      name: "Ana Clara",
      text: "Interface linda, simples e com promoções muito boas."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl shadow-md bg-gray-50">
              <p className="text-gray-600 mb-6">"{item.text}"</p>
              <h3 className="font-bold text-orange-600">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
