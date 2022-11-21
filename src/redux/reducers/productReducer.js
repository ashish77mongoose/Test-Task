import { SET_ALL_PRODUCT, SET_FILTER_PRODUCT, SET_SELECTED_PRODUCT_DETAILS } from "../action/actionConstants";

const initialState = {
    allProduct: [],
    filterProduct: [],
    productInfo: {
        name: 'Apple iPhone 13 Pro',
        category: 'Mobile',
        price: 5469,
        storageType :['1TB','512GB','256GB','128GB'],
        brand: 'Apple',
        images: ['/images/product/Apple_iPhone-13-Pro-front.jpg', '/images/product/Apple_iPhone-13-Pro.jpg', '/images/product/Apple_iPhone-13-Pro-zoom.jpg'],
        details: 'The iPhone 13 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less). ProMotion technology with adaptive refresh rates up to 120Hz. '
    }
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload
            };
        case SET_FILTER_PRODUCT:
            return {
                ...state,
                filterProduct: action.payload
            };
        case SET_SELECTED_PRODUCT_DETAILS:
            return {
                ...state,
                productInfo: action.payload
            };
        default:
            return state;
    }
};

export default ProductReducer;
