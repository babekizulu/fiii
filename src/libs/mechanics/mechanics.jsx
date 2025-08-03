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

    velocity = (initialVelocity, acceleration, time) => {
        return (parseInt(initialVelocity) + parseInt(acceleration) * parseInt(time)).toFixed(3);
    }

    displacement = (initialDisplacement, initialVelocity, time, acceleration) => {
        return (parseInt(initialDisplacement) + parseInt(initialVelocity)*parseInt(time) + 0.5*acceleration*(parseInt(time)**2)).toFixed(3);
    }

    netForce = (mass, acceleration) => {
        return (parseInt(mass)*parseInt(acceleration)).toFixed(3);
    }

    weight = (mass, gravity) => {
        return (parseInt(mass)*parseInt(gravity)).toFixed(3);
    }

    kineticFriction = (coefficientOfKineticFriction, normalForce) => {
        return (parseInt(coefficientOfKineticFriction)*parseInt(normalForce)).toFixed(3);
    }

    centripetalAcceleration = (velocity, radius) => {
        return ((parseInt(velocity)**2)/parseInt(radius)).toFixed(3);
    }

    momentum = (mass, velocity) => {
        return (parseInt(mass)*parseInt(velocity)).toFixed(3);
    }

    impulse = (averageForce, initialTime, finalTime) => {
        return (parseInt(averageForce)*(parseInt(finalTime) - parseInt(initialTime))).toFixed(3);
    }

    impulseMomentum = (mass, initialVelocity, finalVelocity) => {
        return (parseInt(mass)*(parseInt(finalVelocity) - parseInt(initialVelocity))).toFixed(3);
    }

    work = (averageForce, initialDisplacement, finalDisplacement, theta) => {
        return (parseInt(averageForce)*(parseInt(finalDisplacement) - parseInt(initialDisplacement))*Math.cos(parseInt(theta))).toFixed(3);
    }

    workEnergy = (initialKineticEnergy, finalKineticEnergy) => {
        return (parseInt(finalKineticEnergy) - parseInt(initialKineticEnergy)).toFixed(3);
    }

    kineticEnergy = (mass, velocity) => {
        return (0.5*parseInt(mass)*(parseInt(velocity)**2)).toFixed(3);
    }

    gravitationalPotentialEnergy = (mass, initialHeight, finalHeight, gravity) => {
        return (parseInt(mass)*parseInt(gravity)*(parseInt(finalHeight) - parseInt(initialHeight))).toFixed(3);
    }

    efficiency = (outputWork, energyInput) => {
        return (parseInt(outputWork)/parseInt(energyInput)).toFixed(3);
    }

    averagePower = (initialWork, finalWork, initialTime, finalTime) => {
        return (parseInt(finalWork) - parseInt(initialWork))/(parseInt(finalTime) - parseInt(initialTime)).toFixed(3);
    }

    powerVelocity = (force, velocity, theta) => {
        return (parseInt(force)*parseInt(velocity)*Math.cos(parseInt(theta))).toFixed(3);
    }

    averageAngularVelocity = (initialAngularDisplacement, finalAngularDisplacement, initialTime, finalTime) => {
        return (parseInt(finalAngularDisplacement) - parseInt(initialAngularDisplacement))/(parseInt(finalTime) - parseInt(initialTime)).toFixed(3);
    }

    averageAngularAcceleration = (initialAngularVelocity, finalAngularVelocity, initialTime, finalTime) => {
        return (parseInt(finalAngularVelocity) - parseInt(initialAngularVelocity))/(parseInt(finalTime) - parseInt(initialTime)).toFixed(3);
    }

    angularVelocity = (initialAngularVelocity, angularAcceleration, time) => {
        return (parseInt(initialAngularVelocity) + parseInt(angularAcceleration)*parseInt(time)).toFixed(3);
    }

    torque = (leverArm, force, theta) => {
        return (parseInt(leverArm)*parseInt(force)*Math.sin(parseInt(theta))).toFixed(3);
    }

    netTorque = (momentOfInertia, angularAcceleration) => {
        return (parseInt(momentOfInertia)*parseInt(angularAcceleration)).toFixed(3);
    }

    momentOfInertia = (netMass, radius) => {
        return (parseInt(netMass)*(parseInt(radius)**2)).toFixed(3);
    }

    rotationalWork = (averageTorque, initialAngularDisplacement, finalAngularDisplacement) => {
        return (parseInt(averageTorque)*(parseInt(finalAngularDisplacement) - parseInt(initialAngularDisplacement))).toFixed(3);
    }

    rotationalPower = (torque, angularVelocity, theta) => {
        return (parseInt(torque)*parseInt(angularVelocity)*Math.cos(parseInt(theta))).toFixed(3);
    }

    rotationalKineticEnergy = (momentOfInertia, angularVelocity) => {
        return (0.5*parseInt(momentOfInertia)*(parseInt(angularVelocity)**2)).toFixed(3);
    }

    angularMomentum = (mass, radius, velocity, theta) => {
        return (parseInt(mass)*parseInt(radius)*parseInt(velocity)*Math.sin(parseInt(theta))).toFixed(3);
    }

    angularImpulse = (averageTorque, initialTime, finalTime) => {
        return (parseInt(averageTorque)*(parseInt(finalTime) - parseInt(initialTime))).toFixed(3);
    }

    angularImpulseMomentum = (mass, initialAngularVelocity, finalAngularVelocity) => {
        return (parseInt(mass)*(parseInt(finalAngularVelocity) - parseInt(initialAngularVelocity))).toFixed(3);
    }

    universalGravitation = (gravitationalConstant=6.67430e-11, mass1, mass2, distanceBetweenCentersOfObjects) => {
        return (parseInt(gravitationalConstant)*(parseInt(mass1)*parseInt(mass2))/parseInt(distanceBetweenCentersOfObjects)**2).toFixed(3);
    }

    gravitationalField = (gravitationalConstant=6.67430e-11, mass, distanceBetweenCenterOfObjects) => {
        return (parseInt(gravitationalConstant)*parseInt(mass)/parseInt(distanceBetweenCenterOfObjects)**2).toFixed(3);
    }

    gravitationalPotentialEnergy = (gravitationalConstant=6.67430e-11, mass1, mass2, distanceBetweenCentersOfObjects) => {
        return (parseInt(gravitationalConstant)*(parseInt(mass1)*parseInt(mass2))/parseInt(distanceBetweenCentersOfObjects)).toFixed(3);
    }

    gravitationalPotential = (gravitationalConstant=6.67430e-11, mass, distanceBetweenCenterOfObjects) => {
        return (parseInt(gravitationalConstant)*parseInt(mass)/parseInt(distanceBetweenCenterOfObjects)).toFixed(3);
    }

    orbitalSpeed = (gravitationalConstant=6.67430e-11, mass, distanceBetweenCenterOfObjects) => {
        return (Math.sqrt(parseInt(gravitationalConstant)*parseInt(mass)/parseInt(distanceBetweenCenterOfObjects))).toFixed(3);
    }

    escapeSpeed = (gravitationalConstant=6.67430e-11, mass, distanceBetweenCenterOfObjects) => {
        return (Math.sqrt(2*parseInt(gravitationalConstant)*parseInt(mass)/parseInt(distanceBetweenCenterOfObjects))).toFixed(3);
    }

    hookesLaw = (constantOfProportionality, initialSpringLength, finalSpringLength) => {
        return (parseInt(constantOfProportionality)*(parseInt(finalSpringLength) - parseInt(initialSpringLength))).toFixed(3);
    }
}