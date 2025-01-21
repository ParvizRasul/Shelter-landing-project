import React from 'react'

function Card() {
    const cards = [
      { id: 1, name:"Whiskers",  title: "Fluffy Companion", description: "Whiskers is a playful and loving cat who enjoys napping and chasing laser pointers. 'Whiskers was rescued from a local street and has been with us for over a year. She loves cozy spaces and is looking for a calm home", image:"src/assets/FSD - Project - Happy Tails/cat-1.png" },

      { id: 2, name:"Max", title: "Loyal Guardian", description: "Max is a big, friendly dog who loves to play fetch and go on long walks. Max was found abandoned on the highway and brought to the shelter. He is very loyal and loves to be around people.", image:"src/assets/FSD - Project - Happy Tails/dog-1.png"  },

      { id: 3, name:"Bella", title: "Mysterious Explorer", description: "ella is a curious cat who loves to explore new places and always finds the best napping spots. Bella was rescued from a shelter in another city. She has since adapted well to her new environment and is looking for a loving home.", image:"src/assets/FSD - Project - Happy Tails/cat-2.png" },

      { id: 4, name:"Rex", title: "Friendly Protector", description: "Rex is a strong, protective dog who loves to play with kids and is extremely friendly. Rex came to us from an animal control agency after being abandoned. He has adjusted well to life in the shelter and is ready for his forever home.", image:"src/assets/FSD - Project - Happy Tails/dog-2.png" },

      { id: 5, name:"Luna", title: "Gentle Soul", description: "Luna is a calm and gentle cat who loves attention and enjoys curling up in warm places. Luna was surrendered to the shelter when her previous owner moved. She is a very affectionate cat who is ready to bond with a new family.", image:"src/assets/FSD - Project - Happy Tails/cat-3.png" },

      { id: 6, name:"Buddy", title: "Adventure Seeker", description: "Buddy is an energetic dog who loves outdoor activities and meeting new friends. Buddy was rescued from a high-kill shelter where he was abandoned. He has a lot of energy and is looking for an active family who loves adventure.", image:"src/assets/FSD - Project - Happy Tails/dog-4.png" }
    ];
  

    return (
        <div className="container d-flex mt-2">
            <div className='row'>
                {cards.map(card =>(
                <div key={card.id} className="col-md-4 col-sm-12 mb-4">
                    <div className='card-body mt-5'>
                        <img className='card-img' src={card.image} alt="pet pics" />
                        <h3 className='card-title m-1 text-center'>{card.name}</h3>
                        <h5 className='card-title m-1 text-center'>{card.title}</h5>
                        <p className='card-text m-1 text-center'>{card.description}</p>
                        <div className='btn d-block bg-light'>
                        <button className='btn btn-primary mx-auto'>Adopt</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
     
    );
  }
  
  export default Card;