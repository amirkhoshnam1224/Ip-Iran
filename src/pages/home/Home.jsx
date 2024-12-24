import header from '../../assets/image/Site.jpg'
import Card from '../../components/card/Card'
function Home() {
  return (
    <div className='w-screen h-screen' >
      <img src={header} alt="" className="w-full h-5/6" />
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
