import ClaraPoster from '../assets/ClaraAllTheWay.png';
import EastWestPoster from '../assets/EastMeetsWest.png';
import HomePoster from '../assets/WhatWeCallHome.png';
import VcnnPoster from '../assets/ValhallaCallsNoNames.png';
import ButterflyPoster from '../assets/Butterfly.png';
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
    albumUrl?: string;
    albumEmbedUrl?: string;
    imdbUrl?: string;
    trailerUrl?: string;
}

export const compositionProjects: ProjectData[] = [
    {
        id: 1,
        title: 'Clara All The Way',
        alt: 'Clara All The Way',
        src: ClaraPoster,
        description: 'Short film released in 2026 by Dodge College of Film and Media Arts.',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/clara-all-the-way-original-motion-picture-score/1889833811',
        imdbUrl: 'https://www.imdb.com/title/tt39288939/',
        trailerUrl: 'https://www.youtube.com/embed/b2zKKCkBXr4?si=jAzAhJxgen_lE6yV'
    },
    {
        id: 2,
        title: 'East Did Meet West',
        alt: 'East Did Meet West',
        src: EastWestPoster,
        description: 'Released 2025. A 15 minute short film inspired by the 1930s court case Roldan vs. Los Angeles County.',
        imdbUrl: 'https://www.imdb.com/title/tt36746504/',
        trailerUrl: 'https://www.youtube.com/embed/Cdpl-WJI2-s?si=NF9ZnZXmvfY6twKl'
    },
    {
        id: 3,
        title: 'What We Call Home',
        alt: 'What We Call Home',
        src: HomePoster,
        description: 'Short Documentary film released in 2026 at Dodge College of Film and Media Arts.',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/what-we-call-home-original-documentary-soundtrack/6770711861'
    },
    {
        id: 4,
        title: 'Valhalla Calls No Names',
        alt: 'Valhalla Calls No Names',
        src: VcnnPoster,
        description: 'Short film released in 2026 directed by Graham Rose.',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/valhalla-calls-no-names-original-motion-picture-soundtrack/6765790184',
        imdbUrl: 'https://www.imdb.com/it/title/tt43649963/?ref_=ttfc_ov_bk',
    },
    {
        id: 5,
        title: 'Butterfly',
        alt: 'Butterfly',
        src: ButterflyPoster,
        description: 'Released August 13th, 2025. Produced by: Amazon MGM Studios, 3AD, & Boom! Studios.',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/butterfly-prime-video-original-series-soundtrack/1831125115',
        imdbUrl: 'https://www.imdb.com/title/tt26672404/',
        trailerUrl: 'https://www.youtube.com/embed/RBmyiyZba3s?si=XA3xgO4o_RnwSOVL'
    },
    {
        id: 6,
        title: 'Mirage',
        alt: 'Mirage',
        src: MiragePoster,
        description: 'Short Animated film released in 2025 at Dodge College of Film and Media Arts.',
    },
    {
        id: 7,
        title: 'Salvador',
        alt: 'Salvador',
        src: SalvadorPoster,
        description: 'Released by: Henry Joe Productions October 17th, 2025.',
        imdbUrl: 'https://www.imdb.com/title/tt38494983/',
    },
];

export const orchestrationProjects: ProjectData[] = [
     {
        id: 11,
        title: 'End of Oak Street',
        alt: 'End of Oak Street',
        src: OakStreetPoster,
        description: 'Released August 14th, 2026. Produced by: Bad Robot, Good Fear Content, & Jackson Pictures',
        imdbUrl: 'https://www.imdb.com/title/tt27165187/',
        trailerUrl: 'https://www.youtube.com/embed/3oB9AxspVow?si=ct-K7EclY1DMuBVD'
    },
    {
        id: 12,
        title: 'Spiderman New Day',
        alt: 'Spiderman New Day',
        src: SpidermanPoster,
        description: 'Released July 31st, 2026. Produced by Columbia Pictures, Marvel Studios, and Pascal Pictures',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/suite-new-day-from-spider-man-brand-new-day-soundtrack/6790445715',
        imdbUrl: 'https://www.imdb.com/title/tt22084616/',
        trailerUrl: 'https://www.youtube.com/embed/P3uI5sLosKU?si=wJbqoEFCooGp9_3H'
    },
    {
        id: 13,
        title: 'Zootopia 2',
        alt: 'Zootopia 2',
        src: ZootopiaPoster,
        description: 'Released November 26th, 2025. Produced by: Walt Disney Pictures & Animation Studios',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/zootopia-2-original-motion-picture-soundtrack/1842202783',
        imdbUrl: 'https://www.imdb.com/title/tt26443597/',
        trailerUrl: 'https://www.youtube.com/embed/BjkIOU5PhyQ?si=A87De_8HN-hzcoPh'
    },
    {
        id: 14,
        title: 'Butterfly',
        alt: 'Butterfly',
        src: ButterflyPoster,
        description: 'Released August 13th, 2025. Produced by: Amazon MGM Studios, 3AD, & Boom! Studios.',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/butterfly-prime-video-original-series-soundtrack/1831125115',
        imdbUrl: 'https://www.imdb.com/title/tt26672404/',
        trailerUrl: 'https://www.youtube.com/embed/RBmyiyZba3s?si=XA3xgO4o_RnwSOVL'
    },
    {
        id: 15,
        title: 'Fantastic 4 First Steps',
        alt: 'Fantastic 4 First Steps',
        src: Fantastic4Poster,
        description: 'Released July 25th, 2025 Produced by: Pinewood Studios, New Zealand Film Comission, & Marvel Studios',
        albumEmbedUrl: 'https://embed.music.apple.com/us/album/the-fantastic-four-first-steps-original-motion/1826653923',
        imdbUrl: 'https://www.imdb.com/title/tt10676052/',
        trailerUrl: 'https://www.youtube.com/embed/18QQWa5MEcs?si=xoFekykUJauG6WnM'
    },
];
