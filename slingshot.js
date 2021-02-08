class Slingshot {

  constructor(bodyA, bodyB) {

    var options = {
      stiffness: 0.04,
      length: 10,
      bodyA: bodyA,
      bodyB: bodyB,
    }

    this.Slingshot = Constraint.create(options);

    World.add(world, this.Slingshot);

  }

  display() {

    var pointA = this.Slingshot.bodyA.position;
    var pointB = this.Slingshot.bodyB.position;

    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }

}