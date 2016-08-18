function brickLayer(bigBricks, smallBricks, total) {
  this.bigBricks = bigBricks;
  this.smallBricks = smallBricks;
  this.total = total;
}

brickLayer.prototype.totalBricks = function(bigBricks, smallBricks, total) {

};


//small bricks are equal to 1
//big bricks are equal to 5

//give the total amount, do you have enough small/big bricks to complete the project ahead of you?


//first check the total versus the big bricks
  //if big bricks is equal to total return true
  //if big bricks is greater than the total
    //add small bricks until big bricks + small bricks are equal to the total.
