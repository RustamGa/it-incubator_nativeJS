const sml = document.getElementById("small")

function onClickHandler(e) {
    console.log(e.target.id)
}

sml.onclick = onClickHandler