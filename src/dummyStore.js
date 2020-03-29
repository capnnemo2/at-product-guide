const dummyStore = [
  {
    id: 1,
    productCode: "ST",
    productName: "Small Trellis",
    productType: "trellis",
    image: {
      src: "/pics/ST-XT.jpg",
      alt: "small trellis"
    },
    mesh: [`4't x 1'w`],
    hardSteel: {
      threeEighths: [`1 x 11 1/4"`],
      oneQuarter: [`4 x 11 1/4"`]
    },
    softSteel: {
      threeEighths: [`1 x 20', bend @ 67", cut @ 134"`]
    },
    prepBend: [
      `Use the ST jig on the metal wheely table. Bend to 5-7" from jig.`
    ],
    prepWeld: [],
    weld: [`First weld: 12" from top.`],
    comments: [
      {
        id: 1,
        user_name: `Jeff`,
        content: `The jig for STs lives in my area.`
      }
    ]
  },
  {
    id: 2,
    productCode: "MT",
    productName: "Medium Trellis",
    productType: "trellis",
    image: {
      src: "/pics/ST-XT.jpg",
      alt: "medium trellis"
    },
    mesh: [`5't x 2'w`],
    hardSteel: {
      threeEighths: [`1 x 20', bend @ 92", cut @ 184"`, `1 x 23 1/4"`],
      oneQuarter: [`3 x 16"`, `1 x 27"`]
    },
    softSteel: {
      threeEighths: []
    },
    prepBend: [
      `Use the top circle on the circle jig table. Bend the cut 20' 3/8" hard steel to the second hole (in the fifth circle).`
    ],
    prepWeld: [],
    weld: [`First weld: one foot spike length up from the bottom.`],
    comments: []
  },
  {
    id: 3,
    productCode: "LT",
    productName: "Large Trellis",
    productType: "trellis",
    image: {
      src: "/pics/ST-XT.jpg",
      alt: "large trellis"
    },
    mesh: [`5't x 3'w`],
    hardSteel: {
      threeEighths: [`1 x 20', bend @ 101 1/2", cut @ 203"`, `1 x 35 1/4"`],
      oneQuarter: [`3 x 24"`, `1 x 36"`]
    },
    softSteel: {
      threeEighths: []
    },
    prepBend: [
      `Use the second circle on the circle jig table. Bend the cut 20' 3/8" hard steel to the second hole (in the fifth circle).`
    ],
    prepWeld: [],
    weld: [`First weld: one foot spike length up from the bottom.`],
    comments: [
      {
        id: 1,
        user_name: `Marty`,
        content: `These are the same as MTs, just bigger.`
      }
    ]
  },
  {
    id: 4,
    productCode: "XT",
    productName: "Extra Large Trellis",
    productType: "trellis",
    image: {
      src: "/pics/ST-XT.jpg",
      alt: "extra large trellis"
    },
    mesh: [`5'8"t x 4'w`],
    hardSteel: {
      threeEighths: [`1 x 20', bend @ 121 1/2", cut @ 3"`, `1 x 47 1/4"`],
      oneQuarter: [`3 x 27"`, `1 x 47"`]
    },
    softSteel: {
      threeEighths: []
    },
    prepBend: [
      `Use the third circle on the circle jig table. Bend the cut 20' 3/8" hard steel to the second hole (in the fifth circle).`
    ],
    prepWeld: [],
    weld: [
      `Add a piece of ⅜” with a crosspiece to the end of your table so that the entire bent 1 x 20' can rest on table with only the bottom hanging off the edge. After you slide the bent 1 x 20' into the crosspiece, mark on your table one foot spike length up from the bottom. This is your first weld location.`
    ],
    comments: [
      {
        id: 1,
        user_name: `Marty`,
        content: `These are very big.`
      },
      {
        id: 2,
        user_name: `Ben`,
        content: `Whoa, these are heavy.`
      }
    ]
  },
  {
    id: 5,
    productCode: "SA",
    productName: "Small Arbor",
    productType: "arbor",
    image: {
      src: "/pics/SA.jpg",
      alt: "small arbor"
    },
    mesh: [`16't x 1'w`],
    hardSteel: {
      threeEighths: [`2 x 20', bend @ 135", cut @ 30"`, `2 x ~10 3/8"`],
      oneQuarter: []
    },
    softSteel: {
      threeEighths: []
    },
    prepBend: [
      `Use the circle jig table, bend on the fifth circle to the second hole`
    ],
    prepWeld: [],
    weld: [`First weld: 13 1/2"`],
    comments: [
      {
        id: 1,
        user_name: `Daniel`,
        content: `I can make a million of these in one day.`
      }
    ]
  },
  {
    id: 6,
    productCode: "SB",
    productName: "Small Ball",
    productType: "topiary",
    image: {
      src: "/pics/SB-LB.jpg",
      alt: "small ball"
    },
    mesh: "",
    hardSteel: {
      threeEighths: [],
      oneQuarter: [
        `1 x 10" ring (base)`,
        `1 x 9 1/8" (base)`,
        `1 x 16" (stem)`,
        `4 x 8" (foot spikes)`,
        `8 x 14" diameter (MG pieces)`
      ]
    },
    softSteel: {
      threeEighths: []
    },
    prepBend: [
      `The 10" base rings get spun/bent on Mark's magic table motor. Use the jig that is marked for 1/4" to make 10" rings.`,
      `Use the compressed air cutter to cut the rings. Don't forget ear protection.`
    ],
    prepWeld: [
      `Weld the 10" base rings.`,
      `Mark all of the 9 1/8" base pieces in the center.`,
      `Weld the 16" stems to the 9 1/8" base pieces. Marty has a steel square so you can make a proper right angle. Hold it an extra moment so it cools straight.`,
      `Weld these T's into the rings, placing one weld on the ring connection weld. Eyeball it to make sure it stands up straight.`,
      `Weld the center rings with 2 x 14" diameter MG pieces.`
    ],
    weld: [
      `Brace the welded base piece on the edge of the table so that the ring part hangs off and the stem lies flat.`,
      `It can be helpful to mark a straight line across your table where the stem lies. This will help you keep your ball straight.`,
      `Line up the MG ring at the top of the stem. Marty has a heavy metal chunk with a handle that you should place on the ring before welding. This will keep it from moving once heated.`,
      `Weld MG ring to 16” stem.`,
      `Weld perpendicular (90 degree angle) 14” diameter MG piece.`,
      `Weld the in-between 2 x 14” diameter MG pieces (approx 45 degree angle).`,
      `Add the 4 x 8” foot spikes. Two can go under where the crosspiece of the base meets the base ring. The other two halfway around.`,
      `Flip the ball over so that the flat side of your MG faces up.`,
      `Weld on the remaining 3 x 14” diameter MG pieces exactly as you did the first side.`,
      `Backweld.`
    ],
    comments: [
      {
        id: 1,
        user_name: `Mark`,
        content: `I know electricity.`
      }
    ]
  },
  {
    id: 7,
    productCode: "FT51",
    productName: "Flat Top Trellis 5x1",
    productType: "trellis",
    image: {
      src: "/pics/FT51-54.jpg",
      alt: "ft51"
    },
    mesh: [`5't x 1'w`],
    hardSteel: {
      threeEighths: [`2 x 6'`, `2 x 11 1/4"`],
      oneQuarter: []
    },
    softSteel: {
      threeEighths: []
    },
    prepBend: [],
    prepWeld: [],
    weld: [
      `Weld the ⅜” together.`,
      `Weld the mesh to the ⅜”.`,
      `Weld all of the top of the mesh to the ⅜” before completing the side.`,
      `Rotate the product so that you can add the other side piece of ⅜”.`,
      `Weld the ⅜” together first then the closest piece of mesh.`,
      `Place your crosspiece across the bottom you can ensure that it will fit as is.
      If it is too long, ignore it for now and weld your mesh. You can burn it down to fit after.
      If it is too short, you will have to cut a new ⅜” piece. 
      If it fits, weld the bottom piece of mesh and complete the side.`,
      `Weld ⅜” crosspiece to mesh and ⅜”.`,
      `Backweld.`
    ],
    comments: [
      {
        id: 1,
        user_name: `Nate`,
        content: `I can make these!`
      }
    ]
  }
];

export default dummyStore;
