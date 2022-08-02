import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../Utils/Fetch";
import ContainerProduct from "./Item";
import ItemDetail from './ItemDetail';


const DetailContainer = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
      getProductById(params.productId)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((res) => {
          console.log("Ocurrio un error");
        });
    }, [params]);

  if (!loading) {
    return (
        <div>
        <ContainerProduct />
        <ItemDetail item={data}/>
        </div>
    );
    }
  }

export default DetailContainer;