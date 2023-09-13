import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>

            <nav class="container mx-auto bg-pink-600 border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" width={120} height={120} /></Link>

                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <Link class="enlace" href="/">Inicio</Link>
                            <Link class="enlace" href="/amigos/cercanos/">Cercanos</Link>
                            <Link class="enlace" href="/amigos/cliente/">Cliente</Link>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
})
