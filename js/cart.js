/**
 * @author: Ebrahim Vericain
 * Date: 9-Nov-2020
 * @description: Two classes that are meant to create GameGenre and Game objects.
 * The script creates an array of categories, catalog, and cart which will be used
 * dynamically between each other for fluid webpage functionality.
 * 
 * -- References --
 * @see https://www.w3schools.com/js/js_objects.asp
 * @see https://getbootstrap.com/docs/4.0/components/card/
 * @see https://getbootstrap.com/docs/4.0/content/tables/
 * @see https://fontawesome.com/icons?d=gallery
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * @see https://www.w3schools.com/jsref/met_win_settimeout.asp
 * @see https://www.w3schools.com/js/js_htmldom_html.asp
 * @see https://www.w3schools.com/jsref/prop_html_innerhtml.asp
 * @see https://www.w3schools.com/js/js_errors.asp
 */

/**
 * The GameGenre Class.
 */
class GameGenre {
    /**
     * Constructor for the GameGenre.
     *
     * @param {number} gameGenreId The id of the game genre.
     * @param {string} gameGenreName The name of the game genre.
     * @param {string} description A description of the game genre.
     */
    constructor(gameGenreId, gameGenreName, description) {
        this.gameGenreId = gameGenreId;
        this.gameGenreName = gameGenreName;
        this.description = description;
    }
}

/**
 * The Game Class.
 */
class Game {
    /**
     * Constructor for the Game.
     *
     * @param {number} gameId The ID of the game.
     * @param {string} gameTitle The title of the game.
     * @param {string} description The description of the game.
     * @param {string} brand The brand (creator(s)) of the of the game.
     * @param {number} unitPrice The price of the game.
     * @param {number} quantOfStock The stock of the game.
     * @param {string} manufacturer The manufacturer of the game.
     * @param {string} thumbImg The thumbnail image of the game.
     * @param {object} category The specified category (game genre) of the game.
     */
    constructor(gameId, gameTitle, description, brand, unitPrice, quantOfStock,
        manufacturer, thumbImg, category) {
        this.gameId = gameId;
        this.gameTitle = gameTitle;
        this.description = description;
        this.brand = brand;
        this.unitPrice = unitPrice;
        this.quantOfStock = quantOfStock;
        this.manufacturer = manufacturer;
        this.thumbImg = thumbImg;
        this.category = category;
    }
}

// Array of the game genres.
var categories = [];
// Array of the games.
var catalog = [];
// Array of current cart.
var cart = [];

/**
 * Declares and initializes objects (category) into the category array.
 */
function initializeCategories() {
    categories = [];

    let gameGenre = new GameGenre(0, "FPS", "A game genre that primarily uses a gun " +
        "as the main weapon in first-person");
    categories.push(gameGenre);

    gameGenre = new GameGenre(1, "MOBA", "A game genre that focuses on strategy " +
        "and mechanics in which the player controls a single character");
    categories.push(gameGenre);

    gameGenre = new GameGenre(2, "RTS", "A game genre that revolves on pure strategy " +
        "from an ariel view");
    categories.push(gameGenre);

    gameGenre = new GameGenre(3, "RPG", "A game genre that consists of various roles " +
        "that the player can pick from to start an adventure");
    categories.push(gameGenre);

    gameGenre = new GameGenre(4, "Fight Games", "A 2D game genre based on close " +
        "combat between two characters in which one of them is you ");
    categories.push(gameGenre);

    gameGenre = new GameGenre(5, "Racing Games", "A game genre where the player " +
        "controls a car in a race in either first or third person");
    categories.push(gameGenre);

    gameGenre = new GameGenre(6, "Sports Games", "A game genre that simulates the " +
        "practice of sports.");
    categories.push(gameGenre);

    gameGenre = new GameGenre(7, "MMO", "A game genre that is played online " +
        "consisting of large amounts of player in the servers");
    categories.push(gameGenre);
}

/**
 * Declares and initializes objects (items) into the catalog array.
 */
