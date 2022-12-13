let namee  = document.getElementById('name');
let notee = document.getElementById('note');
let checkbox = document.getElementById('checkbox');
let addnote = document.getElementById('megabutton');
let notecol1 = document.getElementById('note1')
let notecol2 = document.getElementById('note2')
let notecol3 = document.getElementById('note3')
let notecol4 = document.getElementById('note4')
let notecol5 = document.getElementById('note5')
let notecol6 = document.getElementById('note6')
let notecol7 = document.getElementById('note7')
let notecol8 = document.getElementById('note8')
let notecol9 = document.getElementById('note9')




let randomnum = 1

addnote.addEventListener('click', createNote);

function createNote(col){
    let nimi = document.getElementById('name').value;
    let note = document.getElementById('note').value;
    const div = document.createElement('div');
    let date = new Date();
    let datetime = date.getDate() + "/"
    + (date.getMonth()+1)  + "/" 
    + date.getFullYear() + " " 
    + date.getHours() + ":"  
    + date.getMinutes() + ":" 
    + date.getSeconds();
    div.innerHTML = `<h2> ${datetime} ${nimi}  </h2> ` + ` <p> ${note} </p>`;
    if (checkbox.checked === true) {
        div.classList.add('redborders')
    };
    namee.value = "";
    notee.value = "";
    switch(randomnum){
        case 1:
        case 2:
                notecol1.appendChild(div)
                randomnum++
        break;
        case 3:
        case 4:
                notecol2.appendChild(div)
                randomnum++
        break;
        case 5:
        case 6:
                notecol3.appendChild(div)
                randomnum++
        break;
        case 7:
        case 8:
                notecol4.appendChild(div)
                randomnum++
        break;
        case 9:
        case 10:
                notecol5.appendChild(div)
                randomnum++
        break;
        case 11:
        case 12:
                notecol6.appendChild(div)
                randomnum++
        break;
        case 13:
        case 14:
                notecol7.appendChild(div)
                randomnum++
        break;
        case 15:
        case 16:
                notecol8.appendChild(div)
                randomnum++
        break;
        case 17:
        case 18:
                notecol9.appendChild(div)
                randomnum++
        break;
       default:
            alert('Sinulta loppui tila!')
    }
}