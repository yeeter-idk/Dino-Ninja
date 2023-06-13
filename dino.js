let canvas = document.getElementById("mainCanvas")
let statsDisplay = document.getElementById("stats")
//canvas.width = canvas.width*3
//canvas.height = canvas.height*3
let ctx = canvas.getContext("2d");
let ctx2 = statsDisplay.getContext("2d");

let DR = Math.PI/180

let index = 0
let lastIndex = -1
let images = ['player.png', 'playerShadow.png', 'background.png', 'foreground.png', 'spike.png', 'spike2.png', 'spike3.png', 'spike4.png', 'spike5.png', 'spike6.png', 'spike7.png', 'spike8.png', 'stars.png', 'moon.png', 'gameoverScreen.png', 'rocket.png', 'exhaust.png', 'mrEggmanRight.png', 'resButton.png', 'cloud.png', 'mountain.png', 'farHouses.png', 'foregroundProp.png', 'unfocused.png']

let imageChecker
let level = 0
let bubbles = []
let bubblesSize = []
for(let i=0;i<10;i++){
  bubbles.push(Math.random()*canvas.width)
  bubbles.push(canvas.height+15)
  bubblesSize.push(Math.random()*4+3)
}
let dots = []
for(let i = 0;i<10;i++){
  dots.push(canvas.height+20)
}
let pa2ly
let loaded = false
pa2ly = new Image()
pa2ly.src = 'pa2ly.png'
pa2ly.onload = function(){
  loaded = true
}
  
imageChecker = setInterval(()=>{
  let image = new Image()
  image.src = images[index]
  if(lastIndex != index){
  lastIndex = index
  image.onload = function(){
    index+=1
    if(index == images.length){
      let ajdbujz = setTimeout(whdfgydevjhfdqwzp, 3000)
    } 
  }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if(loaded){
    ctx.drawImage(pa2ly, 0, 0, canvas.width, canvas.height)
  }
  /*ctx.fillStyle="#fff"
  ctx.fillText(index+"/"+images.length,10,10)*/
  ctx.fillStyle = "#27f"
  ctx.strokeStyle = "#aff"
  ctx.lineWidth = 5
  
  ctx.globalAlpha = 0.5
  ctx.beginPath()
  ctx.moveTo(-10, canvas.height-(level+=(((canvas.height/images.length)*index)-level)/15))
  for(let i = 0;i<dots.length;i++){
    dots[i]+=(((canvas.height-level)+(Math.random()*20-10))-dots[i])/10
    ctx.lineTo(
    (canvas.width/(dots.length-1))*i, 
    dots[i])
  }
  ctx.lineTo(canvas.width+10, canvas.height-(level+=(((canvas.height/images.length)*index)-level)/15))
  ctx.lineTo(canvas.width+10, canvas.height+10)
  ctx.lineTo(-10,canvas.height+10)
  ctx.fill()
  ctx.globalAlpha = 0.8
  ctx.stroke()
  
  ctx.lineWidth = 2
  
  ctx.beginPath()
  for(let i=0;i<bubbles.length;i+=2){
    bubbles[i] += Math.random()*2-1
    bubbles[i+1] -= 4
    if(bubbles[i+1]<(canvas.height-level)+20){
      for(let u = 0; u<3; u++){
        let d = ((u*((360/3)+(Math.random()*25)))+Math.random()*180)*DR
        ctx.moveTo(bubbles[i]+Math.sin(d)*(bubblesSize[i/2]), bubbles[i+1]+Math.cos(d)*(bubblesSize[i/2]))
        ctx.lineTo(bubbles[i]+Math.sin(d)*(bubblesSize[i/2]*2), bubbles[i+1]+Math.cos(d)*(bubblesSize[i/2]*2))
      }
      //ctx.arc(bubbles[i], bubbles[i+1], bubblesSize[i/2]*1.5, 0, 2 * Math.PI);
      bubbles[i] = Math.random()*canvas.width
      bubbles[i+1] = canvas.height+15+(Math.random()*10)
    }
  }
  for(let i=0;i<bubbles.length;i+=2){
    ctx.moveTo(bubbles[i]+bubblesSize[i/2], bubbles[i+1])
    ctx.arc(bubbles[i], bubbles[i+1], bubblesSize[i/2], 0, 2 * Math.PI);
  }
  ctx.globalAlpha = 0.8
  ctx.stroke()
  ctx.globalAlpha = 1
  //ctx.fillRect(0, canvas.height-(level+=((((canvas.height-20)/images.length)*index)-level)/15), canvas.width, canvas.height)
},100)


// normal spike
// slime spike
// ball spike
// table
// katana stand
// lava pool
// trophy 
// supra


function clearCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}    
function getValue(name) {
  let cookies = document.cookie.split(";"); // Split cookies using semicolon as separator
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim(); // Remove any leading or trailing whitespace
    let slot = cookie.split("=");
    if (slot[0] === name) {
      return slot[1];
    }
  }
  return ""; // Return an empty string if the cookie is not found
}
function clearAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const indexOfEqual = cookie.indexOf("=");
    const cookieName = indexOfEqual > -1 ? cookie.substr(0, indexOfEqual).trim() : cookie.trim();

    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }
}

  
let stats = []
let spikeTypes = [ 
"norm",
"slime",
"ball",
"table",
"katana",
"lava",
"trophy",
"supra"
]
//document.cookie = "lava=10;"
//clearAllCookies()
  
