
function CardPricing() {
    return (
        <div>
            <div className="mt-4 max-w-sm mx-auto px-4 mt-16">
                <div className="bg-white border rounded text-center px-4 pt-6 pb-8 shadow">
                    <h3 className="text-2xl">
                        یک ماه
                    </h3>
                    <div className="mt-4">
                        <span className="text-red-500 text-2xl line-through">4 €</span>
                    </div>
                    <div className="mt-1">
                        <span className="font-bold text-3xl">4 €</span>
                        <span className="text-gray-600">/یک ماه</span>
                    </div>
                    <div className="mt-6">
                        <div className="font-bold text-lg">2.000 translation keys</div>
                        <div className="mt-3">Unlimited projects</div>
                        <div className="mt-3">Unlimited languages</div>
                        <div className="mt-3">Unlimited seats</div>
                    </div>
                    <div className="mt-8">
                        <a href="" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Start my 14-day trial
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPricing
