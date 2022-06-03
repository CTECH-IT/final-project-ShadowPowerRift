const button1 = document.getElementById('click1');
const button2 = document.getElementById('click2');
const button3 = document.getElementById('click3');
const button4 = document.getElementById('click4');
const txt = document.getElementById('about_txt');


// This basically tells you when you click this button display this text 
function txtChange() {
    txt.innerHTML = "American Bird Conservancy is dedicated to conserving wild birds and their habitats throughout the Americas. This mission has guided us throughout our history of more than 25 years.";
}


button1.addEventListener('click', txtChange);

function txtChange2() {
    txt.innerHTML = "(540) 253-5780";
}


button2.addEventListener('click', txtChange2);

function txtChange3() {
    txt.innerHTML = "Our Bird Conservation Strategic Framework — summed up in the pyramid at left — shows how we approach bird conservation. It's simple yet successful. With an emphasis on achieving results and working in partnership, we take on the greatest problems facing birds today, innovating and building on rapid advancements in science to halt extinctions, protect habitats, eliminate threats and build capacity for bird conservation. Choosing a small but feisty hummingbird as its symbol, ABC has gone on to become known for our conservation results and ability to leverage still greater accomplishments through partnerships"
}


button3.addEventListener('click', txtChange3);

function txtChange4() {
    txt.innerHTML = "Mike Parr, Erin Chen, Shawn Graff, Steve Holmer, Daniel Lebbin, Merrie Morrison, Clare Nielsen, William Sheehan, EJ Williams, Jennifer Davis, Naamal De Silva, Brad Keitt, Christiana Wilson, Jim Giocomo, Kacy Ray, Aimee Roberson, Aimee Roberson";
}


button4.addEventListener('click', txtChange4);