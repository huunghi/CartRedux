// import * as types from './../constaints/ActionType';

var initialState = [{
        id: 1,
        name: 'HTC',
        image: 'http://media.4rgos.it/i/Argos/7239276_R_Z001A?$Web$&$DefaultPDP570$',
        description: 'Dòng HTC',
        price: 1600,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Oppo',
        image: 'https://static.toiimg.com/photo/60979830/.jpg',
        description: 'Dòng Oppo',
        price: 1700,
        inventory: 20,
        rating: 2
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472',
        description: 'Dòng Iphone X',
        price: 1800,
        inventory: 30,
        rating: 4
    }];

var products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default products;