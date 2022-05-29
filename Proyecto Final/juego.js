const k = kaboom({
  global: true, //asegura las acciones gloables del juego
  fullscreen: true, //Asegura que el fondo sea de pantalla completa
  scale: 1.8, //la escala para la interfaz del juego
  clearColor: [0,0,0, 0], //color de fondo
})

//https://imgur.com/xTKfXnF
loadRoot('https://i.imgur.com/') //carga la ruta
loadSprite('bloque', 'M6rwarW.png') //Sprite 1
loadSprite('gato_d', 'ZVmphhZ.png') //Sprite 2
loadSprite('gato_i', 'FNEBl36.png')
loadSprite('gatoSalto_d', 'FaXmp2P.png')
loadSprite('gatoSalto_i', 'LrbeioK.png')
loadSprite('FinalBoss', 'DW9WOd7.png') //Sprite 3
loadSprite('bloque', 'hR9JtNJ.png')   //sprite 4
loadSprite('pared', '5BvyHzG.png')
loadSprite('pared2', 'viG0pXi.png')   //sprite 5
loadSprite('portal', 'qZRdBqa.png')
loadSprite('luciernagaOn', '07Qr2kK.png')  //Sprite 6
loadSprite('luciernagaOff', 'udGdCd1.png')
loadSprite('luciernagaOnDer', '7Lo2zOU.png')
loadSprite('luciernagaOffDer', 'udGdCd1.png')
loadSprite('key', 'zF99jTi.png') //Sprite 7
loadSprite('candado', 'clCAjJh.png')
loadSprite('gatoStand','JkGQohl.png')
loadSprite('gatoStandDer','gxGiYwr.png')
loadSprite('pescado', 'DXcXNa9.png')

//level 2
loadSprite('paredlvl2', '3vCwaQq.png')
loadSprite('suelolvl2', 'xTKfXnF.png')
var xd = 0

