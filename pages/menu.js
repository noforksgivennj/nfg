import Item from "../components/food-menu/Item"
import styled from "../styles/Menu.module.css"
import Main from "../components/layouts/main/Main"

export default function Menu() {
    return (
        <>
            <Main>

                <div className={styled.menuBackground}>
                    <div className={styled.pageBackground}>

                        <h1 className={styled.menuHeader}>Menu</h1>

                        <section>
                            <h2>Fried Chicken Sandwiches</h2>
                            <Item itemTitle="Peruvian" itemPrice="$13" itemDescription="Panko breaded thighs w/aji amarillo, aji verde, pickled onions, cilantro, scallions, and spicy mayo" />
                            <Item itemTitle="Korean" itemPrice="$13" itemDescription="Panko breaded thighs w/Korean Glaze, gochujang coleslaw, pickled cucumbers, scallions and sesame seeds" />
                            <Item itemTitle="Buffalo" itemPrice="$13" itemDescription="Panko breaded thighs w/creamy blue cheese or herbed ranch, & shredded lettuce" />
                            <Item itemTitle="Southern" itemPrice="$13" itemDescription="Flour breaded thighs w/dill pickles, mayo, and shredded lettuce (add hot honey for $2)" />
                            <Item itemTitle="Ranch" itemPrice="$14" itemDescription="Flour breaded thighs w/herbed ranch, bacon jam, roasted garlic tomatoes, and shredded lettuce (add hot honey for $2)" />
                            <Item itemTitle="Italian" itemPrice="$13" itemDescription="Flour breaded thighs w/roasted garlic tomatoes, arugula, pesto mayo, and Calabrian chili honey" />
                        </section>

                        <section>
                            <h2>More Sandwiches</h2>
                            <Item itemTitle="Fried Artichoke" itemPrice="$13" itemDescription="Lemon caper herb mayo, arugula, roasted garlic tomatoes & Calabrian chili honey on French baguette" />
                            <Item itemTitle="Carnitas Grilled Cheese" itemPrice="$13" itemDescription="Ají verde, pickled onions, cilantro, and mozzarella on country bread" />
                            <Item itemTitle="Smashtown" itemPrice="$9" itemDescription="Pat LaFrieda burger blend, American cheese, bangin' burger sauce, tomato, & lettuce on a brioche (Add bacon jam for $3, make it a double for $3)" />
                            <Item itemTitle="Banh Mi" itemPrice="$13" itemDescription="Panko breaded thighs or tofu w/spicy mayo, pesto mayo, ají verde, pickled carrot cabbage slaw, and fresh herbs on French bread" />
                            <p><em>Add a side salad or fries to any sandwich - $3</em><br /><em>Add sweet potato fries or togarashi fries - $4</em></p>
                            <p><strong>MUST BE PURCHASED WITH A FULL PRICED ITEM</strong></p>
                        </section>

                        <section>
                            <h2>Cheesesteaks</h2>
                            <Item itemTitle="Korean" itemPrice="$14" itemDescription="Gochujang marinated beef, house-made cheese sauce, spicy mayo, gochujang coleslaw, scallions, and sesame seeds" />
                            <Item itemTitle="Buffalo" itemPrice="$14" itemDescription="Buffalo sauce, creamy blue cheese or herbed ranch, sautéed onions, house-made cheese sauce, and scallions" />
                            <Item itemTitle="Mexican" itemPrice="$14" itemDescription="Chipotle marinated beef, ají verde, cotija cheese, pickled onions, cilantro, and house-made cheese" />
                            <Item itemTitle="Classic" itemPrice="$13" itemDescription="Sautéed onions and house-made cheese sauce" />
                        </section>

                        <section>
                            <h2>Salads</h2>
                            <Item itemTitle="Caesar" itemPrice="$13" itemDescription="Romaine, house caesar, pecorino, and croutons" />
                            <Item itemTitle="NFG Salad" itemPrice="$12" itemDescription="Mixed greens and Romaine, pickled onions, cherry tomatoes, shredded carrots, cotija cheese, and lime jalapeno dressing (Add fried chicken, tofu, or bacon for $3)" />
                        </section>

                        <section>
                            <h2>Sides</h2>
                            <Item itemTitle="Large Fries" itemPrice="$6" itemDescription="" />
                            <Item itemTitle="Large Sweet Potato Fries" itemPrice="$8" itemDescription="" />
                            <Item itemTitle="Togarashi Fries" itemPrice="$8" itemDescription="Togarashi spice, spicy mayo, scallions, & sesame seeds" />
                            <p><em>Add a side salad or fries to any sandwich - $3</em><br /><em>Add sweet potato fries or togarashi fries - $4</em></p>
                            <p><strong>MUST BE PURCHASED WITH A FULL PRICED ITEM</strong></p>
                        </section>

                        <section>
                            <h2>Kids Menu</h2>
                            <Item itemTitle="Chicken Fingers & Fries" itemPrice="$11" itemDescription="" />
                            <Item itemTitle="Classic Grilled Cheese & Fries" itemPrice="$10" itemDescription="With one choice of sauce" />
                        </section>

                    </div>
                </div>

            </Main>

        </>

    )
}
