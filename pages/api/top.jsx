// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ data: topMovies() });
}

export function topMovies() {
  const data = {
    results: [
      {
        adult: false,
        backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        genre_ids: [18, 80],
        id: 238,
        original_language: "en",
        original_title: "The Godfather",
        overview:
          "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        popularity: 91.156,
        poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        release_date: "1972-03-14",
        title: "The Godfather",
        video: false,
        vote_average: 8.7,
        vote_count: 17133,
      },
      {
        adult: false,
        backdrop_path: "/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
        genre_ids: [18, 80],
        id: 278,
        original_language: "en",
        original_title: "The Shawshank Redemption",
        overview:
          "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        popularity: 82.261,
        poster_path: "/hBcY0fE9pfXzvVaY4GKarweriG2.jpg",
        release_date: "1994-09-23",
        title: "The Shawshank Redemption",
        video: false,
        vote_average: 8.7,
        vote_count: 22912,
      },
      {
        adult: false,
        backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        genre_ids: [18, 80],
        id: 240,
        original_language: "en",
        original_title: "The Godfather Part II",
        overview:
          "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        popularity: 58.067,
        poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        release_date: "1974-12-20",
        title: "The Godfather Part II",
        video: false,
        vote_average: 8.6,
        vote_count: 10388,
      },
      {
        adult: false,
        backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        genre_ids: [18, 36, 10752],
        id: 424,
        original_language: "en",
        original_title: "Schindler's List",
        overview:
          "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        popularity: 83.292,
        poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        release_date: "1993-12-15",
        title: "Schindler's List",
        video: false,
        vote_average: 8.6,
        vote_count: 13580,
      },
      {
        adult: false,
        backdrop_path: "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
        genre_ids: [35, 18, 10749],
        id: 19404,
        original_language: "hi",
        original_title: "दिलवाले दुल्हनिया ले जायेंगे",
        overview:
          "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        popularity: 34.606,
        poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        release_date: "1995-10-19",
        title: "Dilwale Dulhania Le Jayenge",
        video: false,
        vote_average: 8.6,
        vote_count: 3989,
      },
      {
        adult: false,
        backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        genre_ids: [16, 10751, 14],
        id: 129,
        original_language: "ja",
        original_title: "千と千尋の神隠し",
        overview:
          "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        popularity: 92.606,
        poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        release_date: "2001-07-20",
        title: "Spirited Away",
        video: false,
        vote_average: 8.5,
        vote_count: 13697,
      },
      {
        adult: false,
        backdrop_path: "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
        genre_ids: [18],
        id: 389,
        original_language: "en",
        original_title: "12 Angry Men",
        overview:
          "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        popularity: 34.929,
        poster_path: "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
        release_date: "1957-04-10",
        title: "12 Angry Men",
        video: false,
        vote_average: 8.5,
        vote_count: 6892,
      },
      {
        adult: false,
        backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        genre_ids: [10749, 16, 18],
        id: 372058,
        original_language: "ja",
        original_title: "君の名は。",
        overview:
          "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        popularity: 89.208,
        poster_path: "/q719jXXEzOoYaps6babgKnONONX.jpg",
        release_date: "2016-08-26",
        title: "Your Name.",
        video: false,
        vote_average: 8.5,
        vote_count: 9327,
      },
      {
        adult: false,
        backdrop_path: "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
        genre_ids: [10749, 16],
        id: 372754,
        original_language: "ja",
        original_title: "同級生",
        overview:
          "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
        popularity: 13.187,
        poster_path: "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
        release_date: "2016-02-20",
        title: "Dou kyu sei – Classmates",
        video: false,
        vote_average: 8.5,
        vote_count: 279,
      },
      {
        adult: false,
        backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
        genre_ids: [35, 53, 18],
        id: 496243,
        original_language: "ko",
        original_title: "기생충",
        overview:
          "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        popularity: 77.677,
        poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        release_date: "2019-05-30",
        title: "Parasite",
        video: false,
        vote_average: 8.5,
        vote_count: 14915,
      },
    ],
  };
  return data;
}
