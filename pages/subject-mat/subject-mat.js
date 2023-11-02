const edaraContainer = document.getElementById("edara");

const edara = [
  {
    title: "تعريف المنهج",
    link: "https://t.me/c/1856934719/2349",
  },
  {
    title: "فصل 1",
    link: "https://t.me/c/1856934719/2350",
  },
  {
    title: "ملاحظات فصل 1",
    link: "https://t.me/c/1856934719/2364",
  },
  {
    title: "فصل 2",
    link: "https://t.me/c/1856934719/2351",
  },
  {
    title: "ملاحظات فصل 2",
    link: "https://t.me/c/1856934719/2400",
  },
  {
    title: "فصل 3",
    link: "https://t.me/c/1856934719/2352",
  },
  {
    title: "ملاحظات فصل 3",
    link: "https://t.me/c/1856934719/2487",
  },
  {
    title: "فصل 4",
    link: "https://t.me/c/1856934719/2547",
  },
];

for (const material of edara) {
  edaraContainer.innerHTML += `<a href=${material.link} target="_blank"><div class="material subject">
            <img src="../../imgs/pdf.png" alt="materials" />
            <h1>${material.title}</h1>
          </div></a>`;
}
