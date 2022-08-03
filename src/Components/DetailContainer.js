import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../Utils/Fetch";
import ContainerProduct from "./Item";
import ItemDetail from './ItemDetail';


const DetailContainer = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
      getProductById(params.productId)
        .then((res) => {
          setProducts(res);
          setLoading(false);
        })
        .catch((res) => {
          console.log("Ocurrio un error");
        });
    }, [params]);
  
    if (!loading) {
      return (
        <div>
          <ItemDetail detail={products} />
        </div>
      );

    }
    return <div>
      <p className="DetailContainer__title">Cargando detalle..</p>
    </div>;
  };

export default DetailContainer;