scene("Intro", ()=>{

  const titulo = add([
    text("titulo", 50),
    pos(300, 200),
    color(1, 1, 0)
  ])
  const start = add([
    text("Start", 40),
    pos(400, 300),
    color(1, 1, 1),
    "start"
  ])

  loop(0.5, ()=>{
    if(start.isHovered())
      start.color = rgb(0, 1, 0)
    else
      start.color = rgb(1, 1, 1)
  })

  mouseClick(()=>{
    if(start.isHovered())
      go("level1", {score:0, vidas:7})
  })
})//Final escena intro
//var luciernagas = ["luciernagaOn", "luciernagaOff"]
scene("level1", ({score, vidas}) => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const map = [
  ' =======================================',
  '=#######################################=',
  '=#######################################=',
  '=#######################################=',
  '=*######################################=',
  '===##################################?##=',
  ' ####################################### ',
  '=###################################### =',
  '=====================-___-=============-=',
  '=#######################################=',
  '=####################################8# =',
  '================================-=====--= ',
]


const levelCfg = {
  width: 50,
  height: 50,
  //llamado de sprites
  '=': [sprite('bloque'), solid(),   scale(0.5)],
  '_': [sprite('bloque'), solid(), scale(0.5), "piso"],
  '-': [sprite('bloque'), solid(), scale(0.5), "piso2"],
  '#': [sprite('pared2'), layer('bg')],
  '?': [sprite("key"), 'llave', scale(0.1)],
  '*': [sprite("candado"), "candado", scale(0.1)],
  '8': [sprite("pescado"), "coin", scale(0.4)],




}

//Reiniciar juego
keyDown('r', ()=>{
  go("level1", {score:0, vidas:7})
})

//var hasKey = False
var gatodir = 1
let inmortal = false
const gato = add([
  sprite('gato_d'),
  pos(700, 200),
  scale(0.5),
  body()
])

const portal = add([
  sprite('portal'),
  pos(150, 450),
  scale(0.25),
  "portalxd"

])

const pared_izq1 = add([
  sprite("bloque"),
  pos(0, 300),
  scale(0.5),
  solid(),
  "pared_izq1"
])

const pared_der1 = add([
  sprite("bloque"),
  pos(2000, 300),
  scale(0.5),
  solid(),
  "pared_der1"
])

//Enemigo 1 y movimientos
const enemigo1 = add([
  sprite('luciernagaOn'),
  pos(1100, 220),
  scale(0.7),
  body(),
  "enemigo1"
])

var dir = 100
var dir2 = 100
action("enemigo1", (e)=>{
  e.move(-dir, 0)


})

enemigo1.collides("pared_izq1", ()=>{
  dir = -dir
  action("enemigo1", (e)=>{
    e.move(dir, 0)
    e.changeSprite("luciernagaOnDer")
  })

})

enemigo1.collides("pared_der1", ()=>{
  dir = -dir

  action("enemigo1", (e)=>{
    e.move(dir, 0)
    e.changeSprite("luciernagaOn")


  })

})

enemigo1.collides("piso2", (a)=>{
  if(openlvl == true)
    destroy(enemigo1)
})

const enemigo2 = add([
  sprite("luciernagaOff"),

  pos(1600, 450),
  scale(0.7),
  "enemigo2",
  {
    dir:-1
  }
])

action("enemigo2", (e)=>{
  e.move(-dir2, 0)
})
enemigo2.collides("piso2", ()=>{
  dir2 = -dir2
  enemigo2.move(dir2, 0)

})

//colicion con coins
camIgnore(["xd", "ui"]);
const puntuacion1 = add([
  text("Score: ", 20),
  pos(130, 100),
  layer("ui")
])
const puntuacion = add([
    text(score, 20),
    pos(250, 100),
    layer("ui"),
    {
        value: score
    }

])

const vidas1 = add([
  text("Vidas: ", 20),
  pos(130, 130),
  layer("ui")
])

const vidaas = add([
    text(vidas, 20),
    pos(250, 130),
    layer("ui"),
    {
        value: vidas
    }

])
function puntos(){
    puntuacion.value += 1
    puntuacion.text = puntuacion.value

}

function damage(){

    vidas -= 1
    vidaas.value -= 1
    vidaas.text = vidaas.value

}


gato.collides("coin", (e)=>{
  puntos()
  debug.log(puntuacion.value)
  score += 1
  destroy(e)
})

//Movimiento personaje principal
keyDown("right", ()=> {

      gatodir = 1
      gato.move(400, 0)
      if(gato.grounded())
        gato.changeSprite("gato_d")
      else {
        gato.changeSprite("gatoSalto_d")
      }


})

keyDown("left", ()=>{
  gatodir = 0

  gato.move(-400, 0)
  if(gato.grounded())
    gato.changeSprite("gato_i")
  else {
    gato.changeSprite("gatoSalto_i")
  }
})

keyDown("up", ()=> {
  if(gato.grounded()) //estar en base soilda
  gato.jump(600)

  if(gatodir == 1 && !gato.grounded())
    gato.changeSprite("gatoSalto_d")
  else if(gatodir == 0 && !gato.grounded())
    gato.changeSprite("gatoSalto_i")

    if(gato.grounded()){
      if(gatodir == 1)
        gato.changeSprite("gatoStandDer")
        else if(gatodir == 0)
        gato.changeSprite("gatoStand")}
})

keyRelease(["left", "right", "up", "down"], ()=> {
  if(gato.grounded()){
    if(gatodir == 1)
      gato.changeSprite("gatoStandDer")
    else if(gatodir == 0)
      gato.changeSprite("gatoStand")
  }

})

//Coliciones gato



gato.collides("enemigo1", ()=>{
  if(!inmortal)
    damage()
  inmortal = true
  wait(2, ()=>{
    inmortal = false
  })

})

gato.action(()=>{
  camPos(gato.pos)
})

let hasKey = false
let openlvl = false
gato.collides("llave",(e)=>{
  destroy(e)
  hasKey = true
})

gato.collides("candado", (a)=>{
  if(hasKey == true){
    destroy(a)
    openlvl = true}
    else {
      const adv = add([
        text("Necesitas la llave!!", 20),
        pos(100, 120)
      ])
      wait(3, ()=>{
        destroy(adv)
      })
    }
})

gato.collides("piso", (e)=>{
  if(openlvl == true){
    destroy(e)
    destroy(enemigo1)}
})

gato.collides("portalxd", ()=>{
  go("level2", {score:0, vidas:7})
})
const gameLevel = addLevel(map, levelCfg)
}) //final lvl 1

