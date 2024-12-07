const movies = [
    {
      id: "1",
      title: "Showdown in Little Tokyo",
      poster: "https://image.tmdb.org/t/p/w500/dqWBvqgaaeTJF9iCj3BYiJAwm7M.jpg",
      overview:
        "An American with a Japanese upbringing, Chris Kenner is a police officer assigned to the Little Tokyo section of Los Angeles. Kenner is partnered with Johnny Murata, a Japanese-American who isn't in touch with his roots. Despite their differences, both men excel at martial arts, and utilize their formidable skills when they go up against Yoshida, a vicious yakuza drug dealer with ties to Kenner's past.",
      release_date: 682909200,
      genres: ["Action", "Thriller"],
    },
    {
      id: "2",
      title: "The Bookshop",
      poster: "https://image.tmdb.org/t/p/w500/nh2ZpwuTKjY0tTGcsGu7TwOpT4p.jpg",
      overview:
        "Set in an small English town in 1959, the story of a woman who decides, against polite but ruthless local opposition, to open a bookshop, a decision which becomes a political minefield.",
      release_date: 1510272000,
      genres: ["Romance", "Drama"],
    },
    {
      id: "3",
      title: "2 Days in Paris",
      poster: "https://image.tmdb.org/t/p/w500/4yf8vcgJtADTTPP0Ltq2KhqLfdE.jpg",
      overview:
        "Adam Goldberg delivers 'an uproarious study in transatlantic culture panic' as Jack, an anxious, hypochondriac-prone New Yorker vacationing throughout Europe with his breezy, free-spirited Parisian girlfriend, Marion. But when they make a two-day stop in Marion's hometown, the couple's romantic trip takes a turn as Jack is exposed to Marion's sexually perverse and emotionally unstable family.",
      release_date: 1170979200,
      genres: ["Comedy", "Romance"],
    },
    {
      id: "4",
      title: "Space Station 76",
      poster: "https://image.tmdb.org/t/p/w500/cToUKM0dDUaLMW4Lgr3QXHlzqdM.jpg",
      overview:
        "A comedic drama about a group of people (and several robots) living on a space station in a 1970’s-version of the future. When a new Assistant Captain arrives, she inadvertently ignites tensions among the crew, prompting them to confront their darkest secrets. Barely contained lust, jealousy, and anger all bubble to the surface, becoming just as dangerous as the asteroid that’s heading right for them.",
      release_date: 1411088400,
      genres: ["Drama", "Comedy", "Science Fiction"],
    },
    {
      id: "5",
      title: "I Am a Hero",
      poster: "https://image.tmdb.org/t/p/w500/4RnmHtCLtbBHD9jagVlcSzJTWX6.jpg",
      overview:
        "Hideo Suzuki is a 35-year-old mangaka assistant, whose life seem to be stuck around his exhausting but low-paying job, unfulfilled dreams, strange hallucinations and unsatisfying relationships. He sees himself as a supporting character in his own life, has low self-esteem, resulting in frustration. One day, the world as Hideo knows it is shattered by the presence of a disease that turns people into homicidal maniacs, whose first instinct is to attack and devour the nearest human.",
      release_date: 1458691200,
      genres: ["Action", "Science Fiction", "Fantasy", "Horror"],
    },
    {
      id: "6",
      title: "October Sky",
      poster: "https://image.tmdb.org/t/p/w500/vjRSVHAqQo6t7faNVQj3WNSJWUv.jpg",
      overview:
        "Based on the true story of Homer Hickam, a coal miner's son who was inspired by the first Sputnik launch to take up rocketry against his father's wishes, and eventually became a NASA scientist.",
      release_date: 919382400,
      genres: ["Drama", "Family"],
    },
    {
      id: "7",
      title: "The Fisher King",
      poster: "https://image.tmdb.org/t/p/w500/5mb1IV53luUNTRyF3TSC77X1KZs.jpg",
      overview:
        "Two troubled men face their terrible destinies and events of their past as they join together on a mission to find the Holy Grail and thus to save themselves.",
      release_date: 684378000,
      genres: ["Comedy", "Drama"],
    },
    {
      id: "8",
      title: "Money Talks",
      poster: "https://image.tmdb.org/t/p/w500/3OfCX2s3LITot1AUGtmM7Wz2IwT.jpg",
      overview:
        "Sought by police and criminals, a small-time huckster makes a deal with a TV newsman for protection.",
      release_date: 872211600,
      genres: ["Comedy"],
    },
    {
      id: "9",
      title: "The Delta Force",
      poster: "https://image.tmdb.org/t/p/w500/lW94s7xxkdOzYcueaqGJwcVVvjt.jpg",
      overview:
        "A 707 aircraft jetliner on its way from Athens to Rome and then to New York City is hijacked by Lebanese terrorists. The terrorists demand that the pilot take them to Beirut. What the terrorists don't realize is that an elite team of commandoes led by Major McCoy (Norris) and by Colonel Alexander (Marvin) has been called into service to eliminate all terrorists on the jetliner.",
      release_date: 508723200,
      genres: ["Action", "Thriller", "Adventure"],
    },
    {
      id: "10",
      title: "Angels in the Outfield",
      poster: "https://image.tmdb.org/t/p/w500/wbEekli22n2y6oUx2cVUz7i0d3Q.jpg",
      overview:
        "Roger is a foster child whose irresponsible father promises to get his act together when Roger's favourite baseball team, the California Angels, wins the pennant. The problem is that the Angels are in last place, so Roger prays for help to turn the team around. Sure enough, his prayers are answered in the form of angel Al.",
      release_date: 774234000,
      genres: ["Comedy", "Family", "Fantasy"],
    },
    {
      id: "11",
      title: "Book of Dragons",
      poster: "https://image.tmdb.org/t/p/w500/yDHcJcMV28IaLLikRETxuHjKMVt.jpg",
      overview:
        "So you want to be a dragon trainer do you? Prepare yourself for adventure, excitement and training as Hiccup, Astrid, Toothless and Gobber tell the legend behind the Book of Dragons and reveal insider training secrets about new, never-before-seen dragons.",
      release_date: 1321315200,
      genres: ["Fantasy", "Animation", "Action", "Comedy", "Family"],
    },
    {
      id: "12",
      title: "Loro 2",
      poster: "https://image.tmdb.org/t/p/w500/ownWAXr4egDy9nAa2jrtoWNpa5l.jpg",
      overview:
        "'Loro', in two parts, is a period movie that chronicles, as a fiction story, events likely happened in Italy (or even made up) between 2006 and 2010.  'Loro' wants to suggest in portraits and glimps, through a composite constellation of characters, a moment in history, now definitively ended, which can be described in a very summary picture of the events as amoral, decadent but extraordinarily alive.  Additionally, 'Loro' wishes to tell the story of some Italians, fresh and ancient people at the same time: souls from a modern imaginary Purgatory who, moved by heterogeneous intents like ambition, admiration, affection, curiosity, personal interests, establish to try and orbit around the walking Paradise that is the man named Silvio Berlusconi.",
      release_date: 1525914000,
      genres: ["Drama"],
    },
    {
      id: "13",
      title: "Heaven's Gate",
      poster: "https://image.tmdb.org/t/p/w500/kW4Vk31nhtKPKGuYMaVATq3wcHC.jpg",
      overview:
        "Harvard graduate James Averill (Kris Kristofferson) is the sheriff of prosperous Jackson County, Wyo., when a battle erupts between the area's poverty-stricken immigrants and its wealthy cattle farmers. The politically connected ranch owners fight the immigrants with the help of Nathan Champion (Christopher Walken), a mercenary competing with Averill for the love of local madam Ella Watson (Isabelle Huppert). As the struggle escalates, Averill and Champion begin to question their decisions.",
      release_date: 343440000,
      genres: [],
    },
    {
      id: "14",
      title: "The Devil's Double",
      poster: "https://image.tmdb.org/t/p/w500/mpzo9adHhc9WPFtAnbZEHbOff8U.jpg",
      overview:
        "A chilling vision of the House of Saddam Hussein comes to life through the eyes of the man who was forced to become the double of Hussein's sadistic son.",
      release_date: 1297382400,
      genres: ["Drama", "Action", "Thriller", "Crime", "War"],
    },
    {
      id: "15",
      title: "One Million Years B.C.",
      poster: "https://image.tmdb.org/t/p/w500/qVcQpoOqGrgNEdahRRzxEZkEouG.jpg",
      overview:
        "As the Earth wrestles with its agonising birth, the peoples of this barren and desolate world struggle to survive. Driven by animal instinct they compete against the harsh conditions, their giant predators, and warring tribes. When two people from opposing clans fall in love, existing conventions are shattered forever as each tribe struggles for supremacy and Man embarks on his tortuous voyage of civilisation.",
      release_date: -97632000,
      genres: ["Action", "Adventure", "Fantasy"],
    },
    {
      id: "16",
      title: "Digimon: The Movie",
      poster: "https://image.tmdb.org/t/p/w500/rCcsd92GO6f9lMDXb0mkzde22PG.jpg",
      overview:
        "The first story focused on Tai and Kari Kamiya four years before their adventure in the Digital World. It shows their first encounter with Digimon and what happened to them (as well as the other children). Tai and Kari wake one morning to find a Digi-Egg that came out of their computer the night before and the egg soon hatches, revealing a Botamon. The Digimon then evolves into Koromon and then Agumon (not the same one that became friends with Tai in the series, and yet, somehow, both Koromon and Kari remember each other), who then goes out and unintentionally destroys a good part of the neighborhood with Kari riding on his back. A second Digi-Egg appears in the sky to reveal an evil digimon, Parrotmon. Agumon then Digivolves to Greymon but isn't strong enough to beat Parrotmon and is knocked out. Tai grabs Kari's whistle and wakes up Greymon, who defeats Parrotmon and disappears with him.",
      release_date: 953251200,
      genres: ["Fantasy", "Animation", "Science Fiction", "Family"],
    },
    {
      id: "17",
      title: "The Little Vampire",
      poster: "https://image.tmdb.org/t/p/w500/zBGfZGKX3KJnljxsX6r24lzRe0i.jpg",
      overview:
        "Based on the popular books, the story tells of Tony who wants a friend to add some adventure to his life. What he gets is Rudolph, a vampire kid with a good appetite. The two end up inseparable, but their fun is cut short when all the hopes of the vampire race could be gone forever in single night. With Tony's access to the daytime world, he helps them to find what they've always wanted.",
      release_date: 972608400,
      genres: ["Family", "Adventure", "Comedy", "Fantasy"],
    },
    {
      id: "18",
      title: "Conquest 1453",
      poster: "https://image.tmdb.org/t/p/w500/zb4m1lzt3LQwiiQaozvvwHG0wc4.jpg",
      overview:
        "After the death of his father Murat II, Mehmet II ascends to the Ottoman throne. After braving internal and external enemies, he decides to complete what he was destined to do: Conquer Constantinople.",
      release_date: 1329350400,
      genres: ["Adventure", "Drama", "Action", "War"],
    },
    {
      id: "19",
      title: "Every Secret Thing",
      poster: "https://image.tmdb.org/t/p/w500/wo5ruifvPoh96NCVEC7Dow4Hbec.jpg",
      overview:
        "One clear summer day in a Baltimore suburb, a baby goes missing from her front porch. Two young girls serve seven years for the crime and are released into a town that hasn't fully forgiven or forgotten. Soon, another child is missing, and two detectives are called in to investigate the mystery in a community where everyone seems to have a secret.",
      release_date: 1397955600,
      genres: ["Drama"],
    },
    {
      id: "20",
      title: "The Quick and the Dead",
      poster: "https://image.tmdb.org/t/p/w500/fQk89YaQdeBcS7AmlKODKOxIAPU.jpg",
      overview:
        "A mysterious woman comes to compete in a quick-draw elimination tournament, in a town taken over by a notorious gunman.",
      release_date: 792288000,
      genres: ["Western", "Thriller", "Adventure", "Action"],
    },
    {
      id: "21",
      title: "After Hours",
      poster: "https://image.tmdb.org/t/p/w500/9NyT0qHwVDsazubfSwLxt6fR7Ym.jpg",
      overview:
        "An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho whom he met that evening at a coffee shop.",
      release_date: 495421200,
      genres: [],
    },
    {
      id: "22",
      title: "Captivity",
      poster: "https://image.tmdb.org/t/p/w500/4IuMrbpAlSt0lbiSWBhQ3ByMSj0.jpg",
      overview:
        "The sought-after images of top model, Jennifer, adorn magazine covers and billboards worldwide. When alone at a charity event, she is abducted and incarcerated in a cell with another prisoner. When their captor subjects the two to torture, and commit to escaping the chamber of horrors before they're killed.",
      release_date: 1173398400,
      genres: ["Crime", "Horror", "Thriller"],
    },
    {
      id: "23",
      title: "Dark Passage",
      poster: "https://image.tmdb.org/t/p/w500/dvwmiD6qQ05gojrFQRaFbdhbNDF.jpg",
      overview:
        "A man convicted of murdering his wife escapes from prison and works with a woman to try and prove his innocence.",
      release_date: -702604800,
      genres: ["Crime", "Drama", "Romance", "Thriller"],
    },
    {
      id: "24",
      title: "Before the Flood",
      poster: "https://image.tmdb.org/t/p/w500/2fFTLaLbm8Ak7JBSYQ8Mb3jcFx9.jpg",
      overview:
        "A look at how climate change affects our environment and what society can do prevent the demise of endangered species, ecosystems, and native communities across the planet.",
      release_date: 1477011600,
      genres: ["Documentary"],
    },
    {
      id: "25",
      title: "My Favorite Martian",
      poster: "https://image.tmdb.org/t/p/w500/pOp4xriDEFUy2uN0BfnHJcjzqWt.jpg",
      overview:
        "News producer, Tim O'Hara gets himself fired for unwillingly compromising his bosses' daughter during a live transmission. A little later, he witnesses the crashing of a small Martian spacecraft, realizing his one-time chance of delivering a story that will rock the earth. Since Tim took the original but scaled-down spaceship with him, the Martian follows him to retrieve it.",
      release_date: 918691200,
      genres: ["Comedy", "Drama", "Family", "Science Fiction"],
    },
    {
      id: "26",
      title: "Mother's Day",
      poster: "https://image.tmdb.org/t/p/w500/AvGTqWgDjQ0TwDkApFMAA1BxJOD.jpg",
      overview:
        "Intersecting stories with different moms collide on Mother's Day.",
      release_date: 1461805200,
      genres: [],
    },
    {
      id: "27",
      title: "The Triplets of Belleville",
      poster: "https://image.tmdb.org/t/p/w500/flHYQswYEIvBL2QsQLEJJzTJDyS.jpg",
      overview:
        "When her grandson is kidnapped during the Tour de France, Madame Souza and her beloved pooch Bruno team up with the Belleville Sisters--an aged song-and-dance team from the days of Fred Astaire--to rescue him.",
      release_date: 1055293200,
      genres: ["Drama", "Animation", "Comedy"],
    },
  ];
  

export {movies}  