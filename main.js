//document site variables

const viajes = document.querySelector(".viajes");
const select = document.querySelector("select");
const fragment = document.createDocumentFragment();
const appear = document.querySelector(".appear");
const close = document.querySelector(".close");

//arrays for card content
const travelImages = [
  {
    url: "viajes-1.jpg",
    text: "hammock on the beach",
    heading: "Trip 1",
    para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    url: "viajes-2.jpg",
    text: "beach huts",
    heading: "Trip 2",
    para: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
  {
    url: "viajes-3.jpg",
    text: "signs",
    heading: "Trip 3",
    para: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];
//event listener:
close.addEventListener("click", () => disappearImage());

//paint cards
function makeCard() {
  travelImages.forEach((item, i) => {
    //create card container and add a class to it
    const cardContainer = document.createElement("ARTICLE");
    cardContainer.classList.add("card");
    //create image, alt, src and title, attach to card container
    const cardImg = document.createElement("IMG");
    cardImg.classList.add("appear-button");
    cardImg.alt = item.text;
    cardImg.src = `viajes/${item.url}`;
    cardImg.title = item.text;
    cardImg.addEventListener("click", showImage);
    //create a h3 and text content for it, and attach to card body div
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = item.heading;
    //create a para, text content for it, and attach to card body
    const cardPara = document.createElement("p");
    cardPara.textContent = item.para;
    cardContainer.append(cardImg, cardTitle, cardPara);
    //store (attache) card container to fragment
    fragment.append(cardContainer);
  });
  viajes.append(fragment);
}

//make image pop up
function showImage(event) {
  appear.style.display = "block";
  let appearImage = document.querySelector(".appear img");
  appearImage.src = event.target.src;
}

function disappearImage(event) {
  appear.style.display = "none";
}
// start: call functions on document load
document.addEventListener("DOMContentLoaded", () => {
  makeCard();
});
