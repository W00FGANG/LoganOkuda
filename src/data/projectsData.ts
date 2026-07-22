import ClaraPoster from '../assets/ClaraAllTheWay.png';
import EastWestPoster from '../assets/EastMeetsWest.png';
import HomePoster from '../assets/WhatWeCallHome.png';
import VcnnPoster from '../assets/ValhallaCallsNoNames.png';
import ButterflyPoster from '../assets/Butterfly.png';
import ButterflyAlbumCover from '../assets/ButterflyAlbumCover.png';
import MiragePoster from '../assets/Mirage.png';
import SalvadorPoster from '../assets/Salvador.png';

import SpidermanPoster from '../assets/SpidermanNewDay.png';
import OakStreetPoster from '../assets/EndOfOakStreet.png';
import ZootopiaPoster from '../assets/Zootopia2.png';
import Fantastic4Poster from '../assets/Fantastic4FirstSteps.png';

export interface ProjectData {
    id: number;
    title: string;
    alt: string;
    src: string;
    description: string;
    albumCover: string;
    imdbUrl: string;
    trailerUrl: string;
}

export const compositionProjects: ProjectData[] = [
    {
        id: 1,
        title: 'Clara All The Way',
        alt: 'Clara All The Way',
        src: ClaraPoster,
        description: 'Placeholder details for Clara All The Way.',
        albumCover: ClaraPoster, // Fallback to poster if no album cover
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/b2zKKCkBXr4?si=jAzAhJxgen_lE6yV'
    },
    {
        id: 2,
        title: 'East Did Meet West',
        alt: 'East Did Meet West',
        src: EastWestPoster,
        description: 'Placeholder details for East Did Meet West.',
        albumCover: EastWestPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 3,
        title: 'What We Call Home',
        alt: 'What We Call Home',
        src: HomePoster,
        description: 'Placeholder details for What We Call Home.',
        albumCover: HomePoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 4,
        title: 'Valhalla Calls No Names',
        alt: 'Valhalla Calls No Names',
        src: VcnnPoster,
        description: 'Placeholder details for Valhalla Calls No Names.',
        albumCover: VcnnPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 5,
        title: 'Butterfly',
        alt: 'Butterfly',
        src: ButterflyPoster,
        description: 'Released by: Amazon MGM Studios, 3AD, and Boom! Studios August 13th, 2025.',
        albumCover: ButterflyAlbumCover,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/RBmyiyZba3s?si=XA3xgO4o_RnwSOVL'
    },
    {
        id: 6,
        title: 'Mirage',
        alt: 'Mirage',
        src: MiragePoster,
        description: 'Placeholder details for Mirage.',
        albumCover: MiragePoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 7,
        title: 'Salvador',
        alt: 'Salvador',
        src: SalvadorPoster,
        description: 'Placeholder details for Salvador.',
        albumCover: SalvadorPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
];

export const orchestrationProjects: ProjectData[] = [
    {
        id: 11,
        title: 'Spiderman New Day',
        alt: 'Spiderman New Day',
        src: SpidermanPoster,
        description: 'Placeholder details for Spiderman New Day.',
        albumCover: SpidermanPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 12,
        title: 'End of Oak Street',
        alt: 'End of Oak Street',
        src: OakStreetPoster,
        description: 'Placeholder details for End of Oak Street.',
        albumCover: OakStreetPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 13,
        title: 'Zootopia 2',
        alt: 'Zootopia 2',
        src: ZootopiaPoster,
        description: 'Placeholder details for Zootopia 2.',
        albumCover: ZootopiaPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 14,
        title: 'Fantastic 4 First Steps',
        alt: 'Fantastic 4 First Steps',
        src: Fantastic4Poster,
        description: 'Placeholder details for Fantastic 4 First Steps.',
        albumCover: Fantastic4Poster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
    {
        id: 15,
        title: 'Butterfly',
        alt: 'Butterfly',
        src: ButterflyPoster,
        description: 'Released by: Amazon MGM Studios, 3AD, and Boom! Studios August 13th, 2025.',
        albumCover: ButterflyPoster,
        imdbUrl: '#',
        trailerUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr'
    },
];
