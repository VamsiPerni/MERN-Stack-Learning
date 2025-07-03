// import { useNavigate } from "react-router";

const ProductResultCard = (props) => {
  //   const navigate = useNavigate;
  const { id, title, price, thumbnail } = props;

  return (
    <div key={id}>
      <img src={thumbnail} />
      <p>{title}</p>
      <p>Rs. {price * 85}</p>
    </div>
  );
};

export { ProductResultCard };
