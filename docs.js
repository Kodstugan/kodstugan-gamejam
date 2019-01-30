
var api_info = [
    {
        "name": "getBattleFieldHeight",
        "params": {},
        "return": "double",
        "desc": "Returns the height of the current battlefield measured in pixels"
    },
    {
        "name": "getBattleFieldWidth",
        "params": {},
        "return": "double",
        "desc": "Returns the width of the current battlefield measured in pixels"
    },
    {
        "name": "getEnergy",
        "params": {},
        "return": "double",
        "desc": "Returns the robot's current energy"
    },
    {
        "name": "getName",
        "params": {},
        "return": "String",
        "desc": "Returns the robot's name"
    },
    {
        "name": "getNumRounds",
        "params": {},
        "return": "int",
        "desc": "Returns the number of rounds in the current battle"
    },
    {
        "name": "getOthers",
        "params": {},
        "return": "int",
        "desc": "Returns how many opponents that are left in the current round"
    },
    {
        "name": "setColors",
        "params": {"Color": "bodyColor", "Color": "gunColor", "Color": "radarColor"},
        "return": "int",
        "desc": "Sets the color of the robot's body, gun, and radar in the same time"
    }
]

var api_gun = [
    {
        "name": "fire",
        "params": {"double": "power"},
        "return": "void",
        "desc": "Immediately fires a bullet."
    },
    {
        "name": "fireBullet",
        "params": {"double": "power"},
        "return": "Bullet",
        "desc": "Immediately fires a bullet and returns bullet info object"
    },
    {
        "name": "setAdjustGunForRobotTurn",
        "params": {"boolean": "independent"},
        "return": "void",
        "desc": "Sets the gun to turn independent from the robot's turn."
    },
    {
        "name": "turnGunLeft",
        "params": {"double": "degrees"},
        "return": "void",
        "desc": "Immediately turns the robot's gun to the left by degrees"
    },
    {
        "name": "turnGunRight",
        "params": {"double": "degrees"},
        "return": "void",
        "desc": "Immediately turns the robot's gun to the right by degrees"
    },
    {
        "name": "getGunHeat",
        "params": {},
        "return": "double",
        "desc": "Returns the current heat of the gun"
    },
    {
        "name": "getGunCoolingRate",
        "params": {},
        "return": "double",
        "desc": "Returns the rate at which the gun will cool down, i.e. the amount of heat the gun heat will drop per turn"
    },
    {
        "name": "getGunHeading",
        "params": {},
        "return": "double",
        "desc": "Returns the direction that the robot's gun is facing, in degrees"
    }
]

var api_radar = [
    {
        "name": "setAdjustRadarForGunTurn",
        "params": {"boolean": "independent"},
        "return": "void",
        "desc": "Sets the radar to turn independent from the gun's turn."
    },
    {
        "name": "setAdjustRadarForRobotTurn",
        "params": {"boolean": "independent"},
        "return": "void",
        "desc": "Sets the radar to turn independent from the robot's turn"
    },
    {
        "name": "turnRadarLeft",
        "params": {"double": "degrees"},
        "return": "void",
        "desc": "Immediately turns the robot's radar to the left by degrees"
    },
    {
        "name": "turnRadarRight",
        "params": {"double": "degrees"},
        "return": "void",
        "desc": "Immediately turns the robot's radar to the right by degrees"
    },
    {
        "name": "getRadarHeading",
        "params": {},
        "return": "double",
        "desc": "Returns the direction that the robot's radar is facing, in degrees"
    }
]

var api_movement = [
    {
        "name": "ahead",
        "params": {"double": "distance"},
        "return": "void",
        "desc": "Immediately moves your robot ahead (forward) by distance measured in pixels."
    },
    {
        "name": "back",
        "params": {"double": "distance"},
        "return": "void",
        "desc": "Immediately moves your robot backward by distance measured in pixels."
    },
    {
        "name": "turnLeft",
        "params": {"double": "degrees"},
        "return": "void",
        "desc": "Immediately turns the robot's body to the left by degrees"
    },
    {
        "name": "turnRight",
        "params": {"double": "degrees"},
        "return": "void",
        "desc": "Immediately turns the robot's body to the right by degrees."
    },
    {
        "name": "doNothing",
        "params": {},
        "return": "void",
        "desc": "Do nothing this turn, meaning that the robot will skip it's turn."
    },
    {
        "name": "getHeading",
        "params": {},
        "return": "double",
        "desc": "Returns the direction that the robot's body is facing, in degrees"
    },
    {
        "name": "getVelocity",
        "params": {},
        "return": "double",
        "desc": "Returns the velocity of the robot measured in pixels/turn."
    },
    {
        "name": "getX",
        "params": {},
        "return": "double",
        "desc": "Returns the X position of the robot. (0,0) is at the bottom left of the battlefield."
    },
    {
        "name": "getY",
        "params": {},
        "return": "double",
        "desc": "Returns the Y position of the robot. (0,0) is at the bottom left of the battlefield."
    }
]

var api_events = [
    {
        "name": "onScannedRobot",
        "params": {"ScannedRobotEvent": "event"},
        "return": "void",
        "desc": "This method is called when your robot sees another robot, i.e. when the robot's radar scan hits another robot."
    },
    {
        "name": "onBulletHit",
        "params": {"BulletHitEvent": "event"},
        "return": "void",
        "desc": "This method is called when one of your bullets hits another robot"
    },
    {
        "name": "onBulletHitBullet",
        "params": {"BulletHitBulletEvent": "event"},
        "return": "void",
        "desc": "This method is called when one of your bullets hits another bullet"
    },
    {
        "name": "onBulletMissed",
        "params": {"BulletMissedEvent": "event"},
        "return": "void",
        "desc": "This method is called when one of your bullets misses, i.e. hits a wall"
    },
    {
        "name": "onBulletMissed",
        "params": {"BulletMissedEvent": "event"},
        "return": "void",
        "desc": "This method is called when one of your bullets misses, i.e. hits a wall"
    },
    {
        "name": "onHitByBullet",
        "params": {"HitByBulletEvent": "event"},
        "return": "void",
        "desc": "This method is called when your robot is hit by a bullet"
    },
    {
        "name": "onHitRobot",
        "params": {"HitRobotEvent": "event"},
        "return": "void",
        "desc": "This method is called when your robot collides with another robot."
    },
    {
        "name": "onHitWall",
        "params": {"HitWallEvent": "event"},
        "return": "void",
        "desc": "This method is called when your robot collides with a wall"
    },
    {
        "name": "onRobotDeath",
        "params": {"RobotDeathEvent": "event"},
        "return": "void",
        "desc": "This method is called when another robot dies"
    }
]

