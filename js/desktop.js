document.addEventListener("DOMContentLoaded", () => {
  class Desktop {
    constructor(
      marca,
      sistemaOperacional,
      tamanhoDaTela,
      ram,
      modelo,
      cpu,
      preco,
      linkImg,
      link
    ) {
      this.marca = marca;
      this.sistemaOperacional = sistemaOperacional;
      this.tamanhoDaTela = tamanhoDaTela;
      this.ram = ram;
      this.modelo = modelo;
      this.cpu = cpu;
      this.preco = preco;
      this.linkImg = linkImg;
      this.link = link;
    }
  }

  const desktop_01 = new Desktop(
    "3Green Technology",
    "Windows 10",
    "17,1 Polegadas",
    "8 GB",
    "Deskop",
    "Intel Core i5",
    "1239,99",
    "https://m.media-amazon.com/images/I/61h-rFM1QdL._AC_SL1000_.jpg",
    "https://www.amazon.com.br/Computador-Completo-Desktop-Monitor-3D-051/dp/B0BVJGKCJB/ref=sr_1_3_sspa?c=ts&keywords=CPUs+de+Computadores&qid=1697584304&s=computers&sr=1-3-spons&ts_id=16364819011&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  );
  const desktop_02 = new Desktop(
    "3green Technology",
    "Windows 10",
    "19 Polegadas",
    "16 GB",
    "Office",
    "Intel Core i7",
    "1649,99",
    "https://m.media-amazon.com/images/I/51vmA52feFL._AC_SL1000_.jpg",
    "https://www.amazon.com.br/Computador-Completo-Windows-Monitor-3green/dp/B0CFYMK52W/ref=sr_1_10?c=ts&keywords=CPUs+de+Computadores&qid=1697584304&s=computers&sr=1-10&ts_id=16364819011&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
  );
  const desktop_03 = new Desktop(
    "Strong Tech",
    "Windows 10 Pro",
    "19 Polegadas",
    "16 GB",
    "Computador",
    "Intel Core i7-2600",
    "1599,01",
    "https://m.media-amazon.com/images/I/716DuGwWLAL._AC_SL1200_.jpg",
    "https://www.amazon.com.br/Computador-Intel-N%C3%BAcleos-Strong-Tech/dp/B0BS1QT16H/ref=sr_1_9?c=ts&keywords=CPUs+de+Computadores&qid=1697589446&s=computers&sr=1-9&ts_id=16364819011"
  );
  const desktop_04 = new Desktop(
    "Flex Computer",
    "Windows 10",
    "19 Polegadas",
    "8 GB",
    "Office",
    "Intel Core i5",
    "1066,41",
    "https://m.media-amazon.com/images/I/51LnfULhGYL._AC_SL1000_.jpg",
    "https://www.amazon.com.br/Computador-Flex-Computer-Monitor-Windows/dp/B09BD5PTWW/ref=sr_1_10?c=ts&keywords=CPUs%2Bde%2BComputadores&qid=1697589446&s=computers&sr=1-10&ts_id=16364819011&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&th=1"
  );
  const desktop_05 = new Desktop(
    "Skill Gaming",
    "Windows 10",
    "19 Polegadas",
    "8 GB",
    "49147",
    "Intel Core i5",
    "1369,99",
    "https://m.media-amazon.com/images/I/61xm1msZ6NL._AC_SL1200_.jpg",
    "https://www.amazon.com.br/Computador-Completo-Windows-Monitor-ElitePC/dp/B0977T1YC2/ref=sr_1_48?c=ts&keywords=CPUs+de+Computadores&qid=1697589862&s=computers&sr=1-48&ts_id=16364819011&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
  );

  var desktopsInfo = [
    desktop_01,
    desktop_02,
    desktop_03,
    desktop_04,
    desktop_05,
  ];

  //localStorage.setItem("desktops", JSON.stringify(desktopsInfo));

  //const getDesktops = localStorage.getItem("desktops");
  //const desktops = JSON.parse(getDesktops);

  desktopsInfo.forEach((element) => {
    let marca = element.marca;
    //let sistemaOperacional = element.sistemaOperacional
    //let tamanhoDaTela = element.tamanhoDaTela
    let ram = element.ram;
    let modelo = element.modelo;
    //let cpu = element.cpu
    let preco = element.preco;
    let linkImg = element.linkImg;
    let link = element.link;

    var tagDiv = document.createElement("div");
    tagDiv.className = "col-md-3 p-3";
    tagDiv.style.border = "1px solid rgba(200, 200, 200, 0.2)";

    var tagA = document.createElement("a");
    tagA.href = "#";

    var tagImg = document.createElement("img");
    tagImg.className = "img-fluid rounded";
    tagImg.src = linkImg;
    tagImg.alt = marca;
    tagImg.style.height = "20vh";

    tagA.appendChild(tagImg);
    tagDiv.appendChild(tagA);

    var tagP = document.createElement("p");
    tagP.textContent = `${marca} ${modelo}`;
    tagP.style.margin = "16px 0px 0px 1px"

    tagDiv.appendChild(tagP);

    var tagPreco = document.createElement("p");
    tagPreco.textContent = `R$ ${preco}`;

    tagDiv.appendChild(tagPreco);

    var tagButton = document.createElement("button");
    tagButton.className = "btn btn-success add-to-cart";
    tagButton.textContent = "Add to cart";

    tagDiv.appendChild(tagButton);

    document.getElementById("itens").appendChild(tagDiv);
  });
});
