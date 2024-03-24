
import '../style/Vision.scss'
import collection from '../assets/Collection.mp4'


export default function Vision() {
  return (

    <>
    <div className='Vision_container'>
        <div className="vision_innerContainer">

<div className='Vision_Div'>
<p>Our Vision</p>
<p>The vision of 3dotlink is to be a transformative force at the intersection of culture, art, and technology within the Web3 landscape. We envision a digital realm where the rich tapestry of cultural traditions, especially the intricate artistry of masks from diverse ethnic groups, is seamlessly woven into the fabric of the digital age. Our vision extends far beyond mere NFTs; it's about the preservation and celebration of cultural heritage in a dynamic, ever-evolving digital space. We strive to empower artists and creators, offering them a unique canvas to bring their cultural art to life while harnessing the capabilities of AI technology. We see 3dotlink as a bridge between the past and the future, where ancient rituals and modern innovation converge, enriching our collective human experience and fostering a global community united by a shared appreciation for the art, history, and culture that defines us. In essence, our vision is to unlock the immense potential of cultural art within Web3, inviting the world to explore, create, and treasure the beauty of diverse traditions through the digital realm.</p>


<button >Read More</button>
</div>

        </div>
    </div>

    {/* Video */}

    <div className='Collection_Video'>
    <video autoPlay muted loop className="video">
    <source src={collection} type="video/mp4" />
      </video>

    </div>
    </>
  )
}