function initializeItems() {
    catalog = [];

    let game = new Game(10, "Command and Conquer: Red Alert 1", "A RTS game. " +
        "And simply the best game known to man kind &#128540;.", "Adam P. Isgreen, " +
        "Michael Lightner, Erik Yeo", 25.5, 23423, "Westwood Studios",
        "images/redAlert1.jpg", categories[2]);
    catalog.push(game);

    game = new Game(0, "Age of Empires 2: Definitive Edition", "An RTS reworked " +
        "game released in 2019", "Bruce, Shelley, Greg Street", 25, 13022,
        "Ensemble Studios", "images/ageOfEmpires2DefinitiveEdition.png",
        categories[2]);
    catalog.push(game);

    game = new Game(2, "Counter-Strike: Global Offensive", "The fourth game of the " +
        "Counter-Strike series released in 2012", "Minh Le, Jess Cliffe", 0, 99999,
        "Valve Corporation", "images/csgo.jpg",
        categories[0]);
    catalog.push(game);

    game = new Game(1, "Borderlands 3", "An FPS game. Is a sequel to its " +
        "predecessor, Borderlands 2", "Paul Sage", 45.5, 4234, "Gearbox Software",
        "images/borderlands3.jpg", categories[0]);
    catalog.push(game);

    game = new Game(3, "Dota 2", "A MOBA game that is a sequel to Defense of the " +
        "Ancients", "IceFrog", 0, 99999, "Valve Corporation", "images/dota2.jpg",
        categories[1]);
    catalog.push(game);

    game = new Game(4, "Final Fantasy XIV", "The second MMORPG game part of the " +
        "Final Fantasy series", "Nobuaki Komoto", 18, 38457, "Sqaure Enix",
        "images/ffXIV.jpg", categories[7]);
    catalog.push(game);

    game = new Game(5, "FIFA 21", "A sports game which is the 28th game of the it's " +
        "series", "Electronic Arts", 65.5, 43535, "EA Sports", "images/fifa21.jpg",
        categories[6]);
    catalog.push(game);

    game = new Game(6, "Guild Wars 2", "A MMORPG game which orients towards a " +
        "fantasy-like theme", "Mike O'Brien", 0, 99999, "ArenaNet", "images/gw2.jpg",
        categories[7]);
    catalog.push(game);

    game = new Game(7, "League of Legends", "A MOBA gamem was inspired by Defense of " +
        "the Ancients", "Marc Merrill", 0, 99999, "Riot Games", "images/lol.jpg",
        categories[1]);
    catalog.push(game);

    game = new Game(8, "Mortal Kombat 11", "A fighting game part of the Mortal " +
        "Kombat series", "Warner Bros", 35.75, 2434, "NetherRealm Studios",
        "images/mortalKombat11.png", categories[4]);
    catalog.push(game);

    game = new Game(9, "Need For Speed: Heat", "A racing game which is the 24th " +
        "game of the NFS series", "Electronic Arts", 70.5, 34555, "Ghost Games",
        "images/needforspeedHeat.jpg", categories[5]);
    catalog.push(game);

    game = new Game(11, "Skyrim", "A RPG game part of the ES series that won Best " +
        "RPG of it's year, 2011", "Todd Howard", 20, 32423, "Bethesda",
        "images/skyrim.jpg", categories[3]);
    catalog.push(game);

    game = new Game(12, "Smite", "A third-person MOBA game that is strongly based " +
        "on mechanics", "AJ Walker", 0, 99999, "Hi-Rez Studios", "images/smite.jpg",
        categories[1]);
    catalog.push(game);

    game = new Game(13, "StarCraft 2", "A science fiction RTS game taken place " +
        "across the galaxy made by Blizzard", "Dustin Browder", 0, 99999, "Blizzard " +
        "Entertainment", "images/starcraft2.jpg", categories[2]);
    catalog.push(game);

    game = new Game(14, "Street Fighter V", "A fighting game released in 2016 " +
        "which initially announced for Linux", "Takayuki Nakayama", 12.5, 23094,
        "Capcom", "images/streetFighterV.png", categories[4]);
    catalog.push(game);

    game = new Game(15, "Tekken 7", "A fighting game which is the 9th game of the " +
        "Tekken series released in 2015", "Yasuki Nakabayashi", 25, 56755,
        "BANDAI NAMCO", "images/tekken7.jpg", categories[4]);
    catalog.push(game);

    game = new Game(16, "Tera", "A MMORPG game released in 2011 that was initially " +
        "for a paid price, but now is free", "Yong-Hyun Park, Byung-Gyu Chang", 0,
        99999, "KRAFTON", "images/tera.jpg", categories[7]);
    catalog.push(game);

    game = new Game(17, "Valorant", "A competitive tactical FPS also game consisting " +
        "of various in-game abilites", "David Nottingham, Joe Ziegler", 0, 99999,
        "Riot Games", "images/valorant.jpg", categories[0]);
    catalog.push(game);

    game = new Game(18, "The Witcher 3", "A RPG game based on the The Witcher series " +
        "written by Andrzej Sapkowski", "Marcin Przybylowicz", 15, 32231,
        "CD Project RED", "images/witcher3.jpg", categories[3]);
    catalog.push(game);

    game = new Game(19, "World of Warcraft", "Most popular MMO game based in fantasy " +
        "universe, is the 4th WoW game", "Rob Pardo, Jeff Kaplan, Tom Chilton", 20.75, 42395,
        "Blizzard Entertainment", "images/wow.jpg", categories[7]);
    catalog.push(game);
}

