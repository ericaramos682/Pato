let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    switch (keyName) {
        case "ArrowUp":
            boxTop -= 10
            document.getElementById("box").style.top = boxTop + "px";
            break;
        case "ArrowDown":
            boxTop += 10
            document.getElementById("box").style.top = boxTop + "px";
            break;
        case "ArrowLeft":
            boxLeft -= 10
            document.getElementById("box").style.left = boxLeft + "px";
            break;
        case "ArrowRight":
            boxLeft += 10
            document.getElementById("box").style.left = boxLeft + "px";
            break;

        default:
            break;
    }
})
const button = document.querySelector('input');


button.addEventListener('click', upButton);

function upButton() {
      button.value = 'Start machine';
      paragraph.innerText = 'Pegadinha do malandro kkkk clique em "saiba mais" e se prepare!';
}



