import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";
import Layout from "../layout/Layout";

function Menu2() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Define your JWT token
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicG9wY2FmZSIsImlkIjoiNjQ2OGRiOTA1YzljYjBjMTc1Nzk5MGVkIn0sImlhdCI6MTY4NTY0ODI3NywiZXhwIjoxNjg1NjU3Mjc3fQ.LAhUIYSOXhgfNOtt_D1GmQGm9ilw8vk0D4eFOx5P8BY";

        // Fetch the menu items from the backend
        fetch("http://localhost:5002/api/dishes/", {
            headers: {
                Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setMenuItems(data);
                console.log(menuItems.dishes[0]);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <Layout>
            <Breadcrumb pageName="Menu List" pageTitle="Il nostro Menù" />
            <div className="menu2-area pt-120 mb-120">
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu2-tab mb-70">
                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link active"
                                            id="breakfast-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#breakfast"
                                            type="button"
                                            role="tab"
                                            aria-controls="breakfast"
                                            aria-selected="true"
                                        >
                                           Colazione
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="lunch-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#lunch"
                                            type="button"
                                            role="tab"
                                            aria-controls="lunch"
                                            aria-selected="false"
                                        >
                                            Pranzo
                                        </button>
                                    </li>
                                    
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="starter-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#starter"
                                            type="button"
                                            role="tab"
                                            aria-controls="starter"
                                            aria-selected="false"
                                        >
                                            Piadine
                                        </button>
                                    </li>
                                    
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="dinner-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#dinner"
                                            type="button"
                                            role="tab"
                                            aria-controls="dinner"
                                            aria-selected="false"
                                        >
                                            Aperitivo
                                        </button>
                                    </li>
                                        
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <button
                                            className="nav-link"
                                            id="drink-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#drink"
                                            type="button"
                                            role="tab"
                                            aria-controls="drink"
                                            aria-selected="false"
                                        >
                                            Drink list
                                        </button>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="breakfast"
                                    role="tabpanel"
                                    aria-labelledby="breakfast-tab"
                                >
                                     <div className="row">
                                       
                                       <div className="col-lg-6 p-0">
                                           <div className="menu2-wrap">
                                               <div className="menu-title">
                                                   <h2>Colazione</h2>
                                               </div>
                                               <ul>
                                               
                                                   <li>
                                                       <div className="single-menu">
                                                           <div className="menu-name">
                                                               <h4>
                                                                   Shahi Egg
                                                                   Curry
                                                               </h4>
                                                               <p>
                                                                   It has
                                                                   survived not
                                                                   only five
                                                                   centuries.
                                                               </p>
                                                           </div>
                                                           <div className="price">
                                                               <span>$40</span>
                                                           </div>
                                                       </div>
                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                       <div className="col-lg-6 p-0">
                                           <div className="menu2-left-img">
                                               <img
                                                   src="assets/images/bg/menu2-left-img-01.png"
                                                   alt=""
                                               />
                                           </div>
                                       </div>
                                   </div>
                                  
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="lunch"
                                    role="tabpanel"
                                    aria-labelledby="lunch-tab"
                                >
                                    <div className="row">
                                        
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Pranzo</h2>
                                                </div>
                                                <ul>
                                                    {menuItems.dishes &&
                                                        menuItems.dishes.map(
                                                            (dish) => (
                                                                <li
                                                                    key={
                                                                        dish._id
                                                                    }
                                                                >
                                                                    <div className="single-menu">
                                                                        <div className="menu-name">
                                                                            <h4>
                                                                                {
                                                                                    dish.name
                                                                                }
                                                                            </h4>
                                                                            {dish.ingredients && (
                                                                                <div>
                                                                                    <p>
                                                                                        Ingredienti:{" "}
                                                                                        {dish.ingredients
                                                                                            .map(
                                                                                                (
                                                                                                    ingredient
                                                                                                ) =>
                                                                                                    ingredient.name
                                                                                            )
                                                                                            .join(
                                                                                                ", "
                                                                                            )}
                                                                                    </p>
                                                                                    {dish.ingredients.some(
                                                                                        (
                                                                                            ingredient
                                                                                        ) =>
                                                                                            ingredient.allergens &&
                                                                                            ingredient
                                                                                                .allergens
                                                                                                .length >
                                                                                                0
                                                                                    ) && (
                                                                                        <p>
                                                                                            Allergeni:{" "}
                                                                                            {dish.ingredients
                                                                                                .filter(
                                                                                                    (
                                                                                                        ingredient
                                                                                                    ) =>
                                                                                                        ingredient.allergens &&
                                                                                                        ingredient
                                                                                                            .allergens
                                                                                                            .length >
                                                                                                            0
                                                                                                )
                                                                                                .flatMap(
                                                                                                    (
                                                                                                        ingredient
                                                                                                    ) =>
                                                                                                        ingredient.allergens.map(
                                                                                                            (
                                                                                                                allergen
                                                                                                            ) =>
                                                                                                                allergen.name
                                                                                                        )
                                                                                                )
                                                                                                .join(
                                                                                                    ", "
                                                                                                )}
                                                                                        </p>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div className="price">
                                                                            <span>
                                                                                {"€" +
                                                                                    dish.price}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                        <div className="menu2-left-img">
                                            <img
                                                src="assets/images/bg/menu2-left-img-01.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                            
                                <div
                                    className="tab-pane fade"
                                    id="dinner"
                                    role="tabpanel"
                                    aria-labelledby="dinner-tab"
                                >
                                    <div className="row">
                                       
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Aperitivo</h2>
                                                </div>
                                                <ul>
                                                
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Shahi Egg
                                                                    Curry
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$40</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="drink"
                                    role="tabpanel"
                                    aria-labelledby="drink-tab"
                                >
                                    <div className="row">
                                       
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Drink list</h2>
                                                </div>
                                                <ul>
                                                
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Shahi Egg
                                                                    Curry
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$40</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="starter"
                                    role="tabpanel"
                                    aria-labelledby="starter-tab"
                                >
                                     <div className="row">
                                       
                                       <div className="col-lg-6 p-0">
                                           <div className="menu2-wrap">
                                               <div className="menu-title">
                                                   <h2>Piadine</h2>
                                               </div>
                                               <ul>
                                               
                                                   <li>
                                                       <div className="single-menu">
                                                           <div className="menu-name">
                                                               <h4>
                                                                   Shahi Egg
                                                                   Curry
                                                               </h4>
                                                               <p>
                                                                   It has
                                                                   survived not
                                                                   only five
                                                                   centuries.
                                                               </p>
                                                           </div>
                                                           <div className="price">
                                                               <span>$40</span>
                                                           </div>
                                                       </div>
                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                       <div className="col-lg-6 p-0">
                                           <div className="menu2-left-img">
                                               <img
                                                   src="assets/images/bg/menu2-left-img-01.png"
                                                   alt=""
                                               />
                                             
                                           </div>
                                       </div>
                                   </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="beverage"
                                    role="tabpanel"
                                    aria-labelledby="beverage-tab"
                                >
                                    <div className="row">
                                        
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Beverage</h2>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>Coffee</h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries
                                                                    the leap
                                                                    need.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$12</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Sparkling
                                                                    drinks
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries,
                                                                    but also the
                                                                    electronic.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$15</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Lemon Juices
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries
                                                                    also the
                                                                    leap know.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$15</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Milkshakes
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$22</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Tonic Water
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$18</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="wines"
                                    role="tabpanel"
                                    aria-labelledby="wines-tab"
                                >
                                    <div className="row">
                                        
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Wines</h2>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Shiraz
                                                                    (Syrah)
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries
                                                                    the leap
                                                                    need.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$20</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>Malbec</h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries,
                                                                    but also the
                                                                    electronic.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$24</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>Merlot</h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries
                                                                    also the
                                                                    leap know.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$17</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Red
                                                                    Zinfandal
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$38</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Pinot Noir
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$30</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="apitizer"
                                    role="tabpanel"
                                    aria-labelledby="apitizer-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-left-img">
                                                <img
                                                    src="assets/images/bg/menu2-left-img-01.png"
                                                    alt=""
                                                />
                                            
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="menu2-wrap">
                                                <div className="menu-title">
                                                    <h2>Apitizer</h2>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Fruit
                                                                    Charcuterie
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries
                                                                    the leap
                                                                    need.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$80</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Hot Spinach
                                                                    Artichoke
                                                                    Dip
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries,
                                                                    but also the
                                                                    electronic.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$40</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Bean Dip
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries
                                                                    also the
                                                                    leap know.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$60</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Buffalo
                                                                    Chicken Dip
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$50</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-menu">
                                                            <div className="menu-name">
                                                                <h4>
                                                                    Creamy
                                                                    Artichoke
                                                                    Dip
                                                                </h4>
                                                                <p>
                                                                    It has
                                                                    survived not
                                                                    only five
                                                                    centuries.
                                                                </p>
                                                            </div>
                                                            <div className="price">
                                                                <span>$40</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </Layout>
    );
}

export default Menu2;
