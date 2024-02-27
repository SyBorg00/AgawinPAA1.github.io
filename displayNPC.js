function npcDisplay(id){
    var frame = document.getElementById("npc-display");
    var imageDisplay = document.getElementById("display-npc-img");
    var descDisplay = document.getElementById("display-npc-desc");
    var name = document.getElementById('npc-name');
  
   

    if((frame.style.display === 'none')){
        frame.style.display = 'flex';
        switch(id){
            case 'guide':
                name.textContent = "The Guide";
                imageDisplay.innerHTML = "<img src='NPC/guide.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "The very first NPC that you will encounter in your world. Provides useful tips to the players on their playthroughs,"
                + " as well as guiding the players on how to gain accompaniment to other NPCs as well. Best of all, he could also guide you on how to craft certain"
                + " items, as well as the requirements needed to do such process - provided that you give him the necessary materials. So if you are stuck in progress"
                + " then ask to him right way, as he will Guide you through your journey." ;
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
  
            case 'nurse':
                name.textContent = "The Nurse";
                imageDisplay.innerHTML = "<img src='NPC/nurse.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "A helpful npc that can provide a full-health recovery to the players, as well as removing any sort of ailments that the player"
                + " has acquired - provided that you have the money to provide such service. Will only move once your health points is much greater than it used to be, and"
                + " that the merchant must also be present within your world.";
                frame.style.background = "url('BG/hallow-bg.webp')";
                frame.style.backgroundPosition = "center";
    
                break;
    
    
            case 'merchant':
                name.textContent = "The Merchant";
                imageDisplay.innerHTML = "<img src='NPC/merchant.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "The first vendor NPC that the player will encounter. Sells stuffs that could be quite useful at the beginning of the player's journey."
                + " Of course that you would need money to provide service to the merchant. Provide a home to him, as well as having enough money in your pocket"
                + " and this NPC will move in to your town.";
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'mechanic':
                name.textContent = "The Mechanic";
                imageDisplay.innerHTML = "<img src='NPC/mechanic.webp' style='width: 45px; height: 55px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC that will provide you with electronic-related items that could make for some fun interaction with the world itself."
                + " Rescue her from the depths of the dungeon coven, and she will move in to your town - provided that you have built a home for her. If you are a fan"
                + " of elextronics, and want to make fun and interactable contraption to your liking, then this NPC is just for you.";
                frame.style.background = "url('BG/snow-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'dryad':
                name.textContent = "The Dryad";
                imageDisplay.innerHTML = "<img src='NPC/dryad.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC that sells various stuffs, as well as the levels of purity and evil present in your world. "
                + " Slay your ever-first boss, and this beauty of an NPC will move in to your town.";
                frame.style.background = "url('BG/jungle-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'golf':
                name.textContent = "The Golfer";
                imageDisplay.innerHTML = "<img src='NPC/golf.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "A vendor NPC, that will sell you golf related items - a way for you to enjoy yourself in this challenging times. Find him at"
                + " the desert underground, and he will move in to your town.";
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'tavern':
                name.textContent = "The Tavernkeep";
                imageDisplay.innerHTML = "<img src='NPC/tavern.webp' style='width: 40px; height: 60px; margin: 20px;  margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC, who came from a foregin land, find himself in the comforts of the Land of Terraria. Will sell you stuffs that can let you access a certian event."
                + " Can be found laying on random parts of the world after the defeat of the malevolant worm of the corruption or the demonic brain of the crimson."
                + " wake him up from his drunken state, and he will move in to your town."
                + " ";
                frame.style.background = "url('BG/hallow-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'arms-dealer':
                name.textContent = "The Arms Dealer";
                imageDisplay.innerHTML = "<img src='NPC/arms.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who will sell you gun-related items. Ranging from different types of ammos, down to many more guns to access. A perfect NPC"
                +" for any gun lovers. Just loot any type of gun from your playthrough, and he will certainly come to your town.";
                frame.style.background = "url('BG/desert-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'goblin':
                name.textContent = "The Goblin Thinkerer";
                imageDisplay.innerHTML = "<img src='NPC/goblin.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who will service you with the enhancement system; which allows you to enchance your chosen weapon to its fullest potential."
                + " Of course, the service is not for free, and the more exotic your weapon is, the more expensive his service will get. Defeat the Goblin Army first, and you"
                + " find him bound within the underground depths. Free him, and he might provide service to you in your town.";
                frame.style.background = "url('BG/cave-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'demo':
                name.textContent = "The Demolitionist";
                imageDisplay.innerHTML = "<img src='NPC/demo.webp' style='width: 43px; height: 50px; margin: 20px; margin-top: 50px; border-style: none' />"
                descDisplay.textContent = "A dwarf NPC who sells certain explosives to your liking. Whether it would be the tiniest of the grenade, down to the likeliness of TNT"
                +" he provides service to all of it. So if you are a fan of explosives, or you want to do a quick deconstruction, this NPC is just for you. Just own any explosives"
                +" and he might move in to your town.";
                frame.style.background = "url('BG/cave-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'zoologist':
                name.textContent = "The Zoologist";
                imageDisplay.innerHTML = "<img src='NPC/zoologist.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who loves to collect more informations about the many wonderful creatures of Terraria. This NPC will sell animal-related"
                + " items and vanities to your liking. She will more items the more creatures that you will discover in your journey. And speaking of discovery, make sure to"
                + " a certain amount of creature entries in your beastiary if you ever wanted her to move in to your town.";
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'angler':
                name.textContent = "The Angler";
                imageDisplay.innerHTML = "<img src='NPC/angler.webp' style='width: 30px; height: 50px; margin: 20px; margin-top: 45px; border-style: none' />"
                descDisplay.textContent = "An NPC, who can provide fishing related quest to players - where in exchange, he could give you with sorts of rewards. Can be found"
                + " laying dormant in either the sandy beach, or drifting across in the wide ocean surface. Wake him up, and he will move in to your hometown.";
                frame.style.background = "url('BG/ocean-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
            
    
            case 'stylist':
                name.textContent = "The Stylist";
                imageDisplay.innerHTML = "<img src='NPC/stylist.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "Ever wanted to have more access to different varities of hairstyles rather those found the character selection menu?"
                + " You also want to dye your hair with more olorful dyes? Then this NPC is just for you. Just rescue her in the depths of the spider nest, and she"
                + " will certainly move to your hometown.";
                frame.style.background = "url('BG/ocean-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'cloth':
                name.textContent = "The Clothier";
                imageDisplay.innerHTML = "<img src='NPC/clothier.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who sell you with varieties of vanity-related items that can help enchance your fashion taste. So if you are ever"
                + " a fan of making yourself look good and fancy, then make sure to rescue a certain NPC from the curse of the skeletal guradian, and he will certainly"
                + " mmove in to your hometown.";
                frame.style.background = "url('BG/cave-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'travel':
                name.textContent = "The Travelling Merchant";
                imageDisplay.innerHTML = "<img src='NPC/travel.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who has travelled to many different worlds just to sell you with various items, from aesthetically pleasing to"
                + " useful. Unlike other NPCs, he will not move to your hometown and will instead randomly appear at the dawn of the day, and deport at the beginning"
                + " of dusk. So make sure to buy what is necessary for him, or you might miss him completely and have to wait for his return.";
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'doctor':
                name.textContent = "The Witch Doctor";
                imageDisplay.innerHTML = "<img src='NPC/witch.webp' style='width: 50px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who will sell you with alchemy-related stuffs. He can sell more items if you defeat a certain plant boss in your world."
                + " Will only move in once a certain matriarch has been slain.";
                frame.style.background = "url('BG/jungle-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'paint':
                name.textContent = "The Painter";
                imageDisplay.innerHTML = "<img src='NPC/painter.webp' style='width: 45px; height: 55px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "Ever want to make your very build more colorful than ever? Want to add more pezzaz to your world? Then make sure to invite"
                + " this NPC and buy his painting tools. Make sure to have at least 8 NPCS present within your world, and he will certainly move in.";
                frame.style.background = "url('BG/hallow-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'party':
                name.textContent = "The Party Girl";
                imageDisplay.innerHTML = "<img src='NPC/party.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "The master of all that is festive. This NPC will sell festive novelty and furniture to spice up your party time with"
                + " the NPCs. Make sure to have at least 14 NPCs, and a vacant home of course, and she will certainly move in to your hometown.";
                frame.style.background = "url('BG/hallow-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'pirate':
                name.textContent = "The Pirate";
                imageDisplay.innerHTML = "<img src='NPC/pirate.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who have sailed from the seven seas, here to sell you with pirate related items and furnitures. If you defeat"
                + " a certain pirate invasion event, then this NPC will definitely swing by to your hometown. ";
                frame.style.background = "url('BG/ocean-bg.png')";
                frame.style.backgroundPosition = "center";
                
                break;
    
    
            case 'steam':
                name.textContent = "The Steampunker";
                imageDisplay.innerHTML = "<img src='NPC/steam.webp' style='width: 30px; height: 50px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who has a knack of steampunk-related items and gizmos that can provide use for you in your journey - provided"
                + " that you pay her with enough money of course. Just make sure to slay at least one of the mechanical trios, and she will arrive to your hometown with a certainty.";
                frame.style.background = "url('BG/desert-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'dye':
                name.textContent = "The Dye Trader";
                imageDisplay.innerHTML = "<img src='NPC/dye.webp' style='width: 30px; height: 50px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "You ever want to add more variety of colors to your playable character? Then this NPC is just for you. You can buy"
                + " dye ingredients to him at a reasonable cost, as well as a crafting station that can allow you to create your own dyes. Additionally, if you"
                + " give him a certain exotic plant that you happen to collect in your exploration, then he will give you the finest of dyes which cannot be obtained"
                + " via normal means. Just make sure that you are carrying any dye ingredients and he will certainly move in to your town.";
                
                frame.style.background = "url('BG/desert-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'truffle':
                name.textContent = "The Truffle";
                imageDisplay.innerHTML = "<img src='NPC/truffle.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who will sell you with mushroom related items and furniture. He also sells a certain crafting station that allows"
                + " you to create a cetain bar that allows that could be of great help for any ranger focused characters. Provide a home for in the exotic mushroom"
                + " biome, and he will certainly move in to your world.";
                frame.style.background = "url('BG/mushroom-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'wizard':
                name.textContent = "The Wizard";
                imageDisplay.innerHTML = "<img src='NPC/wizard.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who can help any mage-like player characters in their journey by selling magic-related items. Make sure to rescue"
                + " him inside the caverns at the start of the hardmode, and he will certainly move in to your hometown.";
                frame.style.background = "url('BG/hallow-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'cyborg':
                name.textContent = "The Cyborg";
                imageDisplay.innerHTML = "<img src='NPC/cyborg.webp' style='width: 32px; height: 50px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "An NPC who will sell the players with unique weapons and ammos to your liking - from nanite bullets, to a variety of rocket ammos."
                + "Make sure to slay a certain plant boss first before he could be of availability in your world.";
                frame.style.background = "url('BG/snow-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
            case 'tax':
                name.textContent = "The Tax Collector";
                imageDisplay.innerHTML = "<img src='NPC/tax.webp' style='width: 32px; height: 50px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "In every business of your hometown, there will always be those who would need to collect the taxes, and this NPC will do such"
                + " services. The mre NPCs present in your world, the more taxes that he can accumulate. A perfect way to earn money for your playthrough. Make sure to purify"
                + " a certain entity located at the Underworld, and he will move in to your hometown for sure.";
                frame.style.background = "url('BG/snow-bg.png')";
                frame.style.backgroundPosition = "center";
                break;    
    
            case 'princess':
                name.textContent = "The Princess";
                imageDisplay.innerHTML = "<img src='NPC/princess.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "The young sovereign NPC that ruled over Terraria with kindness at heart. Will sell varieties of stuffs at the player. Ranging from"
                + " furnitures, down to rare items that can be hard to obtain. Make sure that all NPCs are present, and she will then move in to your hometown.";
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'santa':
                name.textContent = "Santa Claus";
                imageDisplay.innerHTML = "<img src='NPC/santa.webp' style='width: 40px; height: 60px; margin: 20px; margin-top: 40px; border-style: none' />"
                descDisplay.textContent = "In every world, there will always be a representative of Christmas itself, and what better way to represent this"
                + " moment of festivity with none other than Santa Claus himself! He can provide the players with a bunch of christmas related items that can"
                + " help liven up that Christmas spirit in your town. This NPC will only be available at the month of December.";
                frame.style.background = "url('BG/snow-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
        }
  
    }
    else{
        frame.style.display = 'none';
        name.textContent = "Select an NPC Icon";
    }
    
}