if(document.cookie.length==0){
  for(let i = 0;i<8;i++){
    stats.push(0)
    document.cookie = spikeTypes[i]+"=0;"
  }
}else{
  for(let i = 0; i<spikeTypes.length; i++){
    stats.push(getValue(spikeTypes[i]))
  }
}
let hi
if(getValue("hi") === ""){
  document.cookie = "hi=0;"
  hi=0
}else{
  hi = getValue("hi")
}

//saveCookie()

console.log(document.cookie)
statsDisplay.width *= 2
statsDisplay.height *= 2
ctx2.fillStyle = "#CFC6B8FF"
ctx2.font = "40px 'Press Start 2P'"
  
//updateStats()
ctx2.fillText("loading...", 10, 50)
ctx2.font = "20px 'Press Start 2P'"



function updateStats(sprites) {
  ctx2.clearRect(0, 0, statsDisplay.width, statsDisplay.height)
  for(let i = 0;i<spikeTypes.length;i++){
    ctx2.fillText(spikeTypes[i]+":"+stats[i], 10+(statsDisplay.width/3)*(i%3), 25+((statsDisplay.height/3)*Math.floor(i/3)))
    ctx2.drawImage(sprites[i], 10+(statsDisplay.width/3)*(i%3), 25+((statsDisplay.height/3)*Math.floor(i/3)), sprites[i]. width/5, sprites[i].height/5)
  }
}