/**
 * Displays the catalog. Calls the populated objects from the categories and catalog array. 
 * All to which are initialized on page load.
 */
function setUpCart() {
    try {
        initializeCategories();
        initializeItems();
        showListOfItems();
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Displays an add or delete alert, depending on user action.
 * 
 * @param {string} cssClass The specified bootstrap alert class.
 * @param {string} messageToDisplay The message to be displayed when the alert is prompt.
 */
function showStatusMessage(cssClass, messageToDisplay) {
    try {
        const alertBox = document.getElementById("alertBox");
        alertBox.setAttribute("class", cssClass);
        alertBox.innerHTML = messageToDisplay;
        alertBox.style.display = "block";

        setTimeout(hideStatusMessage, 5000);
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Hides the status message (gets called from showStatusMessage).
 */
function hideStatusMessage() {
    try {
        const alert = document.getElementById("alertBox");
        alert.style.display = "none";
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * This additional function resets the current prompted message, so that the message does not hang when
 * wanting to load the catalog, viewing the cart, or displaying the item's details.
 */
function resetStatusMessage() { 
    showStatusMessage("", "");
}

/**
 * Displays the all items from the catalog array and views them as cards. (Uses .innerHTML to
 * display bootstrap cards).
 */
function showListOfItems() {
    try {
        const listOfItems = document.getElementById("listOfItems");
        let htmlCardListOfItems = "<h2>Games</h2>";

        for (let i = 0; i < catalog.length; i++) {
            const game = catalog[i];

            htmlCardListOfItems += `<div class='card'> <img src="${game.thumbImg}" width='200' 
                height='100' class='img-thumbnail'/> <div class='card-body'><h4>${game.gameTitle}</h4><button 
                class='btn btn-info' onclick='showItemDetails(${game.gameId});resetStatusMessage();'>
                View Details</button>&emsp;<button class='btn btn-success' onclick='addToCart(${game.gameId});
                '>Add To Cart</button></div></div>`;
        }

        listOfItems.innerHTML = htmlCardListOfItems;
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Displays all items from the catalog array that have been added to the cart on a bootstrap table.
 * (Uses .innerHTML to display bootstrap table).
 */
function viewCart() {
    try {
        // Clearing list before displaying cart
        document.getElementById("listOfItems").innerHTML = 0;

        const itemsInCart = document.getElementById("listOfItems");

        let htmlItemsInCart = "<h2>Cart</h2><table class='table table-striped table-dark'><thead><tr> " +
            "<th scope='col'>#</th><th scope='col'>Game Title:</th><th scope='col'>Game Genre:</th><th " +
            "scope='col'>Price:</th><th scope='col'>Image:</th><th scope='col'></th><th scope='col'></th> " +
            "</tr></thead><tbody>";

        for (let i = 0; i < cart.length; i++) {
            const gameInCart = cart[i];

            htmlItemsInCart += `<tr><th scope="row">${1 + i}</th><td>${gameInCart.gameTitle}</td><td>
            ${gameInCart.category.gameGenreName}</td><td>$${gameInCart.unitPrice}</td><td>
            <img src="${gameInCart.thumbImg}" width="70" height="70"/></td><td><button class='btn btn-info' 
            onclick='showItemDetails(${gameInCart.gameId});resetStatusMessage();'>View Details</button>
            </td><td><button class='btn btn-danger' onclick='removeFromCart(${gameInCart.gameId});'>X
            </button></td></tr>`;
        }

        htmlItemsInCart += "</tbody></table>";

        if (cart.length === 0) {
            showStatusMessage("alert alert-secondary", "Your cart is now empty");
            htmlItemsInCart = "";
        }

        itemsInCart.innerHTML = htmlItemsInCart;
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Finds an item from the catalog array by it's ID and returns it.
 * 
 * @param {number} itemId The specified Game ID.
 * @returns {object} The item found.
 */
function findItemById(itemId) {
    try {
        for (let i = 0; i < catalog.length; i++) {
            if (itemId === catalog[i].gameId) {
                return catalog[i];
            }
        }
        return undefined;
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Displays an item's details from the catalog array on a bootstrap table. 
 * (Uses .innerHTML to display bootstrap table).
 * 
 * @param {number} itemId The specified Game ID.
 */
function showItemDetails(itemId) {
    try {
        document.getElementById("listOfItems").innerHTML = 0;

        const game = findItemById(itemId);

        const tableItem = document.getElementById("listOfItems");

        let htmlTableItem = "<h2>Item Details</h2><table class='table table-bordered table-dark'><thead> " +
            "<tr><th scope='col'>Game Title:</th><th scope='col'>Description:</th><th scope='col'>Creator(s): " +
            "</th><th scope='col'>Price:</th><th scope='col'>#OfStock:</th><th scope='col'>Manufacturer:</th> " +
            "<th scope='col'>Game Genre</th></tr></thead><tbody>";

        htmlTableItem += `<tr><td>${game.gameTitle}</td><td>${game.description}</td><td>${game.brand}
        </td><td>$${game.unitPrice}</td><td>${game.quantOfStock}</td><td>${game.manufacturer}</td>
        <td>${game.category.gameGenreName}</td></tr>`;

        htmlTableItem += "</tbody></table>";

        tableItem.innerHTML = htmlTableItem;
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Adds an item from the catalog array to the cart.
 * 
 * @param {number} addingItem The specified Game ID.
 */
function addToCart(addingItem) {
    try {
        cart.push(findItemById(addingItem));
        const gameName = findItemById(addingItem).gameTitle;
        showStatusMessage("alert alert-success", `Good choice, ${gameName} has been added to your cart!`);
    } catch (err) {
        console.log("Error type => " + err);
    }
}

/**
 * Removes an item from the catalog array from the cart.
 * 
 * @param {number} removingItem The specified Game ID.
 */
function removeFromCart(removingItem) {
    try {
        let gameName = "";
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].gameId === removingItem) {
                gameName += cart[i].gameTitle;
                cart.splice(i, 1);
                break;
            }
        }
        showStatusMessage("alert alert-danger", `Oh no, ${gameName} has been removed from your cart!`);
        viewCart();
    } catch (err) {
        console.log("Error type => " + err);
    }
}


/**
 * Searches all items from the catalog array that contains the string search input from the user. 
 * Then displays information about all searched items that have been found. If search did not find any
 * matching results, a message will be prompt (Uses .innerHTML to display HTML table).
 * 
 * @param {string} searchKeyword The search input from user.
 */
function searchByKeyword(searchKeyword) {
    try {
        document.getElementById("listOfItems").innerHTML = 0;

        searchKeyword = document.getElementById("textBox").value;

        const searchResult = document.getElementById("listOfItems");

        let htmlSearchResults = "<h2>Searched Result(s)</h2><table class='htmlTable'><thead><tr><th> " +
            "Game ID:</th><th>Game Title:</th><th>Creator(s):</th><th>Game Genre:</th><th></th><th></th> " +
            "</tr></thead><tbody>";
        
        let isFound = false;

        for (let i = 0; i < catalog.length; i++) {
            const game = catalog[i];
            if (searchKeyword === game.category.gameGenreName ||
                searchKeyword === game.description ||
                searchKeyword === game.gameTitle ||
                searchKeyword === game.brand) {
                htmlSearchResults += `<tr><td>${game.gameId}</td><td>${game.gameTitle}</td>
                        <td>${game.brand}</td><td>${game.category.gameGenreName}</td><td>
                        <button class='btn btn-info' onclick='showItemDetails(${game.gameId});
                        resetStatusMessage();'> View Details</button></td><td><button 
                        class='btn btn-success' onclick='addToCart(${game.gameId});'>Add To Cart</button>
                        </td></tr>`;
                isFound = true;
            }
        }
        htmlSearchResults += "</tbody></table>";

        if (!isFound) {
            showStatusMessage("alert alert-secondary", `No results found for: "${searchKeyword}". <br>
            Please try again.`);

            htmlSearchResults = "";
        }
        searchResult.innerHTML = htmlSearchResults;

    } catch (err) {
        console.log("Error type => " + err);
    }
}