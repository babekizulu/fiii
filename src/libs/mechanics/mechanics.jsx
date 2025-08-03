/*
@Author: Lwandle B. Dlamini
@Desc: A library of mechanics equations
@Date: 8/3/2025
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

    springPotentialEnergy = (constantOfProportionality, initialSpringLength, finalSpringLength) => {
        return (0.5*parseInt(constantOfProportionality)*(parseInt(finalSpringLength) - parseInt(initialSpringLength))**2).toFixed(3);
    }

    simpleHarmonicOscillator = (mass, constantOfProportionality) => {
        return (2*Math.pi*Math.sqrt(parseInt(mass)/parseInt(constantOfProportionality))).toFixed(3);
    }

    simplePendulum = (length, gravity) => {
        return (2*Math.pi*Math.sqrt(parseInt(length)/parseInt(gravity))).toFixed(3);
    }

    frequency = (period) => {
        return (1/parseInt(period)).toFixed(3);
    }

    angularFrequency = (frequency) => {
        return (2*Math.pi*parseInt(frequency)).toFixed(3);
    }

    density = (mass, volume) => {
        return (parseInt(mass)/parseInt(volume)).toFixed(3);
    }

    pressure = (force, area) => {
        return (parseInt(force)/parseInt(area)).toFixed(3);
    }

    pressureInAFluid = (initialPressure, density, depth, gravity) => {
        return (parseInt(initialPressure) + parseInt(density)*parseInt(depth)*parseInt(gravity)).toFixed(3);
    }

    buoyancy = (density, volume, gravity) => {
        return (parseInt(density)*parseInt(volume)*parseInt(gravity)).toFixed(3);
    }

    massFlowRate = (initialMass, finalMass, initialTime, finalTime) => {
        return (parseInt(finalMass) - parseInt(initialMass))/(parseInt(finalTime) - parseInt(initialTime)).toFixed(3);
    }

    volumeFlowRate = (initialVolume, finalVolume, initialTime, finalTime) => {
        return (parseInt(finalVolume) - parseInt(initialVolume))/(parseInt(finalTime) - parseInt(initialTime)).toFixed(3);
    }

    dynamicViscosity = (shearStress, shearRate) => {
        return (parseInt(shearStress)/parseInt(shearRate)).toFixed(3);
    }

    kinematicViscosity = (dynamicViscosity, density) => {
        return (parseInt(dynamicViscosity)/parseInt(density)).toFixed(3);
    }

    drag = (density, coefficientOfDrag, area, velocity) => {
        return (0.5*parseInt(density)*parseInt(coefficientOfDrag)*parseInt(area)*parseInt(velocity)**2).toFixed(3);
    }

    machNumber = (velocity, speedOfSound) => {
        return (parseInt(velocity)/parseInt(speedOfSound)).toFixed(3);
    }

    reynoldsNumber = (density, velocity, diameter, dynamicViscosity) => {
        return (parseInt(density)*parseInt(velocity)*parseInt(diameter)/parseInt(dynamicViscosity)).toFixed(3);
    }

    froudeNumber = (velocity, length, gravity) => {
        return (parseInt(velocity)/Math.sqrt(parseInt(length)*parseInt(gravity))).toFixed(3);
    }

    youngsModulus = (uniaxialStress, strain) => {
        return (parseInt(uniaxialStress)/parseInt(strain)).toFixed(3);
    }

    shearModulus = (shearStress, shearStrain) => {
        return (parseInt(shearStress)/parseInt(shearStrain)).toFixed(3);
    }

    bulkModulus = (initialVolume, finalVolume, initialPressure, finalPressure) => {
        return (-parseInt(initialVolume)*(parseInt(initialPressure) - parseInt(finalPressure))/(parseInt(initialVolume) - parseInt(finalVolume))).toFixed(3);
    }

    surfaceTension = (forceActingOnTheSurface, lengthOfTheSurface) => {
        return (parseInt(forceActingOnTheSurface)/parseInt(lengthOfTheSurface)).toFixed(3);
    }
}