function whdfgydevjhfdqwzp() {
//logArea.style.animation = 'hide 1s forwards ease-in'
  
clearInterval(imageChecker)
//logs.push("running")  
      
document.getElementById("title").innerHTML = "Dino"

let playerImg, playerShadow, background, foreground, spike, spike2, spike3, spike4, spike5, spike6, spike7, spike8, moon, stars, gameoverScreen, rocket, exhaust, mrEggmanRight, resButton, cloud, mountain, farHouses, foregroundProp, unfocused

let setImages = function() {
  playerImg = new Image()
  playerImg.src = 'player.png'
  playerShadow = new Image()
  playerShadow.src = 'playerShadow.png'
  background = new Image()
  background.src = 'background.png'
  foreground = new Image()
  foreground.src = 'foreground.png'
  spike = new Image()
  spike.src = 'spike.png'
  spike2 = new Image()
  spike2.src = 'spike2.png'
  spike3 = new Image()
  spike3.src = 'spike3.png'
  spike4 = new Image()
  spike4.src = 'spike4.png'
  spike5 = new Image()
  spike5.src = 'spike5.png'
  spike6 = new Image()
  spike6.src = 'spike6.png'
  spike7 = new Image()
  spike7.src = 'spike7.png'
  spike8 = new Image()
  spike8.src = 'spike8.png'
  moon = new Image()
  moon.src = 'moon.png'
  stars = new Image()
  stars.src = 'stars.png'
  gameoverScreen = new Image()
  gameoverScreen.src = 'gameoverScreen.png'
  rocket = new Image()
  rocket.src = 'rocket.png'
  exhaust = new Image()
  exhaust.src = 'exhaust.png'
  mrEggmanRight = new Image()
  mrEggmanRight.src = 'mrEggmanRight.png'
  resButton = new Image()
  resButton.src = 'resButton.png'
  cloud = new Image()
  cloud.src = 'cloud.png'
  mountain = new Image()
  mountain.src = 'mountain.png'
  farHouses = new Image()
  farHouses.src = 'farHouses.png'
  foregroundProp = new Image()
  foregroundProp.src = 'foregroundProp.png'
  unfocused = new Image()
  unfocused.src = 'unfocused.png'
  
}

setImages()

let jsdjid = setTimeout(setImages, 5000)

updateStats([spike, spike2, spike6, spike3, spike5, spike4, spike8, spike7])
/*
(spike)//  normal spike
(spike2)// slime spike
(spike6)// ball spike
(spike3)// table
(spike5)// katana stand
(spike4)// lava
(spike8)// trophy 
(spike7)// supra
*/


class particle {
  constructor(x, y, dir, speed, img, frames, size, delay){
    this.x = x
    this.y = y
    this.dir = dir
    this.speed = speed
    this.img = img
    this.frames = frames
    this.frame = 0
    this.size = size
    this.delay = delay
    this.time = 0
  }
  update(){
    this.x += Math.sin(this.dir)*this.speed
    this.x -= obstacleSpeed
    this.y += Math.cos(this.dir)*this.speed
    
    if(this.x < -30){
      return "remove"
    }
    
    this.speed *= 0.9
    this.dir+=(Math.random()*10-5)*DR
    
    this.time++
    /*if(this.frame == 0){
      this.time+=2
    }else if(this.frame == this.frames-1){
      this.time-=0.5
    }*/
    this.delay = 2*((this.frame)+1)+(Math.random()*20-10)
    if(this.time>this.delay){
      this.frame++
      this.time=0
    }
    
    let trueWidth = (this.img.width/this.frames)
    
    ctx.drawImage(
  this.img,
  trueWidth * this.frame,
  0,
  trueWidth,
  this.img.height,
  this.x - ((trueWidth*this.size)/2),
  this.y - ((this.img.height*this.size)/2),
  trueWidth * this.size,
  this.img.height * this.size
);
    /*ctx.fillStyle = "white"
    ctx.fillRect(this.x, this.y, 10, 10)*/

    if(this.frame>this.frames){
      return "remove"
    }
  } 
}

class projectile {
  constructor(x, y, s, aH){
    this.x = x
    this.y = y
    this.acc = 0.1
    this.dir = 0
    this.desiredDir = 0
    this.speed = 0
    this.life = 180
    this.img = rocket
    this.s = s
    this.partDelay
    this.time = 0
    this.on = false
    this.activationHeight = aH
  }
  update(){
    this.life -= 1
    if(this.life<0){
      return "remove"
    }
    this.time++
    this.partDelay = 8/(this.speed*1.5) 
    if(this.partDelay<this.time && this.on && particles.length<maxParts){
    particles.push(new particle(this.x-Math.sin(90*DR)*((this.img.width*this.s)/2), this.y-Math.cos(90*DR)*((this.img.width*this.s)/2), (90*DR)+(Math.random()*2-1)*DR, -this.speed*2+(Math.random()*20-10), exhaust, 9, 0.7, 5))
    this.time = 0
    }
    this.speed += this.acc
    this.x += Math.sin(this.dir) * this.speed
    this.y += Math.cos(this.dir) * this.speed
    this.dir += (this.desiredDir-this.dir)/10
    this.desiredDir += Math.sin((uniFCount*4))*DR
    if(this.y > currentFloor - this.activationHeight && !this.on){
      this.on = true
      //this.dir = 70*DR
      //this.speed /= 2
      this.desiredDir = 90*DR
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x-((this.img.width*this.s)/2), this.y-((this.img.height*this.s)/2), this.img.width*this.s, this.img.height*this.s)
    ctx.drawImage(playerShadow, this.x-(this.img.width*0.55)/2, currentFloor-(this.img.height*0.5), this.img.width*0.5, this.img.height*0.5)
    //ctx.fillStyle = "white"
    //ctx.fillRect(this.x, currentFloor, 10, 10)
    
  }
  
}

class layer {
  constructor(v, img, x, y, s){
    this.x = x
    this.v = v
    this.img = img
    this.s = s
    this.y = (canvas.height - this.img.height*(canvas.height/this.img.height)*this.s)+y

  }
  update(){
    this.x -= obstacleSpeed/this.v
    if(this.x+this.img.width*(canvas.height/this.img.height)*this.s<0){
      this.x = 0
    }
    let v = (canvas.height/this.img.height)
    ctx.drawImage(this.img, this.x, this.y, this.img.width*v*this.s, this.img.height*v*this.s)
    ctx.drawImage(this.img, this.x+this.img.width*v*this.s, this.y, this.img.width*v*this.s, this.img.height*v*this.s)
    if(this.img.width*v*this.s<canvas.width){
      ctx.drawImage(this.img, this.x+(this.img.width*v*this.s)*2, this.y, this.img.width*v*this.s, this.img.height*v*this.s)
    }
  }
}

class obstacle {
  constructor(x, type){
    this.x = x
    this.imgIndex = type
    this.img = obstacleTypes[this.imgIndex]
    this.imgW = this.img.width/obstacleSize
    this.imgH = this.img.height/obstacleSize
  }
  update(){
    this.x -= obstacleSpeed
    if(this.x+this.imgW<0 && obstaclesSpawn){
      deadSus = 0
      //score += 1
      this.x = canvas.width+(Math.random()*500)
      let type = getRandomNumber(obstacleTypes.length, false)

      this.imgIndex = type
      document.cookie = spikeTypes[type]+"="+(parseInt(getValue(spikeTypes[type]))+1)+";"
      
      stats[type]++
      //console.log(stats)
      updateStats([spike, spike2, spike6, spike3, spike5, spike4, spike8, spike7])
      
      //console.log(this.imgIndex)
      this.img = obstacleTypes[this.imgIndex]
      this.imgW = this.img.width/obstacleSize
      this.imgH = this.img.height/obstacleSize
    }
  }
  draw(){
  //let v = Math.random()*100
  //console.log(this.img)
  //ctx.fillRect(this.x-canvas.width, 0, 500, canvas.height)
  ctx.drawImage(this.img, this.x, currentFloor-this.imgH, this.imgW, this.imgH)
  //ctx.fillRect(this.x, currentFloor-(playerShadow.height/2), playerShadow.width, playerShadow.height/2)
  
  ctx.drawImage(playerShadow, this.x-91, currentFloor-(playerShadow.height/2)+5, playerShadow.width*1.5, playerShadow.height/2)
  }
}

function getRandomNumber(availableNumbers, log) {
  let frequency = []
  for(let i = 0; i<availableNumbers; i++){
    for(let u = 0; u<availableNumbers-i; u++){
      frequency.push(i)
    }
  }
  if(log){
    console.log(frequency)
  }
  const index = Math.floor(Math.random() * frequency.length);
  return frequency[index];
}

function sortNumbersByFrequency(numbers) {
  const frequencyMap = {};

  for (const number of numbers) {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  }

  const sortedNumbers = numbers.sort((a, b) => {
    const frequencyDiff = frequencyMap[b] - frequencyMap[a];
    if (frequencyDiff !== 0) {
      return frequencyDiff;
    }
    return a - b;
  });

  //console.log("Sorted numbers:", sortedNumbers);

  console.log("Frequency count and percentage:");
  const totalCount = numbers.length;
  for (const number in frequencyMap) {
    const count = frequencyMap[number];
    const percentage = ((count / totalCount) * 100).toFixed(2);
    console.log(`${number}: ${count} times (${percentage}%)`);
  }
}

let projectiles = []
//projectiles.push(new projectile(canvas.width/8, (canvas.height/8), 0.2, 100))
  
let particles = []
let maxParts = 200

let obstacleTypes = []
obstacleTypes.push(spike)//  normal spike
obstacleTypes.push(spike2)// slime spike
obstacleTypes.push(spike6)// ball spike
obstacleTypes.push(spike3)// table
obstacleTypes.push(spike5)// katana stand
obstacleTypes.push(spike4)// lava
obstacleTypes.push(spike8)// trophy 
obstacleTypes.push(spike7)// supra

getRandomNumber(obstacleTypes.length, true)

/*let prob = []
for(let i = 0; i<30000; i++){
  let v = getRandomNumber(obstacleTypes.length, false)
  //console.log(v)
  let mes = ""
  switch(v){
    case 0:
      mes = "norm"
    break
    case 1:
      mes = "slime"
    break
    case 2:
      mes = "ball"
    break
    case 3:
      mes = "table"
    break
    case 4:
      mes = "katana"
    break
    case 5:
      mes = "lava"
    break
    case 6:
      mes = "throphy"
    break
    case 7:
      mes = "supra"
    break
  }
  prob.push(mes)
}
sortNumbersByFrequency(prob)
*/

let backgroundLayer = new layer(2, background, 0, 15, 0.8)
let foregroundLayer = new layer(1, foreground, 0, 0, 1)
let cloudLayer = new layer(50, cloud, 0, -50, 0.8)
let mountainLayer = new layer(100, mountain, 0, 10, 0.8)
let farLayer = new layer(10, farHouses, 0, 20, 0.8)
let forePropLayer = new layer(1, foregroundProp, 0, -18.9, 1.5)
let unfocusedLayer = new layer(0.75, unfocused, 0, 0, 1)

let score = 0
let deadSus = 0
let harms = 0

let obstacles = []
let obstacleSpeed = 5
let obstacleSize = 5
obstacles.push(new obstacle(canvas.width * 3,0))
obstacles[0].update()

let obstaclesSpawn = true

canvas.width*=2
canvas.height*=2

let uniFCount = 0

let floor = (canvas.height / 6)*5
let currentFloor = floor

let stage = 0

let eggX = -150
let eggY = 0

let playerJumpForce = 7
let playerIsOnGround = true
let playerWidth = playerImg.width
let playerHeight = playerImg.height
let playerIndex = 0
let playerDelay = 6
let playerDelayV = 0
let playerX = canvas.width / 4
let playerY = currentFloor-playerHeight
let playerYSpeed = 0

let gameover = false

function restart() {
  projectiles = []
  
  particles = []

  score = 0
  deadSus = 0

  obstacles = []
  obstacles.push(new obstacle(canvas.width * 3,0))
  
  obstaclesSpawn = true

  uniFCount = 0

  playerIsOnGround = true
  playerY = currentFloor-playerHeight
  playerYSpeed = 0

  gameover = false
  
  stage = 0
  eggX = -150
  eggY = 0
  
  gameLoop()
  
  score = 0
}

ctx.fillStyle = "#fcffff"
ctx.font = "10px 'Press Start 2P'"

function gameLoop(){
  stageUpdate()
  harms = 0
  obstacleSpeed = 5 + score/1000
  playerYSpeed += 0.25
  score+=0.5
  if(score>hi){
    hi=score
  }
  playerY += playerYSpeed
  currentFloor+=(floor-currentFloor)*1.5
  if(playerY+playerHeight>currentFloor){
    playerY = currentFloor-playerHeight
    
    if(!playerIsOnGround){
      playerIsOnGround = true
    }
    
    //playerYSpeed *= -0.9
    currentFloor+=playerYSpeed/5
    playerYSpeed = 0
    if(playerDelay<playerDelayV){
      playerIndex=(playerIndex+1)%6
      playerDelayV=0
      //console.log(uniFCount)
    }
  
    //playerYSpeed = 0
  }
  for(let i = 0;i<projectiles.length;i++){
    let obj = projectiles[i]
    if(obj.update() === "remove"){
      projectiles.splice(i,1)
      i--
      
    }
    //ctx.drawImage(this.img, this.x-((this.img.width*this.s)/2), this.y-((this.img.height*this.s)/2), this.img.width*this.s, this.img.height*this.s)
    
    if (
      playerX < (obj.x-((rocket.width*obj.s)/2)) + rocket.width*obj.s &&
      playerX + (32*5/2) > obj.x-((rocket.width*obj.s)/2) &&
      playerY < (obj.y-((rocket.height*obj.s)/2))+ rocket.height*obj.s &&
      playerY + playerHeight > obj.y-((rocket.height*obj.s)/2)
    ) {
    harms++
    deadSus += 1
      
    //canvas.click()
      
    if(deadSus > 8){
      deadSus = 0
      gameover = true
    }
    }
  }
  for(let i = 0;i<obstacles.length;i++){
    let obj = obstacles[i]
    obj.update()
    //console.log(obj.imgW)
    if(playerY+playerHeight>currentFloor-obj.imgH && playerX+(32*5/2)>obj.x && playerX<obj.x+obj.imgW){
      harms++
      deadSus += 1
      
      //canvas.click()
      
      if(deadSus > 8){
        deadSus = 0
        gameover = true
        //let qjhsjsbs = setTimeout(restart, 1000)
        //console.log(score)
        //console.log("ur ded")
      }
    }
    /*if(playerY+playerHeight>currentFloor-obj.imgH && playerX+(obstacleSpeed*20)+(32*5/2)>obj.x && playerX+(obstacleSpeed*20)<obj.x+obj.imgW){
      canvas.click()
    }*/
  }
  
  if(harms<1){
    deadSus = 0
  }
  
  draw()
  playerDelayV++
  uniFCount = (uniFCount+1)%360
  if(!gameover){
    requestAnimationFrame(gameLoop)
  }else{
    document.cookie = "hi="+hi+";"
    console.log(document.cookie)
  }
}

requestAnimationFrame(gameLoop)

canvas.addEventListener("click", (e)=>{
  e.preventDefault
    
  let can = canvas.getBoundingClientRect()
  let scaleX = canvas.width/can.width
  let scaleY = canvas.height/can.height
  let x = (e.clientX - can.left)*scaleX
  let y = (e.clientY - can.top)*scaleY
  
  if(playerIsOnGround){
    playerYSpeed -= playerJumpForce
    playerIndex = 2
    playerIsOnGround = false
  }
  if (
  (canvas.width/2)-((resButton.width/4)/2)<x &&
  (canvas.height/5)*3<y &&
  (canvas.width/2)-((resButton.width/4)/2)+resButton.width/4>x &&
  ((canvas.height/5)*3)+resButton.height/4>y &&
  gameover
  ) {
  //console.log("press");
  restart()
}

})

function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
    
  ctx.drawImage(stars, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(moon, (canvas.width/2)-((moon.width/4)/2), 0, moon.width/4, moon.height/4)
  mountainLayer.update()
  cloudLayer.update()
  farLayer.update()
  backgroundLayer.update()
  foregroundLayer.update()
  forePropLayer.update()
  //ctx.fillStyle = "white"
  //ctx.fillRect(playerX, playerY, (32*5/2), playerHeight)
  
  ctx.drawImage(playerImg, playerIndex*(32*5), 0, (32*5), (32*5), playerX, playerY+(32*5)/2, (playerWidth/6)/2, playerHeight/2)
  if(playerIsOnGround){
  ctx.drawImage(playerShadow, playerX, playerY+(32*5)/2, (playerWidth/6)/2, playerHeight/2)
  }
  
  for(let i = 0;i<particles.length;i++){
    if(particles[i].update() == "remove"){
      particles.splice(i, 1)
      i--
    }
  }
  
  for(let i = 0;i<projectiles.length;i++){
    let obj = projectiles[i]
    //ctx.fillStyle = "red"
    //ctx.fillRect(obj.x-((rocket.width*obj.s)/2), obj.y-((rocket.height*obj.s)/2), rocket.width*obj.s,  rocket.height*obj.s)
    projectiles[i].draw()
  }
  
  ctx.drawImage(mrEggmanRight, eggX+Math.sin((uniFCount*2)*DR)*3, eggY-Math.sin((uniFCount*5)*DR)*2, 150, 150)
  
  for(let i = 0;i<obstacles.length;i++){
    obstacles[i].draw()
  }
  
  unfocusedLayer.update()
  
  if(gameover){
    ctx.drawImage(gameoverScreen, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(resButton, (canvas.width/2)-((resButton.width/4)/2), (canvas.height/5)*3, resButton.width/4, resButton.height/4)
  }
  
  ctx.fillText(Math.floor(score), canvas.width/2-(ctx.measureText(Math.floor(score)).width/2), 40)
  ctx.fillText(Math.floor(hi), canvas.width/2-(ctx.measureText(Math.floor(hi)).width/2), 20)
  
  
  /*ctx.fillRect(((canvas.width/2)-((resButton.width/4)/2)),
   ((canvas.height/5)*3),resButton.width/4,
     resButton.height/4)
  //ctx.fillStyle = "white"
  ctx.fillRect(canvas.width/8, (canvas.height/8),10,10)*/
  /*ctx.fillRect(
    (canvas.width / 2) - ((resButton.width / 4) / 2),
    (canvas.height / 5) * 3,
    resButton.width / 4,
    resButton.height / 4
  );*/
  
}





function stageUpdate(){
  if(score>1000 && stage==0){
    stage = 1
    obstaclesSpawn = false
  }
  if(score>1500 && stage==1){
    stage = 2
  }
  if(score>1550 && obstaclesSpawn==false){
    obstaclesSpawn = true
  }
  
  if(stage==1){
    eggX += (0-eggX)/100
    if(uniFCount%180==0 && stage==1 && 50>0-eggX){
      projectiles.push(new projectile(canvas.width/8, (canvas.height/3), 0.2, 90+(Math.random()*20-10)))
    }
  }
  if(stage==2){
    eggX += (-150-eggX)/100
  }   
}
}





