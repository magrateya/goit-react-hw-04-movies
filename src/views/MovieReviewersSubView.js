import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

export default function MovieReviewersSubView() {
  const [reviewers, setReviewers] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieShelfAPI.fetchReviewers(movieId).then(data => {
      setReviewers([...data.results]);
    });
  }, [movieId]);

  //   console.log(reviewers);

  return (
    <>
      {reviewers.length > 0 ? (
        <ul>
          {reviewers.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>
                <b>Review:</b> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviewers</p>
      )}
    </>
  );
}
