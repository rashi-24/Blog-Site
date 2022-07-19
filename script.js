class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    addTitle() {
        let title_card = document.createElement("h1");
        title.setAttribute("id", "blog-title")
        console.log(title_card);
        document.getElementById("card-text").appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription() {
        let para = document.createElement("p");
        para.setAttribute("id", "blog-description");
        console.log(para);
        document.getElementById("card-text").appendChild(para);
        para.innerHTML += this.detail;
    }
}

var add = document.getElementById("addBlog");
add.addEventListener("click", function() {
    document.getElementById("popupContact").style.display = "block";
});

function popupclose() {
    document.getElementById("popupContact").style.display = "none";
}

document.getElementById("close").addEventListener("click", popupclose);

let submitpost = document.getElementById("post");
submitpost.addEventListener("click", function() {
    let image = document.createElement("img");
    image.src = "./assets/javascript.png";
    image.setAttribute("id", "image");
    document.getElementById("card-text").appendChild(image);

    let title = document.getElementById("title").value;
    let detail = document.getElementById("detail").value;
    let obj = new Blog(title, detail);
    obj.addTitle();
    obj.addDescription();
    document.getElementById("popupContact").style.display = "none";
})