//level 2 #################
scene("level2", ({score, vidas}) => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const map =
  [
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&___&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&___&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&___&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&?&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&__&&&&',
    '&&&&&&&&&&___&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&___&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&__&&&&&&&&&&&&&&&8&&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&___&&&&&&&&&&&&&&&&',
    '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',


  ]

  const levelCfg = {
    width: 50,
    height: 50,
    '&': [sprite("paredlvl2"), layer('bg')],
    '_': [sprite("suelolvl2"), solid(), scale(0.5), "suelo"],
    '?': [sprite("key"), 'llave', scale(0.1)],
    '*': [sprite("candado"), "candado", scale(0.1)],
    '8': [sprite("pescado"), "coin", scale(0.4)]
  }

  const gameLevel = addLevel(map, levelCfg)


  var gatodir = 1
  let inmortal = false
  let save = false
  const gato = add([
    sprite('gato_d'),
    pos(510, 480),
    scale(0.5),
    body()
  ])

  const portal = add([
    sprite('portal'),
    pos(2100, 190),
    scale(0.25),
    "portalxd"

  ])

  //colicion con coins
  camIgnore(["xd", "ui"]);
  const puntuacion1 = add([
    text("Score: ", 20),
    pos(130, 100),
    layer("ui")
  ])
  const puntuacion = add([
      text(score, 20),
      pos(250, 100),
      layer("ui"),
      {
          value: score
      }

  ])

  const vidas1 = add([
    text("Vidas: ", 20),
    pos(130, 130),
    layer("ui")
  ])

  const vidaas = add([
      text(vidas, 20),
      pos(250, 130),
      layer("ui"),
      {
          value: vidas
      }

  ])
  function puntos(){
      puntuacion.value += 1
      puntuacion.text = puntuacion.value

  }

  function damage(){

      vidas -= 1
      vidaas.value -= 1
      vidaas.text = vidaas.value

  }

  const textoo = add([
    text("Salta!!", 40),
    pos(1200, 200)

  ])

  gato.action(()=>{
    if(gato.pos.y >= 1000){
      if(!save)
      damage()
      go("level2", {score:puntuacion.value, vidas:vidaas.value})
    }

  })

  gato.collides("coin", (e)=>{
    puntos()
    debug.log(puntuacion.value)
    score += 1
    destroy(e)
  })

  gato.collides("suelo", ()=>{
    save = true
    debug.log(save)
  })
  //Movimiento personaje principal
  gato.action(()=>{
    camPos(gato.pos)
  })

  keyDown("right", ()=> {

        gatodir = 1
        gato.move(400, 0)
        if(gato.grounded()){
          save = false
          gato.changeSprite("gato_d")}
        else {
          gato.changeSprite("gatoSalto_d")
        }


  })

  keyDown("left", ()=>{
    gatodir = 0

    gato.move(-400, 0)
    if(gato.grounded()){
      save = false
      gato.changeSprite("gato_i")}
    else {
      gato.changeSprite("gatoSalto_i")
    }
  })

  keyDown("up", ()=> {

    if(gato.grounded()){ //estar en base soilda
      save = false
    gato.jump(600)}

    if(gatodir == 1 && !gato.grounded())
      gato.changeSprite("gatoSalto_d")
    else if(gatodir == 0 && !gato.grounded())
      gato.changeSprite("gatoSalto_i")

      if(gato.grounded()){
        if(gatodir == 1)
          gato.changeSprite("gatoStandDer")
          else if(gatodir == 0)
          gato.changeSprite("gatoStand")}
  })

  keyRelease(["left", "right", "up", "down"], ()=> {
    if(gato.grounded()){
      if(gatodir == 1)
        gato.changeSprite("gatoStandDer")
      else if(gatodir == 0)
        gato.changeSprite("gatoStand")
    }

  })


})//final level 2
debug.inspect = true
//start("level1", ({score:0, vidas:7}))
start("level2", ({score:0, vidas:7}))
//start("Intro")
