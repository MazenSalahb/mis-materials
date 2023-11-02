const edaraContainer = document.getElementById("edara");
const revContainer = document.getElementById("rev");
const bidmContainer = document.getElementById("bidm");
const aisContainer = document.getElementById("ais");
const dssContainer = document.getElementById("dss");

// const edara = [
//   {
//     title: "تعريف المنهج",
//     link: "https://t.me/c/1856934719/2349",
//   },
//   {
//     title: "فصل 1",
//     link: "https://t.me/c/1856934719/2350",
//   },
//   {
//     title: "ملاحظات فصل 1",
//     link: "https://t.me/c/1856934719/2364",
//   },
//   {
//     title: "فصل 2",
//     link: "https://t.me/c/1856934719/2351",
//   },
//   {
//     title: "ملاحظات فصل 2",
//     link: "https://t.me/c/1856934719/2400",
//   },
//   {
//     title: "فصل 3",
//     link: "https://t.me/c/1856934719/2352",
//   },
//   {
//     title: "ملاحظات فصل 3",
//     link: "https://t.me/c/1856934719/2487",
//   },
//   {
//     title: "فصل 4",
//     link: "https://t.me/c/1856934719/2547",
//   },
// ];

const getEdaraMat = () => {
  // let edaraMat = [];
  // res = await fetch("https://testlaravelagain.000webhostapp.com/api/materials");
  // console.log(res.data);

  fetch("https://testlaravelagain.000webhostapp.com/api/materials/1")
    .then((response) => response.json())
    .then((json) => showEdaraMat(json));

  const showEdaraMat = (materials) => {
    for (const material of materials) {
      edaraContainer.innerHTML += `<a href=${material.link} target="_blank"><div class="material subject">
            <img src="../../imgs/pdf.png" alt="materials" />
            <h1>${material.title}</h1>
          </div></a>`;
    }
  };
};
getEdaraMat();

const getRevMat = () => {
  // let edaraMat = [];
  // res = await fetch("https://testlaravelagain.000webhostapp.com/api/materials");
  // console.log(res.data);

  fetch("https://testlaravelagain.000webhostapp.com/api/materials/2")
    .then((response) => response.json())
    .then((json) => showEdaraMat(json));

  const showEdaraMat = (materials) => {
    for (const material of materials) {
      revContainer.innerHTML += `<a href=${material.link} target="_blank"><div class="material subject">
            <img src="../../imgs/pdf.png" alt="materials" />
            <h1>${material.title}</h1>
          </div></a>`;
    }
  };
};
getRevMat();

const getBidmMat = () => {
  // let edaraMat = [];
  // res = await fetch("https://testlaravelagain.000webhostapp.com/api/materials");
  // console.log(res.data);

  fetch("https://testlaravelagain.000webhostapp.com/api/materials/3")
    .then((response) => response.json())
    .then((json) => showEdaraMat(json));

  const showEdaraMat = (materials) => {
    for (const material of materials) {
      bidmContainer.innerHTML += `<a href=${material.link} target="_blank"><div class="material subject">
            <img src="../../imgs/pdf.png" alt="materials" />
            <h1>${material.title}</h1>
          </div></a>`;
    }
  };
};
getBidmMat();

const getAisMat = () => {
  // let edaraMat = [];
  // res = await fetch("https://testlaravelagain.000webhostapp.com/api/materials");
  // console.log(res.data);

  fetch("https://testlaravelagain.000webhostapp.com/api/materials/4")
    .then((response) => response.json())
    .then((json) => showEdaraMat(json));

  const showEdaraMat = (materials) => {
    for (const material of materials) {
      aisContainer.innerHTML += `<a href=${material.link} target="_blank"><div class="material subject">
            <img src="../../imgs/pdf.png" alt="materials" />
            <h1>${material.title}</h1>
          </div></a>`;
    }
  };
};
getAisMat();

const getDssMat = () => {
  // let edaraMat = [];
  // res = await fetch("https://testlaravelagain.000webhostapp.com/api/materials");
  // console.log(res.data);

  fetch("https://testlaravelagain.000webhostapp.com/api/materials/5")
    .then((response) => response.json())
    .then((json) => showEdaraMat(json));

  const showEdaraMat = (materials) => {
    for (const material of materials) {
      dssContainer.innerHTML += `<a href=${material.link} target="_blank"><div class="material subject">
            <img src="../../imgs/pdf.png" alt="materials" />
            <h1>${material.title}</h1>
          </div></a>`;
    }
  };
};
getDssMat();
