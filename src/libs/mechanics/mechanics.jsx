/*
@Author: Lwandle B. Dlamini
@Desc: A library of mechanics equations
@Date: 7/25/2025
@TODO:
- velocity
- acceleration
- equations of motion
- newtons 2nd law
- weight
- dry friction
- centripetal acceleration
- momentum
- impulse
- impulse-momentum
- work
- work-energy
- kinetic energy
- general potential energy
- gravitational potential energy
- efficiency
- power
- power-velocity
- angular velocity
- angular acceleration
- equations of rotation
- torque
- 2nd law for rotation
- moment of inertia
- rotational work
- rotational power
- rotational kinetic energy
- angular momentum
- angular impulse
- angular impulse momentum
- universal gravitation
- gravitational field
- gravitational potential energy
- gravitational potential
- orbital speed
- escape speed
- hooke's law
- spring potential energy
- simple harmonic oscillator
- simple pendulum
- frequency
- angular frequency
- density 
- pressure
- pressure in a fluid
- buoyancy
- mass flow rate
- volume flow rate
- mass continuity 
- volume continuity
- bernoulli's equation
- dynamic viscosity 
- kinematic viscosity
- drag
- mach number
- reynolds number
- froude number
- young's modulus
- shear modulus
- bulk modulus
- surface tension

*/

class Mechanics {
    averageVelocity = (initialDisplacement, finalDisplacement, initialTime, finalTime) => {
        return (parseInt(finalDisplacement) - parseInt(initialDisplacement))/(parseInt(finalTime) - parseInt(initialTime)).toFixed(3);
    }

    averageAcceleration = (initialVelocity, finalVelocity, initialTime, finalTime) => {
        return((parseInt(finalVelocity) - parseInt(initialVelocity))/(parseInt(finalTime) - parseInt(initialTime))).toFixed(3);
    }
}