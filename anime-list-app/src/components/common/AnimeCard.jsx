import React from "react";
import { imgUrl } from "../../util/helperFunctions";

const AnimeCard = ({ anime, position }) => {
    console.log('position: ', position);

    const { title, description, release, rank, genre, episodes, image
    } = anime
    const url = image.data.attributes.url
    return (
        <div>
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    {position && <div className="lg:w-1/2 px-5  sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src={imgUrl(url)} alt="stats" />
                    </div>}
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">{title}</h1>
                            <div className="leading-relaxed">{description}</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-2xl text-gray-900">{release
                            }</h2>
                            <p className="leading-relaxed">release
                            </p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-2xl text-gray-900">{rank}</h2>
                            <p className="leading-relaxed">Ranked</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-2sxl text-gray-900">{genre}</h2>
                            <p className="leading-relaxed">Genre</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-2xl text-gray-900">{episodes}</h2>
                            <p className="leading-relaxed">Episodes</p>
                        </div>
                    </div>
                   { !position && <div className="lg:w-1/2 px-2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src={imgUrl(url)} alt="stats" />
                    </div>}

                </div>
            </section>
        </div>
    );
};

export default AnimeCard;
