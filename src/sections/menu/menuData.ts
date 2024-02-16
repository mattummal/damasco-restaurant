const menuData = {
  starters: [
    {
      id: 1,
      name: "Hummus with Olive Oil",
      description: "A traditional Middle Eastern dip made from chickpeas, tahini, lemon juice, and garlic, topped with extra virgin olive oil and served with pita bread.",
      pictureUrl: require("../../assets/starters/img1.png"),
      price: "€34",
    },
    {
      id: 2,
      name: "Baba Ghanoush",
      description: "A creamy dip made from roasted eggplant, tahini, garlic, lemon juice, and olive oil, served with warm pita bread.",
      pictureUrl: require("../../assets/starters/img2.png"),
      price: "€20",
    },
    {
      id: 3,
      name: "Falafel",
      description: "Deep-fried chickpea patties seasoned with herbs and spices, served with tahini sauce and a side of fresh vegetables.",
      pictureUrl: require("../../assets/starters/img3.png"),
      price: "€12",
    },
  ],

  breakfast: [
    {
      id: 1,
      name: "Shakshuka",
      description: "A popular Middle Eastern breakfast dish made with poached eggs in a spicy tomato and pepper sauce, seasoned with cumin, paprika, and garlic, and served with crusty bread.",
      pictureUrl: require("../../assets/breakfast/img1.png"),
      price: "€31",
    },
    {
      id: 2,
      name: "Labneh with Za'atar",
      description: "Strained yogurt served with olive oil, za'atar spice blend, and fresh herbs, accompanied by warm pita bread.",
      pictureUrl: require("../../assets/breakfast/img2.png"),
      price: "€18",
    },
    {
      id: 3,
      name: "Ful Medames",
      description: "A hearty breakfast dish made from cooked fava beans seasoned with olive oil, garlic, lemon juice, and cumin, served with hard-boiled eggs, diced tomatoes, and parsley.",
      pictureUrl: require("../../assets/breakfast/img3.png"),
      price: "€24",
    },
    {
      id: 4,
      name: "Manakish",
      description: "Flatbread topped with za'atar spice blend, olive oil, and sometimes cheese or ground meat, baked until crispy and served hot.",
      pictureUrl: require("../../assets/breakfast/img4.png"),
      price: "€17",
    },
  ],

  dinner: [
    {
      id: 1,
      name: "Mansaf",
      description: "A traditional Jordanian dish consisting of lamb cooked in a fermented yogurt sauce, served over rice and garnished with almonds and pine nuts.",
      pictureUrl: require("../../assets/dinner/img1.png"),
      price: "€20",
    },
    {
      id: 2,
      name: "Kebab Halabi",
      description: "Skewered and grilled chunks of marinated meat, typically lamb or beef, served with grilled vegetables and rice or flatbread.",
      pictureUrl: require("../../assets/dinner/img2.png"),
      price: "€43",
    },
    {
      id: 3,
      name: "Shawarma Platter",
      description: "Thinly sliced seasoned meat, typically lamb, chicken, or beef, served with tahini sauce, pickles, and pita bread.",
      pictureUrl: require("../../assets/dinner/img3.png"),
      price: "€50",
    },
    {
      id: 4,
      name: "Kibbeh",
      description: "Deep-fried croquettes made from bulgur wheat, minced onions, and ground meat, usually lamb or beef, seasoned with spices such as cumin and cinnamon.",
      pictureUrl: require("../../assets/dinner/img4.png"),
      price: "€40",
    },
  ],

  drinks: [
    {
      id: 1,
      name: "Jallab",
      description: "A refreshing Middle Eastern drink made from dates, grape molasses, rose water, and pine nuts, served over crushed ice.",
      pictureUrl: require("../../assets/drinks/img1.png"),
      price: "€70",
    },
    {
      id: 2,
      name: "Tamarind Juice",
      description: "A tangy and sweet beverage made from tamarind pulp, sugar, and water, served chilled.",
      pictureUrl: require("../../assets/drinks/img2.png"),
      price: "€13",
    },
    {
      id: 3,
      name: "Ayran",
      description: "A traditional Turkish yogurt drink made with yogurt, water, and salt, often served cold as a refreshing accompaniment to meals.",
      pictureUrl: require("../../assets/drinks/img3.png"),
      price: "€24",
    },
  ],
};

export default menuData;
