import { useState } from "react";
let listCart: any = [];
interface DataType {
  key: string;
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  imgName: string;
  slug: string;
  quantity: number;
}

const InputNumber = (props: any) => {
  const record = props.data;
  const [quantity, setQuantity] = useState(record.quantity);
  const addQuantity = (product: DataType) => {
    if (window.localStorage.getItem("listCart")) {
      listCart = JSON.parse(window.localStorage.getItem("listCart") || "[]");
    }
    if (product) {
      const recordCart = listCart.filter(
        (record: any) => record.id === product.id
      );
      if (recordCart.length) {
        const newList = listCart.map((record: any) => {
          if (record.id === product.id) {
            return {
              ...product,
              quantity: record.quantity + 1,
            };
          }
          return record;
        });
        setQuantity(product.quantity + 1);
        localStorage.setItem("listCart", JSON.stringify(newList));
        window.location.reload();
      } else {
        alert("Sản phẩm không tồn tại");
      }

      // Cart.push(product);
      // window.localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  };
  const subtractQuantity = (product: DataType) => {
    if (window.localStorage.getItem("listCart")) {
      listCart = JSON.parse(window.localStorage.getItem("listCart") || "[]");
    }
    if (product) {
      const recordCart = listCart.filter(
        (record: any) => record.id === product.id
      );
      if (recordCart.length) {
        if (recordCart[0].quantity > 1) {
          const newList = listCart.map((record: any) => {
            if (record.id === product.id) {
              return {
                ...product,
                quantity: record.quantity - 1,
              };
            }
            setQuantity(product.quantity - 1);
            return record;
          });
          localStorage.setItem("listCart", JSON.stringify(newList));
          window.location.reload();
        } else {
          if (window.confirm("Bạn có muốn xóa sản phẩm")) {
            const newList = listCart.filter(
              (item: any) => item.id !== product.id
            );
            localStorage.setItem("listCart", JSON.stringify(newList));
          }
        }
      } else {
        alert("Sản phẩm không tồn tại");
      }

      // Cart.push(product);
      // window.localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  };

  return (
    <div className="cart-quantity-input">
      <svg
        onClick={() => subtractQuantity(record)}
        id="cart-quantity-input-subtract114459"
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
      >
        <g clip-path="url(#clip0_10158_65576)">
          <path
            d="M-0.00390625 5.90234H11.0039C11.1133 5.90234 11.207 5.86328 11.2852 5.78516C11.3633 5.70182 11.4023 5.60547 11.4023 5.49609C11.4023 5.38672 11.3633 5.29297 11.2852 5.21484C11.207 5.13672 11.1133 5.09766 11.0039 5.09766H-0.00390625C-0.0768229 5.09766 -0.144531 5.11589 -0.207031 5.15234C-0.264323 5.1888 -0.311198 5.23828 -0.347656 5.30078C-0.384115 5.35807 -0.402344 5.42318 -0.402344 5.49609C-0.402344 5.57422 -0.384115 5.64453 -0.347656 5.70703C-0.311198 5.76432 -0.264323 5.8112 -0.207031 5.84766C-0.144531 5.88411 -0.0768229 5.90234 -0.00390625 5.90234Z"
            fill="#0066CC"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_10158_65576">
            <rect width="11" height="11" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <input type="text" id="quantity-value-input" value={quantity} />
      <svg
        onClick={() => addQuantity(record)}
        id="cart-quantity-input-add114459"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
      >
        <g clip-path="url(#clip0_10158_65579)">
          <path
            d="M-0.304688 6.5C-0.304688 6.61458 -0.265625 6.71094 -0.1875 6.78906C-0.104167 6.86719 -0.0104167 6.90625 0.09375 6.90625H5.19531V12.0078C5.19531 12.1172 5.23438 12.2109 5.3125 12.2891C5.39583 12.3672 5.49219 12.4062 5.60156 12.4062C5.71094 12.4062 5.80469 12.3672 5.88281 12.2891C5.96094 12.2109 6 12.1172 6 12.0078V6.90625H11.1016C11.2109 6.90625 11.3047 6.86719 11.3828 6.78906C11.4609 6.71094 11.5 6.61458 11.5 6.5C11.5 6.39062 11.4609 6.29688 11.3828 6.21875C11.3047 6.14062 11.2109 6.10156 11.1016 6.10156H6V1C6 0.890625 5.96094 0.796875 5.88281 0.71875C5.80469 0.635417 5.71094 0.59375 5.60156 0.59375C5.49219 0.59375 5.39583 0.635417 5.3125 0.71875C5.23438 0.796875 5.19531 0.890625 5.19531 1V6.10156H0.09375C-0.0104167 6.10156 -0.104167 6.14062 -0.1875 6.21875C-0.265625 6.29688 -0.304688 6.39062 -0.304688 6.5Z"
            fill="#0066CC"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_10158_65579">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="translate(0 0.5)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
    // <div className=""></div>
  );
};
export default InputNumber;
