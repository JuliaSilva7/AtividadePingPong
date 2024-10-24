
import { useState,useEffect } from "react"
import SensorChart from '../../components/Graficos/Grafico'
import '../../css/estilo.css'

const Resultados=()=>{

    const [temperatura, setTemperatura]=useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/temperatura/")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setTemperatura(res)
            
        }).catch((error)=>{
            console.log(error)
        })
    })

    return(
        <>
        <div className="grafico">
            <h1>Gráficos</h1>
            <SensorChart data={temperatura}/>



            
        </div>

        </>
    )
}
export default Resultados