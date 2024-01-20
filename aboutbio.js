const nextbutton = document.querySelector('#nextbutton');

var click = 0;

nextbutton.onclick = () => {
    var x = document.getElementById("info");
    if (click == 0) {
        x.innerHTML = 
        `
        (2/6) i completed my undergrad at columbia university, where I majored in computer science and minored
        in economics.
        `;
        click = 1;
    } else if (click == 1) {
        x.innerHTML = 
        `
        (3/6) during my undergrad, i was privileged to work closely with 
        <a id="proflinks" href="https://www.azizilab.com">Prof. Elham Azizi</a>, who introduced me to single-cell
        transcriptomics, primarily in the context of cancer immunology.
        `;
        click = 2;
    } else if (click == 2) {
        x.innerHTML = 
        `
        (4/6) beyond that, i'm grateful to have also worked with
        <a id="proflinks" 
        href="https://daninolab.nyc">Prof. Tal Danino</a> at columbia, as well as
        <a id="proflinks" 
        href="https://www.utc.edu/directory/cnb331-college-of-engineering-and-computer-science-hong-qin/cnb331">
        Prof. Hong Qin</a> and 
        <a id="proflinks" 
        href="https://www.utc.edu/directory/wxs271-biology-geology-and-environmental-science-hope-klug/wxs271">
        Prof. Hope Klug</a>
         at the university of tennessee at chattanooga.
        `;
        click = 3;
    } else if (click == 3) {
        x.innerHTML = `
        (5/6) i also spent two summers working as a software development engineer intern at amazon, working
        on the items and offers platform within amazon selection and catalog systems.
        `;
        click = 4;
    } else if (click == 4) {
        x.innerHTML = `
        (6/6) my publications and teaching are listed on my cv. 
        please feel free to contact me via email, about research
        or anything else!
        `;
        click = 5;
    } else if (click == 5) {
        x.innerHTML = `
        (1/6) i'm a phd student in computer science at princeton university, advised by 
        <a id="proflinks" href="https://pritykinlab.github.io">Prof. Yuri Pritykin</a>.
        my research is in single-cell genomics, currently focusing on topics in 
        cell communication and spatial transcriptomics.
        `;
        click = 0;
    }
}