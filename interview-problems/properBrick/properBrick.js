function brickLayer(bigBricks, smallBricks, total) {
  this.bigBricks = bigBricks;
  this.smallBricks = smallBricks;
  this.total = total;
}

brickLayer.prototype.totalBricks = function(bigBricks, smallBricks, total) {

};




//first check the total versus the big bricks
  //if big bricks is equal to total return true
  //if big bricks is greater than the total
    //add small bricks until big bricks + small bricks are equal to the total.
