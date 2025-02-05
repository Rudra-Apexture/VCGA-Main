import React from 'react'
import ReviewHero from './ReviewHero';
import ReviewCard from './ReviewCard';
import ReviewCards from './Reviews_Card';

const Review = () => {
    return (
        <div>
            <ReviewHero />
            {/* <ReviewCard /> */}
            <ReviewCards />
        </div>
    )
}

export default Review