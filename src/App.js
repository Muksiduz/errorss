import "./App.css";
import Backdrop from "./components/Backdrop";
import Movie from "./components/Movie";

function App() {
  const movies = [
    {
      id: 1,
      title: "Avengers",
      genre: "Action",
      year: "2012",
      img: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 2,
      title: "Avengers: Infinity War",
      genre: "Action",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 3,
      title: "Ant Man",
      img: "https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw",
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      genre: "Action",
      year: "2019",
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 5,
      title: "Avengers: Age of Ultron",
      genre: "Action",
      year: "2015",
      img: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 6,
      title: "Ant Man",
      img: "https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw",
    },
    {
      id: 7,
      title: "Captain Marvel",
      genre: "Action",
      year: "2019",
      img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Captain Marvel is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 8,
      title: "Thor",
      genre: "Action",
      year: "2011",
      img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Thor is a 2011 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 9,
      title: "Thor: Ragnarok",
      genre: "Action",
      year: "2017",
      img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      description:
        "Thor: Ragnarok is a 2017 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
    },
    {
      id: 10,
      title: "hero",
      img: "https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw",
    },
  ];

  return (
    <div>
      {/* <Movie name={movies[0].title} year={movies[0].year} img={movies[0].img}/>
      <Movie name={movies[1].title} year={movies[1].year} img={movies[1].img}/>
      <Movie name={movies[2].title} year={movies[2].year} img={movies[2].img}/>
      <Movie name={movies[3].title} year={movies[3].year} img={movies[3].img}/>
      <Movie name={movies[4].title} year={movies[4].year} img={movies[4].img}/>
      <Movie name={movies[5].title} year={movies[5].year} img={movies[5].img}/>
      <Movie name={movies[6].title} year={movies[6].year} img={movies[6].img}/>
      <Movie name={movies[7].title} year={movies[7].year} img={movies[7].img}/> */}
      <div className="contetnts">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.title}
              year={movie.year}
              img={movie.img}
            />
          );
        })}
        {/* <Popup img={props.img} desc={props.description} name={props.title} /> */}
        {/* <Popup img={movies[0].img} desc={movies[0].description} /> */}
      </div>
    </div>
  );
}

export default App;
