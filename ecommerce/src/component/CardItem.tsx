import { useSelector } from "react-redux";
import useFetch from "../customize/useFetch";

const CardItem = (props: any) => {
  const data = props.data;
  const folder: String[] = [];
  // const { data: categories } = useFetch("http://localhost:8080/categories");
  const dataRedux: any = useSelector((state) => state);
  const dataCategory = dataRedux?.categoryReducer?.categories;
  dataCategory.map(
    (item: {
      cate_id: number;
      cate_name: string;
      slug: string;
      folder: string;
    }) => {
      folder.push(item.folder);
    }
  );
  return (
    <div className="card-item">
      <div className="product-tag">
        <img src="images/khai-truong.png" alt="" />
      </div>
      <div className="product-img">
        <a href={`/product/${data.slug}`}>
          <img
            src={`/images/${folder[data.cate_id - 1]}/${data.imgName}`}
            alt={data.imgName}
          />
        </a>
      </div>
      <div className="product-detail">
        <p className="product-name">
          <a href={`/product/${data.slug}`}>{data.productName}</a>
        </p>
        <div className="product-price">
          <p className="current-price">{data.crrPrice}₫</p>
          <del className="old-price">{data.oldPrice}₫</del>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
