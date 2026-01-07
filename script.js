class Pokemon{
   constructor(id, name, type, moves, hp, weak, strong, img){
       this.id = id;
       this.name = name;
       this.type = type;
       this.moves = moves;
       this.hp = hp;
       this.img = img
       this.weak = weak
       this.strong = strong

   }


   attack(move, target){
       console.log(`${this.name} has attacked ${target.name}`)
       let dmg = move.dmg
       if(target.weak.includes(move.type)){
           console.log(`Weak to ${move.type}`)
           dmg *= 1.8
       }else if(target.strong.includes(move.type)){
           console.log(`Strong to ${move.type}`)
           dmg *= 0.7
       }
       target.receive_dmg(dmg)
   }
   receive_dmg(dmg){
       if(dmg >= this.hp){
           this.hp = 0
           console.log('Target has fainted')
       }else{
       this.hp -= dmg
       }
   }

   render_pkmn(){
    console.log('rendering pokemon')

    this.element = document.createElement('div')
    this.element.className = 'pk-card'
// title
    this.title = document.createElement('h4')
    this.title.id = 'pk-title'
    this.title.textContent = this.name

    //pokemon pics
    this.picture = document.createElement('img')
    this.picture.id = 'pic'
    this.picture.src = this.img

    // Moves grid
    this.moves_grid = document.createElement('div')
    this.moves_grid.id = 'moves_grid'
    
    // Iterating moves list
    for(let i = 0; i <= this.moves.lengths -1; i++){
        console.log('hi')
        console.log(this.moves[i])

        let x = document.createElement('div')
        x.id = 'move'  
        x.textContent = `${this.moves [i].name}`
        this.moves_grid.appendChild(x)  
    }


    // Appending components to card
    document.getElementById('pk-holder').appendChild(this.element)
    this.element.appendChild(this.title) 
    this.element.appendChild(this.picture)
    this.element.appendChild(this.moves_grid)

   }
}


class Move{
   constructor(name, dmg, type, pp){
       this.name = name;
       this.name = dmg;
       this.type = type;
       this.pp = pp;
   }


   use(){
       this.pp -= 3;
   }
}
tndr_shck = new Move('Thunder Shock', 30, 'electric', 10)
tack = new Move('Tackle', 10, 'normal', 20)
wtr_gn = new Move('Water Gun', 25, 'water', 15)


pikachu = new Pokemon(1, 'Pikachu', 'electric', [tack, tndr_shck], 23, ["Ground", "Rock"], ["Water", "Fly"],'https://www.yourdecoration.com/cdn/shop/files/gbeye-fp4716-pokemon-pikachu-neon-poster-61x91-5cm_0f5303a2-3438-4132-ad41-955881014641.jpg?v=1760462481.jpg')
squirtle = new Pokemon(2, 'Squirtle', 'water', [tack, wtr_gn], 30, ["Electric", "Grass"], ["Fire", "Rock", "Ground"], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwqCoLcu-lHdv19Tn7RaOIKtiZN8VmbVPjcgbwqG14tGGp2jX:https://img.pokemondb.net/artwork/large/squirtle.jpg&s')


console.log(pikachu.hp)


squirtle.attack(squirtle.moves[1], pikachu)
pikachu.attack(pikachu.moves[1], squirtle)

pikachu.render_pkmn()


console.log('pikachu\'s hp:')
console.log(pikachu.hp)
console.log('squirtle\'s hp:')
console.log(squirtle.hp)











