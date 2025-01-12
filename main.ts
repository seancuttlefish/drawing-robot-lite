function Left (degrees: number) {
    basic.showArrow(ArrowNames.West)
    minibit.rotatems(mbRobotDirection.Left, speed, degrees)
    basic.showNumber(ID)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Left(200)
    } else if (receivedNumber == 2) {
        Right(200)
    } else if (receivedNumber == 3) {
        distance = minibit.sonar(mbPingUnit.Centimeters)
        if (distance > 0 && distance < 160 && distance > 10) {
            Forward(200)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    } else if (receivedNumber == 4) {
        Backward(200)
    } else if (receivedNumber == 5) {
        Spin()
    } else if (receivedNumber == 6) {
        Stop(10000)
    }
})
function Forward (distance: number) {
    basic.showArrow(ArrowNames.North)
    minibit.setLedColor(0x18E600)
    minibit.goms(mbDirection.Forward, speed, distance)
    basic.showNumber(ID)
}
function Spin () {
    temp = 800
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    minibit.setLedColor(0xFFFF00)
    minibit.rotatems(mbRobotDirection.Right, speed, temp)
    basic.showNumber(ID)
}
function Right (degrees: number) {
    basic.showArrow(ArrowNames.East)
    minibit.setLedColor(0x0000FF)
    minibit.rotatems(mbRobotDirection.Right, speed, degrees)
    basic.showNumber(ID)
}
function Stop (duration: number) {
    basic.showLeds(`
        # # . # #
        . . . . .
        . . # . .
        . . . . .
        # # # # #
        `)
    minibit.ledClear()
    minibit.stop(mbStopMode.Coast)
    basic.pause(randint(0, 6) * duration)
}
function Backward (distance: number) {
    basic.showArrow(ArrowNames.South)
    minibit.setLedColor(0xff0000)
    minibit.goms(mbDirection.Reverse, speed, distance)
    basic.showNumber(ID)
}
let temp = 0
let distance = 0
let speed = 0
let ID = 0
ID = 1
radio.setGroup(ID)
speed = randint(30, 80)
basic.showNumber(ID)
basic.forever(function () {
	
})
