const FrontTag = document.getElementsByClassName("FrontTag")

for (var i = 0; i < FrontTag.length; i++) {
    FrontTag.item(i).onmouseenter = (event) => {
        event.target.style.transform = "scale(1.5)"; //1.2배 확대
        event.target.style.zIndex = 1;
        event.target.style.transition = "all 0.5s";// 속도
    };

    FrontTag.item(i).onmouseout = (event) => {
        event.target.style.transform = "scale(1.0)"; //1.2배 확대
        event.target.style.zIndex = 0;
        event.target.style.transition = "all 0.5s";// 속도
    };

    FrontTag.item(i).onclick = (event) => {
        location.href = `./html/${event.target.id}.html`
    };
}
