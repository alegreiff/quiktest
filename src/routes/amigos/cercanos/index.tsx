import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';


export const usePokemonList = routeLoader$(async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
    const data = await resp.json();


    return data;
})

export const useMetricasList = routeLoader$(async () => {
    const resp = await fetch(`https://script.google.com/macros/s/AKfycbzQz4O8jvtW_8lglgcgX2n6nDBG-zHYSVmKb_pgirLj9CbTqOZ-qWCrQWRuloAUxu5UZw/exec`);
    const data = await resp.json();

    console.log(data)
    return data;
})

export default component$(() => {
    const metricasResp = useMetricasList();

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
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>
                <div class="m-5 flex flex-col justify-center items-center">Pokhemonn</div>

            </div>
            <div>
                {JSON.stringify(metricasResp.value)}
            </div>
        </>
    )
})

export const head: DocumentHead = {
    title: "Cercanos",

};
