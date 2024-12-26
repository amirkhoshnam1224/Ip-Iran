import { CardProductShowcase } from "../cardFeatures/CardProductShowcase"
import sana from '../../assets/image/sana.jpg'
import footbal from '../../assets/image/footbal.jpg'
import bank from '../../assets/image/bank.jpg'
import movie from '../../assets/image/movie.jpg'
function ProductShowcase() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-1">
      <CardProductShowcase
      image={sana}/>
      <CardProductShowcase
      image={footbal}/>
      <CardProductShowcase
      image={bank}/>
      <CardProductShowcase
      image={movie}/>
    </div>
  )
}

export default ProductShowcase
