// Menu.js
import React from "react";
import "./Menu.css"; // Import the CSS file for styling

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Cheese Hamburger",
      image:
        "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707091200&semt=sph",
      description:
        "Description for Item 1Description for Item 1Description for Item 1Description for Item 1Description for Item 1",
    },
    {
      id: 2,
      name: "Honey Pancake",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Description for Item 1Description for Item 1Description for Item 1Description for Item 1Description for Item 12",
    },
    {
      id: 3,
      name: "Spaghetti aglio olio",
      image:
        "https://www.foodrepublic.com/img/gallery/100-italian-fooddrink-words-and-phrases/l-intro-1684783348.jpg",
      description:
        "Description for Item 1Description for Item 1Description for Item 1Description for Item 1Description for Item 13",
    },
    {
      id: 4,
      name: "Chicken Drumsticks",
      image:
        "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
      description:
        "Description for Item 1Description for Item 1Description for Item 1Description for Item 1Description for Item 13",
    },
    {
      id: 5,
      name: "Dum Biryani",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
      description: "Description for Item 5",
    },

    {
      id: 6,
      name: "Paneer Makhni",
      image:
        "https://kitchenmai.com/wp-content/uploads/2020/05/methi_paneer_blog-500x500.jpg",
      description: "Description for Item 6",
    },
    {
      id: 7,
      name: "Sourdough Pizza",
      image:
        "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg",
      description: "Description for Item 7",
    },
    {
      id: 8,
      name: "Steamed Momos",
      image:
        "https://allchickenrecipe.com/wp-content/uploads/2020/05/Chicken-Momos.jpg",
      description: "Description for Item 8",
    },
  ];

  return (
    <div className="menu-container">
      <h1 style={{ color: "black" }} className="menu-title">
        Our Menu
      </h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p style={{ color: "black" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
