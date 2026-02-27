const nextbutton = document.querySelector('#nextbutton');

var click = 0;

nextbutton.onclick = () => {
    var x = document.getElementById("info");
    if (click == 0) {
        x.innerHTML = `
        (2/5) i develop computational methods that enable novel insights into spatial organization and cell communication in complex tissues, 
        particularly in cancer and immune contexts.
        `;
        click = 1;
    } else if (click == 1) {
        x.innerHTML = 
        `
        (3/5) i completed my undergrad at columbia university, where I majored in computer science and minored
        in economics.
        `;
        click = 2;
    } else if (click == 2) {
        x.innerHTML = 
        `
        (4/5) during my undergrad, i was fortunate to work closely with 
        <a id="proflinks" href="https://www.azizilab.com">Prof. Elham Azizi</a>, who first introduced me to single cell transcriptomics and immunology research.
        `;
        click = 3;
    } else if (click == 3) {
        x.innerHTML = `
        (5/5) publications are on my cv, contact is on homepage!
        `;
        click = 4;
    } else if (click == 4) {
        x.innerHTML = `
        (1/5) i'm a 4th year phd student in computer science at princeton university, fortunate to be advised by 
        <a id="proflinks" href="https://pritykinlab.github.io">Prof. Yuri Pritykin</a>.
        `;
        click = 0;
    }
}