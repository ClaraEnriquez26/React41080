import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ContainerProduct from "./Item";
import ItemDetail from './ItemDetail';
import Fetch from "../Utils/Fetch";

const DetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        Fetch(1000, dato.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div>
        <ContainerProduct />
        <ItemDetail item={dato}/>
        </div>
    );
  }

export default DetailContainer;