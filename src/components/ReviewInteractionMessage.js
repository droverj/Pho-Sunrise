import React from 'react';
import '../styles/ReviewInteractionMessage.scss';

const ReviewInteractionMessage = ({ reviews, userId, deleteConfirmed, reviewSubmitted, setDeleteConfirmed, handleDeleteReview }) => {
  return (
    <div>
      {deleteConfirmed ? (
        reviews.map((review) => (
          review.user_id === userId && (
            <>
              <div className="overlay"></div>
              <div key={review.id} className='delete-review-confirmation'>
                <button className="close-button" onClick={() => {
                  setDeleteConfirmed(null)
                  document.body.classList.remove('no-scroll');
                }}>X</button>
                <h3>Are you sure you want to delete your review?</h3>
                <p>You rated Phở Sunrise {review.rating}/5 stars.</p>
                <p className='review-comment'>"{review.comment}"</p>
                <div className='confirmation'>
                  <p>Delete your review?</p>
                  <p className='warning'>This action is final.</p>
                </div>

                <div className='button-options'>
                  <button className='safe-button' onClick={() => {
                    setDeleteConfirmed(null);
                    document.body.classList.remove('no-scroll');
                  }}>Keep</button>
                  <button className="danger-button" onClick={() => handleDeleteReview(review)}>Delete</button>
                </div>

              </div>
            </>
          )
        ))
      ) : (
        <>
          <div className='submitted-review'>
            {reviewSubmitted ? 'Your Phở Sunrise review has been submitted successfully.' : null}
            <br /><span>Thank you</span>
            {!deleteConfirmed && (
              <div className='delete-review'>
                <p>Delete your review?</p>
                <button onClick={() => {
                  document.body.classList.add('no-scroll');
                  setDeleteConfirmed(true)
                }}>Delete</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewInteractionMessage;