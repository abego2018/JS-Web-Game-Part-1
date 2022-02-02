
function newImage(imageSrc, posX, posY){

let img = document.createElement('img')
img.src = imageSrc
img.style.position = 'fixed'
img.style.left = posX
img.style.bottom = posY
document.body.append(img)

}

function newItem(itemSrc, posX, posY){
let item = document.createElement('img')
item.src = itemSrc
item.position = 'fixed'
item.left = posX
item.bottom = posY
document.body.append(item)

item.addEventListener('dblclick', function(){
    item.remove()
})
}




//Loading assets

newImage('assets/green-character.gif','100px', '100px'); // Load character
newImage('assets/pine-tree.png','450px', '200px');      //Load pine-tree
newImage('assets/tree.png', '200px', '300px');          //Load tree
newImage('assets/pillar.png', '350px', '100px');        //Load pillar      
newImage('assets/crate.png', '150px', '200px');         //Load crate
newImage('assets/well.png', '500px', '425px');          //Load well      

//Loading player items
newItem('assets/sheild.png', '305px', '185px');         //Loading shield
newItem('assets/sword.png', '500px', '405px');          //Loading sword
newItem('assets/staff.png', '600px', '100px');          //Loading staff 