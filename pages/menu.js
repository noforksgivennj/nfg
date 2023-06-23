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
                <div>
                    <div className="menu-section">
                        <h2  className={styled.menuHeader}>
                            FRIED CHICKEN SANDWICHES:
                        </h2>
                        <div>
                            Choice of Fried Chicken or Panko Fried Tofu
                            <br/>
                            Choice of Balthazar brioche bun or bao buns (2)
                        </div>
                    </div>
                    <Item
                        itemTitle="Peruvian"
                        itemPrice="$12"
                        itemDescription="Panko breaded thighs w/ají amarillo, ají verde, pickled onions, cilantro, scallions, and spicy mayo"
                    />
                    <Item
                        itemTitle="Korean"
                        itemPrice="$12"
                        itemDescription="Panko breaded thighs w/gochujang glaze, Asian cabbage slaw, pickled cucumbers, scallions, and sesame seeds"
                    />
                    <Item
                        itemTitle="Buffalo"
                        itemPrice="$12"
                        itemDescription="Panko breaded thighs w/creamy blue cheese or herbed ranch, and shredded lettuce"
                    />
                    <Item
                        itemTitle="Southern"
                        itemPrice="$12"
                        itemDescription="Flour breaded thighs w/dill pickles, mayo, and shredded lettuce (add hot honey $2)"
                    />
                    <Item
                        itemTitle="Ranch"
                        itemPrice="$12"
                        itemDescription="Flour breaded thighs w/herbed ranch, smoked bacon, roasted garlic tomatoes, and shredded lettuce (add hot honey $2)"
                    />
                    <Item
                        itemTitle="Italian"
                        itemPrice="$12"
                        itemDescription="Flour breaded thighs w/roasted garlic tomatoes, arugula, pesto mayo, and Calabrian chili honey"
                    />
                </div>
                <div>
                    <div className="menu-section">
                        <h2  className={styled.menuHeader}>
                            SANDWICHES:
                        </h2>
                    </div>
                    <Item
                        itemTitle="Fried Artichoke"
                        itemPrice="$12"
                        itemDescription="Lemon caper herb mayo, arugula, and Calabrian chili honey on French baguette"
                    />
                    <Item
                        itemTitle="Carnitas Grilled Cheese"
                        itemPrice="$12"
                        itemDescription="Ají verde, pickled onions, cilantro, and mozzarella on country bread"
                    />
                    <Item
                        itemTitle="Cheesy City"
                        itemPrice="$10"
                        itemDescription="Italian cheese blend, roasted garlic tomatoes, pesto mayo on country bread"
                    />
                    <Item
                        itemTitle="Southern"
                        itemPrice="$12"
                        itemDescription="Flour breaded thighs w/dill pickles, mayo, and shredded lettuce (add hot honey $2)"
                    />
                    <Item
                        itemTitle="Banh Mi"
                        itemPrice="$12"
                        itemDescription="Panko breaded thighs or tofu w/spicy mayo, ají verde, pickled carrot daikon slaw, and fresh herbs on French bread"
                    />
                    <Item
                        itemTitle="BBQ Pulled Pork Tostadas (2)"
                        itemPrice="$12"
                        itemDescription="Ají verde, pickled onions, cilantro, and cotija cheese"
                    />
                    <Item
                        itemTitle="Smashtown"
                        itemPrice="$9"
                        itemDescription="Pat LaFrieda burger blend, American cheese, bangin’ burger sauce, tomato, and shredded lettuce on a brioche bun (bacon jam for $3) (make it a double for $3 extra)"
                    />
                </div>
                <div>
                    <div className="menu-section">
                        <h2  className={styled.menuHeader}>
                            CHEESESTEAKS:
                        </h2>
                        <div>
                            Pat LaFrieda sliced ribeye, served on a Balthazar french roll.
                        </div>
                    </div>
                    <Item
                        itemTitle="Classic"
                        itemPrice="$12"
                        itemDescription="Sautéed onions and house-made cheese sauce"
                    />
                    <Item
                        itemTitle="Korean"
                        itemPrice="$13"
                        itemDescription="Gochujang marinated beef, house-made cheese sauce, spicy mayo, Asian cabbage slaw, scallions, and sesame seeds"
                    />
                    <Item
                        itemTitle="Buffalo"
                        itemPrice="$13"
                        itemDescription="Buffalo sauce, creamy blue cheese or herbed ranch, sautéed onions, house-made cheese sauce, and scallions"
                    />
                    <Item
                        itemTitle="Southern"
                        itemPrice="$12"
                        itemDescription="Flour breaded thighs w/dill pickles, mayo, and shredded lettuce (add hot honey $2)"
                    />
                    <Item
                        itemTitle="Mexican"
                        itemPrice="$13"
                        itemDescription="Chipotle marinated beef, ají verde, cotija cheese, pickled onions, cilantro, and house-made cheese sauce
                    << add a Side Salad or Fries to any Sandwich $3 >> << add Sweet Potato Fries or Togarashi Fries $4 >>
                    Must be purchased with a full priced item"
                    />
                </div>
                <div>
                    <div className="menu-section">
                        <h2  className={styled.menuHeader}>
                            SALADS:
                        </h2>
                    </div>
                    <Item
                        itemTitle="Caesar"
                        itemPrice="$12"
                        itemDescription="Romaine, house caesar, pecorino, and croutons"
                    />
                    <Item
                        itemTitle="Ginger"
                        itemPrice="$13"
                        itemDescription="Mixed greens, ginger dressing, shredded carrots, scallions, and cherry tomatoes"
                    />
                    <Item
                        itemTitle="NFG Salad"
                        itemPrice="$13"
                        itemDescription="Mixed greens and Romaine, pickled onions, cherry tomatoes, shredded carrots, cotija cheese, and lime jalapeno dressing
                    << add Fried Chicken, Tofu, or Bacon $3 >>"
                    />
                </div>
                <div>
                    <div className="menu-section">
                        <h2  className={styled.menuHeader}>
                            KIDS MENU:
                        </h2>
                    </div>
                    <Item
                        itemTitle="Chicken Tenders (3)"
                        itemPrice="$10"
                        itemDescription="with fries"
                    />
                    <Item
                        itemTitle="Grilled Cheese"
                        itemPrice="$9"
                        itemDescription="with fries"
                    />
                </div>
                <div>
                    <div className="menu-section">
                        <h2  className={styled.menuHeader}>
                            FRIES:
                        </h2>
                    </div>
                    <Item
                        itemTitle="Large Fries"
                        itemPrice="$6"
                    />
                    <Item
                        itemTitle="Togarashi Fries"
                        itemPrice="$8"
                        itemDescription="Togarashi spice, spicy mayo, scallions, and sesame seeds."
                    />
                    <Item
                        itemTitle="Large Sweet Potato Fries"
                        itemPrice="$8"
                    />
                </div>
                </div>

            </div>
        </Main>

        </>

    )
}
