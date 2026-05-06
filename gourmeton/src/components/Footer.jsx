function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">GourmetOn</h2>
          <p className="text-gray-400 mt-2">
            Delivery inteligente para quem ama comer bem.
          </p>
        </div>

        <div className="text-gray-400">
          <p>Contato: contato@gourmeton.com</p>
          <p>Instagram | Facebook | LinkedIn</p>
          <p>Termos de uso | Política de privacidade</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
