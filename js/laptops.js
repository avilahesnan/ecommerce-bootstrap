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
      link,
      btn
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
      this.btn = btn;
    }
  }

  const desktop_01 = new Desktop(
    "Apple",
    "MacOS",
    "13 Polegadas",
    "SSD",
    "Macbook Air",
    "Apple",
    "7,899.98",
    "https://m.media-amazon.com/images/I/41j6lmxrbPL._AC_SL1000_.jpg",
    "https://www.amazon.com.br/MacBook-Air-13-polegadas-Processador-Apple-GPU-7%E2%80%91core/dp/B09L528HM1/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=DHI5GNHSM4PR&keywords=laptop&qid=1697667406&sprefix=laptops%2Caps%2C849&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  );
  const desktop_02 = new Desktop(
    "Apple",
    "MacOS",
    "13.6 Polegadas",
    "8 GB",
    "Macbook Air",
    "Others",
    "13,499.00",
    "https://m.media-amazon.com/images/I/51ppYyWOrNL._AC_SL1000_.jpg",
    "https://www.amazon.com.br/Notebook-Apple-MacBook-Air-13-polegadas/dp/B0B3CQVB62/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=DHI5GNHSM4PR&keywords=laptop&qid=1697667406&sprefix=laptops%2Caps%2C849&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  );
  const desktop_03 = new Desktop(
    "ASUS",
    "Chrome OS",
    "14 Polegadas",
    "8 GB",
    "Chromebook",
    "Intel Core i7-2600",
    "1,599.01",
    "https://m.media-amazon.com/images/I/71Kw0eLj+aL._AC_SL1500_.jpg",
    "https://www.amazon.com.br/Computador-Intel-N%C3%BAcleos-Strong-Tech/dp/B0BS1QT16H/ref=sr_1_9?c=ts&keywords=CPUs+de+Computadores&qid=1697589446&s=computers&sr=1-9&ts_id=16364819011"
  );
  const desktop_04 = new Desktop(
    "Lenovo",
    "Windows 11",
    "15,6 Polegadas",
    "4 GB",
    "IdeaPad 3i",
    "Intel Core i3-1115G4",
    "1,979.10",
    "https://m.media-amazon.com/images/I/61PrCgQ2KwL._AC_SL1500_.jpg",
    "https://www.amazon.com.br/Notebook-Lenovo-i3-1115G4-Graphics-82MD000ABR/dp/B09ZKCVTFR/ref=sr_1_13?crid=1MKQJ8XPPY711&keywords=laptop&qid=1700077576&sprefix=%2Caps%2C201&sr=8-13&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
  );
  const desktop_05 = new Desktop(
    "VAIO FE15",
    "Windows 11",
    "15,6 Polegadas",
    "8 GB",
    "49147",
    "Intel Core i5 11th",
    "3,199.00",
    "https://m.media-amazon.com/images/I/51EgiK+12uL._AC_SL1000_.jpg",
    "https://www.amazon.com.br/Notebook-VAIO-Intel%C2%AE-Antirreflexo-Windows/dp/B0CB4V3L1B/ref=sr_1_7?crid=1MKQJ8XPPY711&keywords=laptop&qid=1700077576&sprefix=%2Caps%2C201&sr=8-7&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
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
    let btnElement = element.btn;

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
    tagPreco.textContent = `$ ${preco}`;

    tagDiv.appendChild(tagPreco);

    var tagButton = document.createElement("button");
    tagButton.className = "btn btn-success add-to-cart";
    tagButton.textContent = "Add to cart";

    tagDiv.appendChild(tagButton);

    document.getElementById("itens").appendChild(tagDiv);
  });
});
