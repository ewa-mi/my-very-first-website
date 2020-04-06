let data = [
  {
    text:
      "As you have already noticed, my name is Ewa, I am one of the students of the Codaisseur class 39. Nice to meet you! If you need more info, please click another button.",
    image: "myPage_me.jpg",
  },

  {
    text:
      "I come from Poland, however I am currently based in beautiful and windy Netherlands. I am surrounded by bikes and tourists since I live in the heart of Amsterdam.",
    image: "myPage_home.jpg",
  },

  {
    text:
      "I am a graphic designer, who is looking for the new self-improvement opportunities. I am currently focused on studying computer programming and web design.",
    image: "myPage_job.jpg",
  },

  {
    text:
      "Besides coding, I like digital painting, playing all the music instruments I posses, watching movies or TV shows and traveling as far as possible.",
    image: "myPage_hobby.jpg",
  },

  {
    text:
      "I have intention to learn as much as I can in area of programming. I would like to become a full-stack developer. At the moment I am exploring ins and outs of backend.",
    image: "myPage_plans.jpg",
  },
];

let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");
let descript = document.querySelector(".descript");
let photo = document.querySelector(".photo");

item1.addEventListener("click", function () {
  descript.innerHTML = data[0].text;
  photo.setAttribute("src", data[0].image);
});

item2.addEventListener("click", function () {
  descript.innerHTML = data[1].text;
  photo.setAttribute("src", data[1].image);
});

item3.addEventListener("click", function () {
  descript.innerHTML = data[2].text;
  photo.setAttribute("src", data[2].image);
});

item4.addEventListener("click", function () {
  descript.innerHTML = data[3].text;
  photo.setAttribute("src", data[3].image);
});

item5.addEventListener("click", function () {
  descript.innerHTML = data[4].text;
  photo.setAttribute("src", data[4].image);
});
