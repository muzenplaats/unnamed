/**
 * @class Traffic extends Subject
 * This is raw and draft code for the future commuting system.
 * All the vihicles are treated in a matrix of vector field.
 * It is decomposed to many matrices of vector fields.
 * The current features are the docking and the porting systems.
 * A subject instance of Traffic can control all the vihicles
 * in a certain degree. Musk, you are in the Muzenplaats.
 * Do you have the ambition of the Traffic class? Tesla is boring.
 * I am afraid that I have learned all your western tricks.
 * Mercedas Benz, how to you think it? Interesting but it need
 * the cooparation with many others together, an industry standard.
 * The idea is really not new. I have watched the prototype abot
 * ten years ago. I wish Mr. Elon Musk to lead us.
 * Okay, you are all silent and my introduction stop here.
 **/

/* This is the code when I was in the hospital. */
/* I do not revise it by only typing */
/* It is kind of a traffic controller. */
/* I have forgotten what I meant. */

import Subject from './Subject'

class Traffic extends Subject {
  constructor(velocity, spacings) {
    super()
    this.name = 'traffic'
    this.velocity = velocity
    this.spacings = spacings
  }

  control(direction, speed) {
    // to the direction
    // to the speed
  }

  introduce(vihicles){
    // for the wayin
  }
  route(vihicles) {}
  sort(vihicles) {
    P(n, r)  // ...
    C(n, r)  // ...
    H(n, r)  // ...
  }
  bridge(vihicles) {}
  nat(vihicles) {}
  sshTunnling(vihicles) {}
  backupTurn(vihicles) {}
  backupSwitch(vihicles) {}
}

// Vihicles in a matrix for example.
var vihicles = [
  v1, v2, v3, ...
  v10, ..., v15, ...
  v30, ...
  v50, .., v60, ...
]

// Sort of vector field
// say in a 5 by 5 lanes -matrix
/*
  I still don't remember what I meant.
  Q: a vihicle vs a packet? (n)
  Q: a vihicle vs packets? (y)
  Q: (TCP/IPv4 + Datagram) -> vihicle?
*/
/* The above means that I have short-circuit when I was
   in the hospital. However, I copied it here for my interests
   of the Traffic class extends Subject */

/*
I try to interpret what I mean. I combined the concept of a vihicle
and a packet together. The vihicles are in the vector field.
The traffic class obtained the velocity and spacings of all vihicles.
It can control the direction and speed of each vihicle.
It can introduce vihicles to the wayin or wayout, such as port the
vihicles, dock the vihicles or so.
It can rount the vihicles.
It can bridge the vihicles, an so on.
It is a draft blueprint of the future commuting system.
I have the picture but I am not able to draw it yet.

The traffic class has this power:
1. ===  ==========
   ==/ (docking)
2. ===============
   =======\===\==== (porting)
3. =======     ====
          =====\
                \=====
The physical keyword is the viscocity.
It can be optimized by empirial mimicking.
This is my general idea.
 */

// It is still my way. I commit it without any confidence.
// It might be reviewed, generate new idea or be thrown away.
// At least, it does not look like a garbage.
// You are right. It is sloppy.
// Artists are all sloppy.
