import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , .1, 15000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('scene')
})

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(30)

renderer.render( scene, camera )

const pointLight = new THREE.PointLight( 0xffffff )
pointLight.position.set( 1200, 400, 600 )
scene.add(pointLight)

// SkyBox

let skyboxTextures = []

const skybox_front = new THREE.TextureLoader().load(require('../assets/skybox/front1.png'))
const skybox_back = new THREE.TextureLoader().load(require('../assets/skybox/back1.png'))
const skybox_top = new THREE.TextureLoader().load(require('../assets/skybox/top1.png'))
const skybox_bottom = new THREE.TextureLoader().load(require('../assets/skybox/bottom1.png'))
const skybox_right = new THREE.TextureLoader().load(require('../assets/skybox/right1.png'))
const skybox_left = new THREE.TextureLoader().load(require('../assets/skybox/left1.png'))

skyboxTextures.push(
    new THREE.MeshStandardMaterial({map: skybox_front}),
    new THREE.MeshStandardMaterial({map: skybox_back}),
    new THREE.MeshStandardMaterial({map: skybox_top}),
    new THREE.MeshStandardMaterial({map: skybox_bottom}),
    new THREE.MeshStandardMaterial({map: skybox_right}),
    new THREE.MeshStandardMaterial({map: skybox_left})
)
skyboxTextures.forEach( texture => {
    texture.side = THREE.BackSide
})

const skybox = new THREE.Mesh(
    new THREE.BoxGeometry( 15000, 15000, 15000),
    skyboxTextures
)

// Moon
// const moon = new THREE.Mesh(
//     new THREE.SphereGeometry( 6, 64, 64 ),
//     new THREE.MeshStandardMaterial({
//         map: new THREE.TextureLoader().load(require('../assets/moon/testmoon.jpg')),
//         normalMap: new THREE.TextureLoader().load(require('../assets/moon/testnormal.jpg')),
//     })
    
// )
// moon.position.set(10,0,0)

// planet
const planet = new THREE.Mesh(
    new THREE.SphereGeometry(512,64,64),
    new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load(require('../assets/planet/jupiter.jpg'))
    })
)
planet.position.set(-100,100,-1200)

const resize = () =>{
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}
const setupResize = () =>{
    window.addEventListener('resize', resize.bind(this))
}

scene.add(/*moon,*/ planet, skybox)

// const random = (min,max) =>{
//     return Math.random() * (max - min) + min 
// }
//Stars
// let stars = []
// const addStars = () =>{
//     // const texture = new THREE.TextureLoader().load(require('../assets/stars/star_blue01.png'))
//     const geometry = new THREE.SphereGeometry(2, 25, 24)
//     const material = new THREE.MeshStandardMaterial({
//         // map: texture
//         color: 0xffffff
//     })
//     const star = new THREE.Mesh( geometry, material)
//     const x = random(-1000, 1000)
//     const y = random (-1000, 1000)
//     const z = random(-10000, -1000)
//     star.position.set(x, y, z)
//     // scene.add(star)
//     stars.push(star)
// }
// Array(1000).fill().forEach(addStars)
// stars.forEach(star => scene.add(star))

setupResize()

const animate = () =>{
    requestAnimationFrame( animate )
    // moon.rotation.y += .001
    skybox.rotation.x += .00005
    skybox.rotation.y += .00005
    skybox.rotation.z += .00005
    planet.rotation.y += .0005
    // stars.forEach(star => {
    //     star.position.x += 2
    // })
    resize()
    renderer.render( scene, camera )
}
animate()