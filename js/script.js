let light = document.getElementById('light');

let body = document.getElementById('body');
let div1 = document.getElementById('line-light1');
let div2 = document.getElementById('line-light2');
let div3 = document.getElementById('line-light3');
let turnLight = true
function click(){

    if (turnLight){
        div3.style.background = '#ffd200';
        div2.style.background = '#ffda2f';
        div1.style.background = '#ffe671';
        body.style.background = '#3be4ea';
        light.setAttribute('src','pics/bulbon.gif')
        turnLight = false;
    }else {
        body.style.background = '#274344';
        div1.style.background = '#366465';
        div2.style.background = '#3e7477';
        div3.style.background = '#3c8085';
        light.setAttribute('src','pics/bulboff.gif')
        turnLight = true;
    }

}
document.getElementById('light').addEventListener('click',click);