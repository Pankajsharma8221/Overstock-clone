 let array = [
        {
            avtar:"https://ak1.ostkcdn.com/images/products/is/images/direct/da8e341a52b0b4168f5531527177130eec875ca8/Carson-Carrington-Odhult-Tufted-Contemporary-Tuxedo-Sofa.jpg?imWidth=320&impolicy=medium",
            name:"Sofas & Coaches",
        },
        {
            avtar:"https://ak1.ostkcdn.com/images/products/22341232/Candace-Mid-Century-Modern-Fabric-Arm-Chair-and-Loveseat-Set-by-Christopher-Knight-Home-087d71b4-c7d8-4352-b7f5-ac19c5a60ce2_1000.jpg?imWidth=320&impolicy=medium",
            name:"Living Room & Sets",
        },
        {
            avtar:"https://ak1.ostkcdn.com/images/products/24151999/Welles-Mid-Century-2-Piece-Chaise-Sectional-Sofa-Set-With-Tufted-by-Christopher-Knight-Home-62f39e28-0a20-4594-8815-be5fb283c2b1_1000.jpg?imWidth=320&impolicy=medium",
            name:"Sectional Sofas",
        },
        {
            avtar:"https://ak1.ostkcdn.com/images/products/is/images/direct/cc3e23e59b0b7275ff6cb732d7c2d7f6f18df9e9/The-Grey-Barn-70%22-Rustic-Fireplace-TV-Stand-Console.jpg?imWidth=320&impolicy=medium",
            name:"TV Stands & Entertainment Center",
        },
        {
            avtar:"https://ak1.ostkcdn.com/images/products/is/images/direct/2c822047c6482dd072478dac0a517f7fd4ba74f2/Berwick-Metal-and-Wood-Nesting-Basket-Tables.jpg?imWidth=320&impolicy=medium",
            name:"Console, Coffee & Ends Tables",
        },
        {
            avtar:"https://ak1.ostkcdn.com/images/products/is/images/direct/f7e4607f8a2129ab4b1ab22cd1769a61b681c3db/Abbyson-Holloway-Mid-century-Top-Grain-Leather-Pushback-Recliner.jpg?imWidth=320&impolicy=medium",
            name:"Recliner Chairs & Rocking Recliners",
        },
    ];

    array.forEach(function(ele){
        var box = document.createElement("div");
        // box.setAttribute("id","box1")
       

        var image = document.createElement("img")
        image.setAttribute("src",ele.avtar)

        var name = document.createElement("p")
        name.innerText=ele.name;

        box.append(image,name)
        document.querySelector("#ycontainer").append(box);

    })

    let array2 = [
        {
            avtar2:"https://ak1.ostkcdn.com/images/products/is/images/direct/dfd768dd6f5ec2fc877af8695096a5ff4e9942e4/Copper-Grove-Dhi-Upholstered-Armchair.jpg?imWidth=320&impolicy=medium",
            name2:"Living Room Chair",
        },
        {
            avtar2:"https://ak1.ostkcdn.com/images/products/14741699/Christopher-Knight-Home-Yuny-Round-Fabric-Ottoman-Pouf-43157217-9e91-49f5-9440-a293f5a47a18_1000.jpg?imWidth=320&impolicy=medium",
            name2:"Ottomans & Storage Ottpmans",
        },
        {
            avtar2:"https://ak1.ostkcdn.com/images/products/is/images/direct/a32ab49e9155e1abe7a5903331149853a3e02c18/Carson-Carrington-Hedeby-Upholstered-Fabric-Loveseat.jpg?imWidth=320&impolicy=medium",
            name2:"LoveSeats",
        },
        {
            avtar2:"https://ak1.ostkcdn.com/images/products/is/images/direct/0485073b17812f0a60e7686583f28e805f0aeac8/Ramses-Modern-Grey-Bookcase-Display-Cabinet.jpg?imWidth=320&impolicy=medium",
            name2:"Bookshelves & Bookcases",
        },
        {
            avtar2:"https://ak1.ostkcdn.com/images/products/is/images/direct/b6158f17126c52bc350f84c94db20fa716543fce/Abbyson-Carson-Mid-century-Tufted-Convertible-Futon-Sleeper-Sofa.jpg?imWidth=320&impolicy=medium",
            name2:"Futons",
        },
        {
            avtar2:"https://ak1.ostkcdn.com/images/products/is/images/direct/bf33b0970649fedab76cbe0913b1911ddc4ea7f6/Morgan-Creek-Antique-White-Storage-Hall-Bench.jpg?imWidth=320&impolicy=medium",
            name2:"Benches & Settees",
        },
    ];

    array2.forEach(function(ele){
        var box = document.createElement("div");
        // box.setAttribute("id","box1")
       

        var image2 = document.createElement("img")
        image2.setAttribute("src",ele.avtar2)

        var name2 = document.createElement("p")
        name2.innerText=ele.name2;

        box.append(image2,name2)
        document.querySelector("#ycontainer2").append(box);
    })

    let array3 = [
        {
            avtar3:"https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD1_ModernandContemporaryLivingRoomFurniture.jpg?imWidth=320&impolicy=medium",
            name3:"Modern & Contemporary Living Room Furniture",
        },
        {
            avtar3:"https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD2_RusticLivingRoomFurniture.jpg?imWidth=320&impolicy=medium",
            name3:"Rustic Living Room Furniture",
        },
        {
            avtar3:"https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD3_FarmhouseLivingRoomFurniture.jpg?imWidth=320&impolicy=medium",
            name3:"Farmhouse Living Room Furniture",
        },
        {
            avtar3:"https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD4_TraditionalLivingRoomFurniture.jpg?imWidth=320&impolicy=medium",
            name3:"Traditional Living Room Furniture",
        },
        {
            avtar3:"https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD5_MidCenturyModernLivingRoomFurniture.jpg?imWidth=320&impolicy=medium",
            name3:"Mid-Century Modern Living Room Furniture",
        },
        {
            avtar3:"https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD6_NauticalandCoastalLivingRoomFurniture.jpg?imWidth=320&impolicy=medium",
            name3:"Nautical & Coastal Living Room Furniture",
        },
    ];

    array3.forEach(function(ele){
        var box = document.createElement("div");
        // box.setAttribute("id","box1")
       

        var image3 = document.createElement("img")
        image3.setAttribute("src",ele.avtar3)

        var name3 = document.createElement("p")
        name3.innerText=ele.name3;

        box.append(image3,name3)
        document.querySelector("#ycontainer3").append(box);
    })


    let array4 = [
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/61fde5d2873c660fa58ab20c954084f57c92bac8/Glitzhome-iron--Pine-19-inch-Farmhouse-Storage-End-Table-%28Set-of-2%29.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/27ea8525802c460d8ae1dbd42a7f2debe3b922bd/COZAYH-2-Piece-Coffee-Table-Set.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.3",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/e62c5f858340a249a2da1ee50b872dc496393358/Kaylee-Spindle-Chair-in-Fabric-with-White-Frame.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.2",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/08b80a67acf1c5ff748b98e4c070d2f09c789764/Carson-Carrington-Telsiai-Triangle-Wood-Coffee-Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.1",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/4e423a6c233bd58a6d0b299a0eef8d84d2309915/Athens-Contemporary-Wood-Shelf-Side-Table-in-Black-Finish.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/99409e2a1b7199dc06eae28d3957b282eb136145/Somette-Tucson-Full-Size-Futon-Set-in-Rustic-Walnut-Finish-with-Suede-Mattress.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/0708f75c9e74e04c740cebda921185eaa91d3ebf/Upholstered-Tufted-Storage-Bench.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.0",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/eb3fbf0627b5ba8a73db004039ac20d24fdfa484/Carbon-Loft-Kenyon-Round-Metal-Wrap-Side-Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/cf2a6a503b5f4204ee025bca374a6d5ea9817153/Carson-Carrington-Karkkila-Mid-century-Arm-Chair.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.2",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/e90b97894ed9e636f3bae421eb653a11e86c8a77/COZAYH%C2%A0Rustic%C2%A0Farmhouse%C2%A0Cottagecore%C2%A0Coffee%C2%A0Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.9",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/61fde5d2873c660fa58ab20c954084f57c92bac8/Glitzhome-iron--Pine-19-inch-Farmhouse-Storage-End-Table-%28Set-of-2%29.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.9",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/a9beefb850274619d8c555f7ce639c5328534308/12-Shelves-Ladder-Bookshelf%2C-Industrial-Corner-Bookshelf.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/daa696840a398b588c35962c4c43f4b0fb1bae36/Barnwood-End-Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.6",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/5660fe85d771ae78e9418e8d18421c17365fc26f/Rustic-Farmhouse-Tray-Top-End-Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.8",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/d58f2db7fc55242c807805d17849da5c1f3f42c0/Kate-and-Laurel-Celia-Round-Metal-Foldable-Tray-Accent-Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/3a0943598bb5ae0338177823a7ac455e5b0c0a1d/Nantucket-Chair-Side-Table-with-Charging-Station-in-White.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.7",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/47c9ae93df558cc6a7214693e20c3b81a9dd4523/Futzca-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise%2C-Modern-Linen-Fabric-L-Shaped-Couch-for-Small-Space.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "2.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/b5d5a65eb6dd9de3411472ca72d2529047e09fa7/Silver-Orchid-Murray-Velvet-Upholstered-Accent-Chair.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.0",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/2267ca702950c3c26e275e1a0638bb3b58173e20/Glitzhome-30%22H-Mid-Century-Modern-PU-Leather-Accent-Armchair-with-Rubberwood-Frame.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/42ded2fa37088e50fde448e03a87c57c851a296b/Delicia-3-Piece-Living-Room-Set-with-Golden-Legs.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.1",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/1d855dd3a0f00089f211bb43c8d511b1239ed82d/Middlebrook-30-inch-Rustic-Barn-Door-Accent-Cabinet.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.8",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/09b786c3dcc47edf8b7843843e3d9dc54d335e6f/Copper-Grove-Perreux-Linen-Reversible-Sleeper-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/f51fce65824a5d8e9f6149fe71e3267f559bd3e1/HomePop-Draper-Large-Decorative-Bench-with-Button-Tufting---Light-Brown-Faux-Leather.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "2.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/14fa9d616f3c565013c1aef61698bc0ba53620c1/Simple-Living-Antique-White-4-tiered-X-Shelf.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.7",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/b08e53c50d7978abf463e3685b0ccbd3011ddf16/Luxe-Combo-Console-Table.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "2.6",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/5b06e61f6b2029ae7c7ce1f3eaef8111d49aadbe/AANNY-Designs-Lychee-Knitted-Cotton-Round-Pouf-Ottoman.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "3.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
        {
            images: "https://ak1.ostkcdn.com/images/products/is/images/direct/094438a4795e6f2d273c9b756ae77a45b09f8d17/Ashlyn-Reversible-Sleeper-Sofa-with-Storage-Chaise.jpg?imwidth=480&impolicy=medium",
            name: "Sale Starts at INR 32865.83",
            rating: "4.5",
            des: "Kaylee Spindle chair in fabric with white frame",
        },
    ];

    array4.forEach((ele)=>{
        let box = document.createElement("div");

        let image = document.createElement("img")
        image.setAttribute("src",ele.images);

        let name = document.createElement("h4")
        name.innerText=ele.name;
        name.style.color="red"

        rat = document.createElement("p")
        rat.innerText=ele.rating;

        let des = document.createElement("p")
        des.innerText=ele.des;

        box.append(image,name,rat,des)
        document.querySelector("#ycontainer5").append(box)

    })