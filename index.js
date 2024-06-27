document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        perPage: 3,
        gap: "20px",
        type: "loop",
        autoplay: true,
        interval: 2000,
        snap: true,
        breakpoints: {
            448: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        },
    });
    splide.mount();
});


const li = document.querySelectorAll('.faq-container ul li')

for(var i = 0; i < li.length; i++){
    // we will create one onclick function that will work for all li using for loop
    var listHeader = li[i].querySelectorAll('div')[0]
    listHeader.onclick = (e) => {
        // get li tag
        var parentList = e.target.parentElement.parentElement
        // now get span that have content
        var listContent = parentList.querySelector('span')
        if(listContent.parentElement.style.height == ''){
            hideAll();
            // if content div does not have any height
            listContent.parentElement.style.height = listContent.getBoundingClientRect().height + 'px'
            // now div height is equal to content span height
            // also add active class
            parentList.classList.add('active')
        }else{
            hideAll();
        }
    }
}

function hideAll(){
    for(var i = 0; i < li.length; i++){
        // now hide all
        li[i].classList.remove('active')
        li[i].querySelectorAll('div')[1].style.height = null
    }
} 