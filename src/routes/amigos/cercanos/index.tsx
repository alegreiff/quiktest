import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import type { MetricasData, Dato } from '~/interfaces';


export const usePokemonList = routeLoader$(async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
    const data = await resp.json();


    return data;
})

export const useMetricasList = routeLoader$<Dato[]>(async () => {
    const resp = await fetch(`https://script.google.com/macros/s/AKfycbxQd1Rc7h24yr2Aafp6JOMkhDmAnOuDFbCKEVhEwPcZGAGEBIZGnMGZcdU2vNuC_ChHDw/exec`);
    const data = await resp.json() as MetricasData;


    return data.datos;
})

export default component$(() => {
    const metricas = useMetricasList();

    return (
        <>
            <div class="flex flex-col">
                <span class="my-5 text-5xl">estatus</span>
                <span >Página actual: </span>
                <span >Está cargando página: </span>
            </div>
            <div class="mt-10">
                <Link class="btn btn-primary mr-2" >Anteriores</Link>
                <Link class="btn btn-primary mr-2" >Siguientes</Link>
            </div>

            <div class="grid grid-cols-6 mt-5">
                {metricas.value.map(datta => (
                    <div class="m-5 flex flex-col justify-center items-center" key={datta.sesiones}>{datta.duracion_media}</div>
                ))}


            </div>

        </>
    )
})

export const head: DocumentHead = {
    title: "Cercanos",

};
