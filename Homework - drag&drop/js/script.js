let items = document.querySelectorAll(".item")
let dropLists = document.querySelectorAll(".dropList")
items.forEach(i => {
    i.ondragstart = function(ev) {
        ev.dataTransfer.setData("id", this.id)
    }
})

dropLists.forEach(dl => {
    dl.ondragover = (ev) => ev.preventDefault()
})

dropLists.forEach(elem => {
    elem.ondrop = function(ev) {
        let index = elem.getAttribute("data-index");
        let dropId = ev.dataTransfer.getData("id");
        let element = document.getElementById(dropId)
        let item_di = element.getAttribute("data-index")
        if (item_di == index) {
            elem.append(element)
        }
    }
})