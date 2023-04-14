export default () => ({
  defaultBg: require('../../img/design/honeycombs-bg.jpg'),
  combs: [
    {
      id: '1',
      title: 'Cookware',
      bgImage: require('../../img/content/comb-1-bg.png'),
    },
    {
      id: '2',
      title: 'Mats & pillow',
      bgImage: require('../../img/content/comb-2-bg.png'),
    },
    {
      id: '3',
      title: 'Furniture',
      bgImage: require('../../img/content/comb-3-bg.png'),
    },
    {
      id: '4',
      title: 'Tents',
      bgImage: require('../../img/content/comb-4-bg.png'),
    },
    {
      id: '5',
      title: 'Hammocks',
      bgImage: require('../../img/content/comb-5-bg.png'),
    },
    {
      id: '6',
      title: 'Others',
      bgImage: require('../../img/content/comb-6-bg.png'),
    },
    {
      id: '7',
      title: 'Sleeping bags',
      bgImage: require('../../img/content/comb-7-bg.png'),
    },
    {
      id: '8',
      title: 'Backpack & Bags',
      bgImage: require('../../img/content/comb-8-bg.png'),
    },
    {
      id: '9',
      title: 'Trekking poles',
      bgImage: require('../../img/content/comb-9-bg.png'),
    },
  ],
  texts: [
    {
      id: '1',
      text: 'When creating our cookware, we took inspiration from the most famous chefs around the world.',
    },
    {
      id: '2',
      text: 'When creating our tents, we took inspiration from the most famous mountains around the world.',
    },
    {
      id: '3',
      text: 'When creating our sleeping bags, we took inspiration from the most famous national parks around the world.',
    },
    {
      id: '4',
      text: 'When creating our mats & pillows, we took inspiration from the most famous coasts around the world.',
    },
    {
      id: '5',
      text: 'When creating our hammocks, we took inspiration from the most famous beaches around the world.',
    },
    {
      id: '6',
      text: 'When creating our furniture, we took inspiration from the most beautiful trees on the planet.',
    },
    {
      id: '7',
      text: 'When creating our trekking poles, we took inspiration from the most beautiful hills around the world.',
    },
    {
      id: '8',
      text: 'When creating our backpacks & bags, we took inspiration from the most adventures places around the world.',
    },
    {
      id: '9',
      text: 'When creating our other we took inspiration in most beautiful places all around the world.',
    },
  ],
  preloadedImages: [],
  currentComb: '',
  changeBg(element) {
    element.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundImage = `url(${this.combs[0].bgImage})`;
  },
  init() {
    this.combs.forEach((comb, index) => {
      const newImg = new Image();
      newImg.src = comb.bgImage.slice(38);
      this.preloadedImages.push(newImg);
      console.log(this.preloadedImages);
    });
  },
});
