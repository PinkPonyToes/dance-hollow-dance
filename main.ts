input.onButtonPressed(Button.A, function () {
    START = 1
})
input.onButtonPressed(Button.B, function () {
    cuteBot.stopcar()
    START = 0
})
let SONAR = 0
let START = 0
START = 0
basic.forever(function () {
    if (START == 1) {
    	
    }
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0080)
    basic.pause(100)
})
basic.forever(function () {
    SONAR = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (START == 1) {
        if (SONAR < 5) {
            cuteBot.motors(0, 0)
            basic.pause(1000)
            cuteBot.motors(randint(0, -50), randint(0, -50))
            basic.pause(1000)
        } else {
            cuteBot.motors(50, 50)
        }
    }
})
