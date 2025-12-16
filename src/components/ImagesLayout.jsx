import React from 'react'

function ImagesLayout() {
    return (
        <>
            <section className="text-gray-600 body-font" aria-labelledby="gallery-heading">
                <div className="container px-5 py-15 mx-auto flex flex-wrap">
                    <h2 id="gallery-heading" className="sr-only">Gallery</h2>

                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="गैलरी चित्र 1"
                                    className="w-full object-cover h-full object-center block"
                                    src="./blank.webp"
                                    loading="lazy"
                                    decoding="async"
                                    width="500"
                                    height="300"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="गैलरी चित्र 2"
                                    className="w-full object-cover h-full object-center block"
                                    src="./blank.webp"
                                    loading="lazy"
                                    decoding="async"
                                    width="501"
                                    height="301"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="गैलरी चित्र 3"
                                    fetchPriority="auto"
                                    className="w-full h-full object-cover object-center block"
                                    src="./blank.webp"
                                    loading="lazy"
                                    decoding="async"
                                    width="600"
                                    height="360"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="गैलरी चित्र 4"
                                    fetchPriority="auto"
                                    className="w-full h-full object-cover object-center block"
                                    src="./blank.webp"
                                    loading="lazy"
                                    decoding="async"
                                    width="600"
                                    height="360"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="गैलरी चित्र 5"
                                    fetchPriority="auto"
                                    className="w-full object-cover h-full object-center block"
                                    src="./blank.webp"
                                    loading="lazy"
                                    decoding="async"
                                    width="500"
                                    height="300"
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="गैलरी चित्र 6"
                                    fetchPriority="auto"
                                    className="w-full object-cover h-full object-center block"
                                    src="./blank.webp"
                                    loading="lazy"
                                    decoding="async"
                                    width="500"
                                    height="300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default ImagesLayout