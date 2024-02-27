function bossDisplay(id){
    
    var frame = document.getElementById('boss-display');
    var imageDisplay = document.getElementById("display-img");
    var descDisplay = document.getElementById("display-desc");
    var name = document.getElementById('boss-name');

    if(frame.style.display === 'none'){
        frame.style.display = 'flex';
        switch(id){
            case 'slime':
                name.textContent = "Boss Name: King Slime";
                imageDisplay.innerHTML = "<img src='Boss/slime.webp' style='width: 250px; height: 250px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "King of all things that is slimy and goopy to say at least. Taking the appearance of a gellatenous creature"
                +" with a crown as fit for a king, and surprisingly, a ninja inside such creature. Said to spawn occassionally when you have slain a"
                +" certain amount of his followers during a certain slime rain event, or when you travel far enough to the near edge of the world, or"
                +" when you use a certain spawning item at any moment of the game. This boss will perform a jumping attack; where"
                +" in the third jump, he will leap in such great distance, but would leave him easy to dodge. While trying to tear through him, this"
                +" creature will spawn his minions that can cause hindrance in your progress. And to make this slimy creature unique, he can occasionally"
                +" teleport to your exact location to catch up with you. As you will shred through him, he will get smaller, but becomes more agile than"
                + "ever, defeat him and you might be rewarded with something great in return.";
                frame.style.background = "url('BG/forest-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
                
            case 'eye':
                name.textContent = "Boss Name: Eye of Cthulhu";
                imageDisplay.innerHTML = "<img src='Boss/eye.webp' style='width: 250px; height: 300px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "An ocular menace that only lurks at the darkest of nights, watching the player carefully. Said to have been the"
                +" missing eye of a certain eldtrich being, now wandering in the realms of Terraria. This boss will occassionally spawn if it sees that you"
                +" are ready enough, or when you use a certain spawning item during nighttime. This boss will occassionally hover above the player while summoning"
                +" his miniature eyeball minions, and will then perform to tackle the player thrice in a row. Once you remove a chunk out him, he will then unleash"
                + " his ferocious second face. No longer will this creature spawn minions, but will now have a greater rush attack distance in exchange. While playing"
                +" on a certain mode, he will an ability to greatly dash at the player at insane speed, and will do it more often the lower his health goes. Defeat him"
                +" and you might be rewarded greatly.";
                frame.style.background = "url('BG/forest-night.png')";
                frame.style.backgroundPosition = "center";
                break;
            
            case 'eat':
                name.textContent = "Boss Name: Eater of Worlds";
                imageDisplay.innerHTML = "<img src='Boss/eat.webp' style='width: 900px; height: 105px; margin: 20px; border-style: none; margin-top: 100px;' />"
                descDisplay.textContent = "A giant collosal worm that lurks beneath the depths of the corrupted chasms, devouring the world slowly as it speaks"
                +" destroy three shadow orbs beneath the corrupted chasms, or use a certain summoning item, and this entity will take notice of you. This will"
                +" perform to rush at the player, while at the same, entrapping them with their long segmented body. In a certain mode, this individual segments"
                +" can fire volatile projectiles at you. And speaking of individual segments, attempting to focus hitting on a few segment would result in the boss"
                +" to split itself, making the fight more difficult to challenge through. Defeat him, and your progress over this game will go smoothly. ";
                frame.style.background = "url('BG/corruption-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'brain':
                name.textContent = "Boss Name: Brain of Cthulhu";
                imageDisplay.innerHTML = "<img src='Boss/brain.webp' style='width: 250px; height: 250px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "An enormous flying brain that lurks within the insides of the bloody crimson. Either break the three hearts that lies within"
                + " the bloody cave of the crimson underground, or use a certain summoning item and your battle with this demonic entity will begin. This boss will start off"
                + " an unhittable, as you would have to first kill his attendant creepers in the process. In this stage, he will teleport randomly, while at the same time"
                + ", commanding his minions to attack the player directly. Once you have gotten rid of his minion, prepare to slay this demon as quick as possible, as he will"
                + " start to go rampage, and directly rushing towards you. This boss will teleport in a short random position in an attempt to rush down at you. While playing"
                + " on a certain mode, he will cast four illusions of himself that becomes more visible as he gets put down, as an attempt to confuse the player to which is which"
                + ". Defeat him and your pogression over your journey will go smoothly. ";
                frame.style.background = "url('BG/crimson-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'bee':
                name.textContent = "Boss Name: Queen Bee";
                imageDisplay.innerHTML = "<img src='Boss/bee.webp' style='width: 275px; height: 250px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "The giant matriarch of the jungle hives. Use a certain summoning item, or destroy a precious item located at the depths of the hive"
                + " to enrage this giant of an insect. This boss will perform either of the three attacks: Staying in the air to spawn miniature bee minions, hovering over the"
                + " player while shooting deadly stinging projectiles at you, or lock in with the player's horizontal position and unleash a deadly dash. As the fight progresses,"
                + " the boss's attack frequently becomes more aggressive than ever. Defeat her, and might find valuable loot to aid you in your journey.";
                frame.style.background = "url('BG/jungle-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'skele':
                name.textContent = "Boss Name: Skeletron";
                imageDisplay.innerHTML = "<img src='Boss/skele.webp' style='width: 300px; height: 325px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "The cursed skeletal guardian of the old dungeon castle. Can only be fought by talking to a certain entity, located at the dungeon entrance"
                + " and during on nighttime, and free him of his curse. Only then you will be be able to fight this beast. This boss perform to attack the player with both of his arms"
                + " while hovering above said player. After a certain time, he will perform to spin his skull and rush down at you, dealing massive damage in the process. Destroying one"
                + " cause the boss to attack you with curving skull projectiles when playing at a certain mode. Whatever you do, you must slay him before the dawn of day, as he will go"
                + " on a rampage and effectively kill you with a single blow. Defeat him, and might gain access to the underground dungeon, and get valuable loots. ";
                frame.style.background = "url('BG/forest-night.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'deer':
                name.textContent = "Boss Name: Deerclops";
                imageDisplay.innerHTML = "<img src='Boss/deer.webp' style='width: 250px; height: 300px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "A one eyed monstrosity that lurks in the coldest of the snow. Originated from a foreign land, now found itself in the realms"
                + " of Terraria. Wait until midnight has strucked while on a blizzard, or use a certain summoning item to fight this chilly abomination: The boss will perform"
                + " Four to Five Attacks: Unleash a pillar of ice directly at the player, throw numerous chunks of snowy debrees at the player, Roar at certain intervals, which"
                + " will slow down any player in a specific radius, and remain still and attack the player with shadowy hands. While on a certain mode, he will occassionally"
                + " spawn shadow hands that predicts the players movement, which will cause hindrance to the player in their progress. Defeat him, and you might get some valuable"
                +" loot.";
                frame.style.background = "url('BG/snow-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'wall':
                name.textContent = "Boss Name: Wall of Flesh";
                imageDisplay.innerHTML = "<img src='Boss/wall.webp' style='width: 275px; height: 400px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "A massive abominable wall made of the flesh of those that have burned in the underworld. The very master and core of the world of Terraria."
                + " Sacrifice a certain townsfalk of yours with a voodoo doll, and your battle with this abomination will ensue. This boss will only move at one directtion. Forcing the"
                + " player to go to a single path only. Will occassionally fire lasers at you, while at the same time, will try to reach out to the player with his Hungry tentacles that"
                + " will constantly grow back when playing on a certain mode. At the same time, they will also spawn worm-like creatures to attack the player. As the battle draws near to its end, the boss will fire their lasers at a much intense"
                + " pace, and when on a certain mode, will move faster and faster; forcing the player to slay this entity as quick as possible. Defeat this entity, and a new journey will begin for you.";
                frame.style.background = "url('BG/underworld-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'queen':
                name.textContent = "Boss Name: Queen Slime";
                imageDisplay.innerHTML = "<img src='Boss/queen.png' style='width: 250px; height: 250px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "The sovereign of all that is slimy and all that is jiggly, that dwells in the lands of the Hallow. Use a certain summoning item to challenge to colorful"
                +" yet deadly gellatenous foe. Having a similar pattern to the to the king of slimes, with an addition of new attacks, and slightly faster speed - you will be familiarized"
                + " with the queen's moveset. Once she reach a certain health, she will gain the ability of flight and will proceed to unleash a flurry of bouncy projectiles at the players."
                + " Defeat her, and might gain some tools that could be useful in your journey.";
                frame.style.background = "url('BG/hallow-bg.webp')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'destroy':
                name.textContent = "Boss Name: The Destroyer";
                imageDisplay.innerHTML = "<img src='Boss/destroy.webp' style='width: 900px; height: 105px; margin: 20px; margin-left: 20px; border-style: none; margin-top: 100px;' />"
                descDisplay.textContent = "You feel deep vibrations from below... A mechanical worm, set out to saught destruction in the lands of Terraria. This boss, like with the rest of"
                + " the mechanical trios will have a chance to appear at nighttime at the start of hardmode. One could also use a certain summoning item to forcefully fight him. Attacks similarly"
                + " to that of the Eater of worlds, but no longer has the capabilities to split apart. Instead, it is now exchanged by sppawing drone minions to aid him in battle. Careful to not"
                + " get hit by its head as it can deliver a fatal blow. Defeat him, and you might gain some useful tools to aid you in the next battle.";
                frame.style.background = "url('BG/forest-night.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'prime':
                name.textContent = "Boss Name: Skeletron Prime";
                imageDisplay.innerHTML = "<img src='Boss/skeleprime.webp' style='width: 250px; height: 250px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "The air is getting colder around you... A mechanicalized skeletal creature, harboring the essence of fear itself. Can have a chance to"
                + " spawn randomly at nighttime at the start of hardmode, or could spawned using a certain summoning item. Same moves as ones from skeletron, minus the skull projectile"
                + " attack, but now comes in with extra two arms, that will make the fight more challenging. Defeat him, and you might get some useful tools to aid you in the next battle.";
                frame.style.background = "url('BG/forest-night.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'twin':
                name.textContent = "Boss Name: The Twins";
                
                imageDisplay.innerHTML = "<img src='Boss/twin.webp' style='width: 300px; height: 350px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "This is going to be a terrile night... A pair of mechanicalized eyes that can give any fighters a hard time to deal with. Can spawn"
                + " randomly at nighttime at hardmode, or can be spawned via a certain summoning item. Much like the Eye of Cthulhu itself, minus the minion spawning, but now"
                + " with ranged projectiles, and the coordinated attacks between the two individual entities. Bring either one them to half their health, and they will unleash"
                + " their terrifying second phase, with one of them occassionally firing a barrage of leaser beams at the player, and other one spewing out blazing hot cursed flames"
                + " and a very lengthy rush-down attack. Defeat them, along with the other three boss, and your world would be in for more surprises.";
                frame.style.background = "url('BG/forest-night.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'plant':
                name.textContent = "Boss Name: Plantera";
                
                imageDisplay.innerHTML = "<img src='Boss/plant.webp' style='width: 300px; height: 300px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "A giant flower of a monstrosity that dwells within the jungle depths. Break a certain flower bulb at the jungle depths after"
                + " defeating the mechanical trios and you will then face off with the floral fury of the jungle. Will occassionally fire deadly projectiles at you in the"
                + " beginning of the battle, once you have wilted half of its health, it will then enter a rampaging second state, where it will constantly rush down at the"
                + " the player with the aid of miniature plantera tentacles surrounding the monstrosity, making it hard to fight it close combats. Defeat her, and might gain"
                + " an item needed to access the gates of the jungle temple.";
                frame.style.background = "url('BG/jungle-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'golem':
                name.textContent = "Boss Name: Golem";
                
                imageDisplay.innerHTML = "<img src='Boss/golem.webp' style='width: 315px; height: 325px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "A stone-faced ritualistic idol, worshipped by the civilization of the Lihzahrd tribe. Reach to the end of the temples and"
                + " insert a certain battery at the shrine, and you will face of against this Lihzahrdian contraption. The boss will attempt to hit the player with his"
                + " heavy hitting fist, while occassionally firing a richoceting fireball projectile to hinder the player in their movements. At the same time, "
                + " he will jump across the arena as his way of movement and as a way to crush the player. As you wittle his health down,"
                + " the entity will then perform a consecutive laser beam attacks at the player while continuing his onslaught. Once you bring his health to zero, he will"
                + " then detach his head, and will now hover towards above the player, while occassionally firing laser beams at them. At the same time, the body will continue"
                + " to hop across the battlefield to crush the player, in conjunction to his floating head. Defeat him, and some certain visitors might be waiting for you"
                + " the dungeon entrance.";
                frame.style.background = "url('BG/lihzahrd-bg.jpg')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'duke':
                name.textContent = "Boss Name: Duke Fishron";
                
                imageDisplay.innerHTML = "<img src='Boss/duke.gif' style='width: 400px; height: 300px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "A mutant pig-dragon hybrid that lurks beneath the ocean depths. Fish around the ocean while using a certain bait, and you might"
                + " get a very unexpected catch in return. The boss has a consistent pattern of charging the players, unleashing a barrage of homing bubbles, charging once"
                + " again, and spawning fishnados across the battelfied. Once you have reduced it to a certain healthpoint, he will then unleash a second phase, where he"
                + " will do the same attack as last time, but with a different performance. When you wittled his health down while playing on a certain mode, he will then"
                + " unleash a third phase, where he would engulf the arena with dark mist, while at the same time, charging towards the player with specific intervals."
                + " defeat him, and might gain some valuable loot that can help you immensely.";
                frame.style.background = "url('BG/ocean-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'empress':
                name.textContent = "Boss Name: Empress of Light";
                
                imageDisplay.innerHTML = "<img src='Boss/empress.webp' style='width: 500px; height: 300px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "The iridescent fae goddess, responsible for everything glittering and shining in the lands of the Hallow. Slay one of her"
                + " butterflies located at the Hallow surface, and rightfully engage battle with this ever-dazzling entity. The boss will unleash an array of colorful"
                + " yet deadly projectiles at the player, so do not get distracted by its dazzling display. Ranging from homing prismatic bolts, rays of sun dances, a dazzling dash, down to"
                + " swords of light, the boss will make sure that to keep the player focus on battle. Once she reaches at a certain health, she will then unleash an ever-dazzling"
                + " second phase, with the same attacks as before, but now with different patterns and intervals. And best you be prepared if attempt to fight it at dawn of day"
                + " as the boss will encoat herself with the light of the sun, making all of her attacks deal a lethal one-shot blow to the player. Defeat her, and you might gain"
                + " some useful loot to aid you in your journey.";
                frame.style.background = "url('BG/hallow-night-bg.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'cult':
                name.textContent = "Boss Name: Lunatic Cultist";
                
                imageDisplay.innerHTML = "<img src='Boss/cultist.webp' style='width: 75px; height: 100px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "A fanatical leader at the dungeon coven, always worshipping to the great god of the moon. Slay all of those certain guest at the dungeon"
                + " entrance, and face off agaianst the maniacal leader of the cult. This boss will attack the player with different projectile attacks: ranging from homing fire projectiles"
                + ", an ice projectile that fires ice shards in a star-like direction, a lighting bolt attack that will track down the player's location, a spread of light attacks, down"
                + " to spawning stationary dark balls that will explode into smaller projectiles in a cross-like direction. The cultist will also then unleash five clones of himself and"
                + " perform a summoning ritual where, if the player do fail to interrupt, will summon a phantom dragon to aid the cultist in battle - and if failed to be interrupted again,"
                + " the cultist will summon a projection of a certain boss that ram across th palyer in a horizontal direction. Defeat him and you will trigger the event that will lead to the"
                + " finale of your journey.";
                frame.style.background = "url('BG/forest-void.png')";
                frame.style.backgroundPosition = "center";
                break;


            case 'pillar':
                name.textContent = "Boss Name: The Lunar Pillars";
                
                imageDisplay.innerHTML = "<img src='Boss/solar.webp' style='width: 300px; height: 400px; margin: 20px; border-style: none' />"
                +"<img src='Boss/stardust.webp' style='width: 300px; height: 400px; margin: 20px; border-style: none' />"
                +"<img src='Boss/vortex.webp' style='width: 300px; height: 400px; margin: 20px; border-style: none' />"
                +"<img src='Boss/nebula.webp' style='width: 300px; height: 400px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "Four celestial that that towers throughout the skies of Terraria, slowly invading the world as we speak. These pillars comes in with four"
                + " different variants, with each having their own unique enemies to defend the pillars from being destroyed. Destroy a pillar would reward the players with a material"
                + " that could be truly useful for their respective classes. Destroy all four of them, and soon you will be meeting the impending doom itself.";
                frame.style.background = "url('BG/forest-void.png')";
                frame.style.backgroundPosition = "center";
                break;
    
    
            case 'lord':
                name.textContent = "Boss Name: Moon Lord";
                
                imageDisplay.innerHTML = "<img src='Boss/lord.gif' style='width: 1200px; height: 900px; margin: 20px; border-style: none' />"
                descDisplay.textContent = "Impending doom approaches... The final boss of Terraria. The very diety of the moon itself. Defeat the four pillars or use a certain summoning item"
                + " and slay this god-like abomination once and for all. The boss has three eyes located in both his hands, and in his head, that must be eliminated to open the heart and truly"
                + " harm this entity for good. Be careful as each of the eyes will unleash variety of attacks asynchronously. Ranging from firing phantasmal bolts with a near-perfect accuracy;"
                + " spawning phantasmal spheres that can hinder movement options to the player, and can often be used a surprise attack if one is not paying attention; spawning a barrage of"
                + " homing phantasmal eyes towards the player, and finally, a phantasmal deathray that deals massive amount of damage and will cover almost half of the areana. When playing on"
                + " a certain mode, instead of the eyes being eliminated as they reach zero, they would instead try to intervene with the players process by performing the same attacks just with"
                + " less intensity - all while they are invulnerable to damage. At the same time, each of the eyes have their own miniature phantasmal deathray, which can make the fight more"
                + " challenging as the battle progresses. Defeat him, and congratulations, you have now beaten the game.";
                frame.style.background = "url('BG/forest-void.png')";
                frame.style.backgroundPosition = "center";
                break;
        }
    }
    else{
        frame.style.display = 'none';
        name.textContent = "Select a Boss";
    }

    
    

}