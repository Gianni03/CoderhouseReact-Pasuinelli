const data = [
  {
    id: 1,
    title: "JOHN PETRUCCI TRINITY PICK",
    price: 200,
    stock: 10,
    categoria: "Ultex",
    detail:
      "This pick combines a custom Small Tri shape with the contoured shoulders of the Flow® Pick shape with a Jazz III-inspired tip for a playing experience that's smoother, faster, and more disciplined than ever before.",
    img: "/assets/img/prods/jp001.jpg",
  },
  {
    id: 2,
    title: "GATOR GRIP® JAZZ III PICK",
    price: 150,
    stock: 25,
    categoria: "Jazz III",
    detail:
      "Gator Grip Picks feature a matte surface for a tight, nonslip grip and a molded, beveled edge for a fast attack and a soft release. The Gator Grip Jazz III Pick combines all of those qualities with the speed and precision of the Jazz III shape for a smoother playing experience and a more articulate tone.",
    img: "/assets/img/prods/jp002.jpg",
  },
  {
    id: 3,
    title: "JOHN PETRUCCI SIGNATURE JAZZ III PICK",
    price: 200,
    stock: 15,
    categoria: "Jazz III",
    detail:
      "Designed to the prog rock legend's own specifications, the 1.5mm John Petrucci Jazz III is made from Ultex and features a raised JP logo grip and slick polished tip.",
    img: "/assets/img/prods/jp003.jpg",
  },
  {
    id: 4,
    title: "ERIC JOHNSON JAZZ III",
    price: 250,
    stock: 6,
    categoria: "Jazz III",
    detail:
      "To create the Eric Johnson Jazz III Pick, we laser-scanned a vintage Jazz III from Eric's collection and recreated it with the most advanced molding techniques available. The result is a Jazz III with a more refined and smooth tip, more flexibility, and a matte finish with raised logos for an incredible gripping surface.",
    img: "/assets/img/prods/jp004.jpg",
  },
  {
    id: 5,
    title: "ROCK III NYLON CUSTOM JAZZ III",
    price: 300,
    stock: 12,
    categoria: "Jazz III",
    detail:
      "The Rock III Pick effortlessly glides across strings to produce notes that are full, distinct, and consistent—even at high gain—with classic Nylon warmth to smooth out the rough edges.",
    img: "/assets/img/prods/j3001.jpg",
  },
  {
    id: 6,
    title: "HETFIELD'S WHITE FANG™ CUSTOM FLOW® PICK 1.14MM",
    price: 500,
    stock: 15,
    categoria: "Flow",
    detail:
      "This pick perfectly complements James Hetfield's hard-charging riffage, featuring a Flow Pick profile for expert maneuverability, blended beveled edges for a super snappy attack, and a custom grip so that the pick stays put when digging in.",
    img: "/assets/img/prods/hetfield.jpg",
  },
  {
    id: 7,
    title: "MISHA MANSOOR CUSTOM DELRIN FLOW® PICK LIVE .65MM",
    price: 170,
    stock: 4,
    categoria: "Flow",
    detail:
      "This Custom Flow Pick is made from Delrin for long life, a smooth release, and warm tone to complement the precision and control of its aerodynamic shape. The 'Live' .65mm gauge offers built-in compression that keeps your notes in tune when that live energy hits and it's time to dig in.",
    img: "/assets/img/prods/bulb.jpg",
  },
  {
    id: 8,
    title: "JOHN PETRUCCI FLOW® PICK",
    price: 500,
    stock: 14,
    categoria: "Flow",
    detail:
      "This pick is designed to complement to complement John Petrucci's huge sound and majestically intricate passages.",
    img: "/assets/img/prods/jp.jpg",
  },
  {
    id: 9,
    title: "TORTEX® STANDARD PICK .88MM",
    price: 200,
    stock: 10,
    categoria: "Tortex",
    detail:
      "Tortex Picks are highly durable with great memory and just the right amount of flexibility for a snappy, fluid attack that's bright and crisp. Whether you're playing searing electric leads or strumming acoustic passages, the appeal of Tortex as a sonic paintbrush is universal.",
    img: "/assets/img/prods/tortex01.jpg",
  },
  {
    id: 10,
    title: "TORTEX® TIII PICK 1.50MM",
    price: 200,
    stock: 10,
    categoria: "Tortex",
    detail:
      "The TIII features the tone and feel of Tortex with the speed and precision of a Jazz III tip.",
    img: "/assets/img/prods/tortex02.jpg",
  },
  {
    id: 11,
    title: "TORTEX® FLEX™ JAZZ III PICK 1.14M",
    price: 200,
    stock: 10,
    categoria: "Tortex",
    detail:
      "Tortex Flex Jazz III Picks combine the memory and durability of Tortex and the flexibility and warmth of nylon with the Jazz III shape for superior control, speed, and precision.",
    img: "/assets/img/prods/tortex03.jpg",
  },

];

export default function getItems() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}


export function getItem(idItem) {

  return new Promise((resolve, reject) => {
    let itemFind = data.find((item)=> {
      return item.id === Number(idItem)
    });

    if (itemFind) resolve(itemFind);
    else reject(new Error("item no encontrado"));
  });
}

export function getItemByCategory(cat){
  return new Promise((resolve, reject) => {

    let itemFind = data.filter((item)=> {
    
      return item.categoria === cat;
    
    });

    if (itemFind) resolve(itemFind);
    else reject(new Error("item no encontrado"));
  });
}


export function getItemStock(ItemStock) {

  return new Promise((resolve, reject) => {
    let itemFind = data.find((item)=> {
      return item.stock === Number(ItemStock)
    });

    if (itemFind) resolve(itemFind);
    else reject(new Error("item no encontrado"));
  });
}