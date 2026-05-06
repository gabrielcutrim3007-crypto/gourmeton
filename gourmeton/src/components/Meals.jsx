import { useEffect, useState } from "react"
import { getMeals } from "../services/api"

function Meals() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMeals() {
      try {
        const data = await getMeals()
        setMeals(data.slice(0, 6))
      } catch (error) {
        console.error("Erro ao buscar comidas:", error)
      } finally {
        setLoading(false)
      }
    }

    loadMeals()
  }, [])

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pratos populares
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Carregando pratos...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="bg-white rounded-3xl shadow-md overflow-hidden">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{meal.strMeal}</h3>
                  <p className="text-gray-600">{meal.strCategory}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Meals
