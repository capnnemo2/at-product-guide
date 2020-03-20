const dummyStore = [
  {
    id: 1,
    productCode: "ST",
    productName: "Small Trellis",
    image: "",
    mesh: `4't x 1'w`,
    hardSteel: [
      {
        threeEigths: `1 x 11 1/4"`,
        oneQuarter: `4 x 11 1/4"`
      }
    ],
    softSteel: `1 x 20', bend @ 67", cut @ 134"`,
    prepBend: `Use the ST on the metal wheely table. Bend to 5-7" from jig.`,
    prepWeld: "",
    weld: `First weld: 12" from top.`
  },
  {
    id: 2,
    productCode: "MT",
    productName: "Medium Trellis",
    image: "",
    mesh: `5't x 2'w`,
    hardSteel: [
      {
        threeEigths: [`1 x 20', bend @ 92", cut @ 184"`, `1 x 23 1/4"`],
        oneQuarter: [`3 x 16"`, `1 x 27"`]
      }
    ],
    softSteel: ``,
    prepBend: `Use the top circle on the circle jig table. Bend the cut 20' 3/8" hard steel to the second hole (in the fifth circle).`,
    prepWeld: "",
    weld: `First weld: one foot spike length up from the bottom.`
  },
  {
    id: 3,
    productCode: "LT",
    productName: "Large Trellis",
    image: "",
    mesh: `5't x 3'w`,
    hardSteel: [
      {
        threeEigths: [`1 x 20', bend @ 101 1/2", cut @ 203"`, `1 x 35 1/4"`],
        oneQuarter: [`3 x 24"`, `1 x 36"`]
      }
    ],
    softSteel: ``,
    prepBend: `Use the second circle on the circle jig table. Bend the cut 20' 3/8" hard steel to the second hole (in the fifth circle).`,
    prepWeld: "",
    weld: `First weld: one foot spike length up from the bottom.`
  },
  {
    id: 4,
    productCode: "XT",
    productName: "Extra Large Trellis",
    image: "",
    mesh: `5'8"t x 4'w`,
    hardSteel: [
      {
        threeEigths: [`1 x 20', bend @ 121 1/2", cut @ 3"`, `1 x 47 1/4"`],
        oneQuarter: [`3 x 27"`, `1 x 47"`]
      }
    ],
    softSteel: ``,
    prepBend: `Use the third circle on the circle jig table. Bend the cut 20' 3/8" hard steel to the second hole (in the fifth circle).`,
    prepWeld: "",
    weld: `First weld: Add a piece of ⅜” with a crosspiece to the end of your table so that the entire bent piece of steel can rest on table with only the bottom hanging off the edge. After you slide the bent piece of steel into the crosspiece, mark on your table one foot spike length up from the bottom. This is your first weld location.`
  }
];

export default dummyStore;
