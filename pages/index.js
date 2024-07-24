import Link from "next/link";
import Seo from "../components/Seo";
//import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClickHandler = (id, title) => {
    router.push(
      // {
      //   pathname: `/movies/${id}`,
      //   query: {
      //     title,
      //   },
      // },
      // `/movies/${id}`
      `/movies/${title}/${id}`
    );
  };
  //const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //      const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div className="container">
      <Seo title="Home" />

      <h1>Home</h1>
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div
          key={movie.id}
          className="movie"
          onClick={() => {
            onClickHandler(movie.id, movie.original_title);
          }}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이름 정말 중요하고, 이 이름을 변경하면 안됨. 이코드는 server쪽에서만 작동
// 이걸 이용해서 apiKey 숨길수도 있음
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
