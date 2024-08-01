// import React from 'react'
import "../components/card.css";

function Card() {
  const data = [
    {
      name: "Muslim",
      img: "https://images.pexels.com/photos/161276/moscow-cathedral-mosque-prospekt-mira-ramadan-sky-161276.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
         inStock:true
    },
    {
        name: "Muslim",
      img: "https://plus.unsplash.com/premium_photo-1684610112420-ad419b7100b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBvc2l0aXZlfGVufDB8fDB8fHww",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
         inStock:false
    },
    {
        name: "Muslim",
        img: "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
          inStock:true
      },
      {
        name: "Muslim",
        img: "https://images.pexels.com/photos/2989625/pexels-photo-2989625.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
          inStock:false
      },
       
  ];

  return (
    <div className="container">
      {
      
      data.map((item, index) => (
        <div className="main" key={index}>
          {/* <div>
            <img src={item.img} alt={item.name} />
          </div> */}
          <div>
            <img src={item.img} alt={item.name} />
          </div>
          <div className="description">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>

            {item.inStock ? 'In Stock' : 'Out of Stock'  }

            </button>
          </div>
        </div>
      ))
      
      }
    </div>
  );
}

export default Card;
