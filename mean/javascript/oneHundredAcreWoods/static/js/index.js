// es-5 vs es-6
// const hello = ["Hi"];
// console.log(hello);
// hello.push(5);
// console.log(hello);
// let - blocked scope
// const - blocked scope
// var - function scope

const eeyore = {
  character: "Eeyore",
}
const winnie = {
  character: "Winnie the pooh"
}
const kanga = {
  character: "Kanga"
}
const chris = {
  character: "Christopher Robin"
}
eeyore.south = kanga;
kanga.north = eeyore;
kanga.south = chris;
chris.north = kanga;
chris.south = winnie;
winnie.north = chris;

let pointer = {
  character: eeyore,
  move: function(direction){
    // console.log(this);
    if(direction == "north" && this.character.north != undefined) {
      console.log(`Moving from ${this.character.character} to ${this.character.north.character}`)
      this.character = this.character.north;
    }
    else if(direction == "east" && this.character.east != undefined) {
      console.log(`Moving from ${this.character.character} to ${this.character.east.character}`)
      this.character = this.character.east;
    }
    else if(direction == "south" && this.character.south != undefined) {
      console.log(`Moving from ${this.character.character} to ${this.character.south.character}`)
      this.character = this.character.south;
    }
    else if(direction == "west" && this.character.west != undefined) {
      console.log(`Moving from ${this.character.character} to ${this.character.west.character}`)
      this.character = this.character.west;
    } else {
      console.log("You can not move your pointer in that direction");
      
    }
  }
};
pointer.move("north");
pointer.move("south");
pointer.move("south");
pointer.move("north");
pointer.move("east");