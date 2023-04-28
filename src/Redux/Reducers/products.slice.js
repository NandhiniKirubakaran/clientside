import { createSlice } from "@reduxjs/toolkit";

export const Product = createSlice({
  name: "product",
  initialState: {
    items: [{
      id: 1,
      name: 'Tandoori Chicken',
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qve2l4bfixfg9umvs8ce',
      description: 'Very Spicy | Serves 1 | Mint chattany only',
      price: '₹235',
      type: ['non veg'],
  },
  {
      id: 2,
      name: 'Prawn Biriyani',
      image: '	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yphysao4fnt3jc4irolu',
      description: 'Very Spicy | Serves 1 ',
      price: '₹300',
      type: ['non veg'],
  },
  {
      id: 3,
      name: 'Chicken Fried Rice',
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/khttwayluy7jcxmlo43m',
      description: 'Medium Spicy | Comes with raita | 750 ml | Richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices | Served with bone/boneless |',
      price: '₹210',
      type: ['non veg'],
  },
  {
      id: 4,
      name: 'Special Chicken Biryani',
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pztbvqlterwmxy06jczo',
      description: 'Medium Spicy | Comes with raita | 750 ml | Special biryani with succulent chicken layered with aromatic basmati rice and spices | Served with bone/boneless |',
      price: '₹270',
      type: ['non veg'],
  },
  {
      id: 5,
      name: 'Delhi Style Falooda',
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ebi4mvhjn4ci4eky5adi',
      description: 'Very delicious | Serves 1 | ',
      price: '₹159',
      type: ['non veg'],
  },
  {
      id: 6,
      name: 'Kesar Falooda',
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pvbnuaetkjoqjuovn7i4',
      description: 'Very delicious | Serves 1 | ',
      price: '₹149',
      type: ['non veg'],
  }],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.items.push(product);
    },
    removeProduct: (state, action) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  removeProduct,
  incrementByQuantity,
} = Product.actions;

export default Product.reducer;



































// import { createSlice } from "@reduxjs/toolkit";

// export const product = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     saveAllProducts: (state, action) => {
//       const product = action.payload;
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       // return state.items
//       state.products = product;
//     },
//     getAllProducts: (state, action) => {
//       state.value -= 1;
//     },
//     getAllProductsByNamespace: (state, action) => {
//       state.value -= 1;
//     },
//     incrementByQuantity: (state, action) => {
//       state.value -= 1;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {
//   saveAllProducts,
//   getAllProducts,
//   incrementByQuantity,
// } = product.actions;

// export default product.reducer;
