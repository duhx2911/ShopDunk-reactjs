const initialState = { value: 0 };

function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case "increment": {
      return { ...state, value: action.state };
    }
    case "decrement":
      return { ...state, value: action.state };
    default:
      return state;
  }
}

// PRODUCT
interface IProduct {
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  slug: string;
  imgName: string;
}
const productReducer = (
  state: { loading: boolean; products: IProduct[] } = {
    loading: false,
    products: [],
  },
  action: { products: IProduct[]; product: IProduct; id: number; type: string }
) => {
  switch (action.type) {
    case "SHOW_LOADING": {
      return { ...state, isLoading: true };
    }
    case "HIDE_LOADING": {
      return { ...state, isLoading: false };
    }
    case "SAVE_PRODUCTS": {
      return { ...state, isLoading: false, products: action.products || [] };
    }
    case "SAVE_LIST_PRODUCTS": {
      let lstProduct = state.products;
      if (action.product) {
        lstProduct = [...lstProduct, action.product];
      }
      return {
        ...state,
        isLoading: false,
        products: lstProduct,
      };
    }
    case "UPDATE_LIST_PRODUCTS": {
      let lstProduct = state.products;
      let newLstProduct;
      if (action.product) {
        newLstProduct = lstProduct.map((item: IProduct) => {
          if (item.id === action.product.id) {
            return action.product;
          }
          return item;
        });
      }

      return {
        ...state,
        isLoading: false,
        products: newLstProduct,
      };
    }
    case "DELETE_PRODUCT": {
      let lstProduct = state.products;
      let newLstProduct;
      if (action.id) {
        newLstProduct = lstProduct.filter(
          (item: IProduct) => item.id !== Number(action.id)
        );
      }
      return {
        ...state,
        isLoading: false,
        products: newLstProduct,
      };
    }
    default:
      return state;
  }
};

// CATEGORY
interface ICategory {
  cate_id: number;
  cate_name: string;
  slug: string;
  folder: string;
}
const categoryReducer = (
  state: { loading: boolean; categories: ICategory[] } = {
    loading: false,
    categories: [],
  },
  action: { categories: ICategory[]; category: ICategory; type: string }
) => {
  switch (action.type) {
    case "SHOW_LOADING_CATE": {
      return { ...state, isLoading: true };
    }
    case "HIDE_LOADING_CATE": {
      return { ...state, isLoading: false };
    }
    case "SAVE_CATEGORIES": {
      return {
        ...state,
        isLoading: false,
        categories: action.categories || [],
      };
    }
    case "SAVE_LIST_CATEGORIES": {
      let listCategories = state.categories;
      if (action.category) {
        listCategories = [...listCategories, action.category];
      }
      return {
        ...state,
        isLoading: false,
        categories: listCategories,
      };
    }
    default:
      return state;
  }
};

// PRODUCT IMAGE
interface IProductImage {
  id: number;
  product_id: string;
  imgDetail: string;
}
const imageProductReducer = (
  state: { loading: boolean; images: IProductImage[] } = {
    loading: false,
    images: [],
  },
  action: {
    images: IProductImage[];
    image: IProductImage;
    id: number;
    type: string;
  }
) => {
  switch (action.type) {
    case "SHOW_LOADING_IMG": {
      return { ...state, isLoading: true };
    }
    case "HIDE_LOADING_IMG": {
      return { ...state, isLoading: false };
    }
    case "SAVE_IMAGES": {
      return {
        ...state,
        isLoading: false,
        images: action.images || [],
      };
    }
    case "SAVE_LIST_IMAGES": {
      let listImages = state.images;
      if (action.image) {
        listImages = [...listImages, action.image];
      }
      return {
        ...state,
        isLoading: false,
        images: listImages,
      };
    }
    case "UPDATE_LIST_IMAGES": {
      let listImages = state.images;
      let newLstImage;
      if (action.image) {
        newLstImage = listImages.map((item: IProductImage) => {
          if (item.id === action.image.id) {
            return action.image;
          }
          return item;
        });
      }

      return {
        ...state,
        isLoading: false,
        images: newLstImage,
      };
    }
    case "DELETE_IMAGE": {
      let listImages = state.images;
      let newLstImage;
      if (action.id) {
        newLstImage = listImages.filter(
          (item: IProductImage) => item.id !== Number(action.id)
        );
      }
      return {
        ...state,
        isLoading: false,
        images: newLstImage,
      };
    }
    default:
      return state;
  }
};

export { counterReducer, productReducer, categoryReducer, imageProductReducer };
