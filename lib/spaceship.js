function Spaceship(name, crewMembersArray, phasers, shields){
  this.name = name;
  // this.crewMembersArray = []
  this.crew = crewMembersArray;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';
  if (crewMembersArray.length === 0){
     this.docked = true;
   } else {
     this.docked = false;
   };
  this.shipStatus();
}

Spaceship.prototype.shipStatus = function(){
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = this
  }.bind(this));

}
