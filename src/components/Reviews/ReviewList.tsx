import { useTranslation } from 'react-i18next';
import { ReviewCard } from './ReviewCard';
import { REVIEW_IMAGES, REVIEW_NUMBERS } from './constants';

export const ReviewList = () => {
  const { t } = useTranslation();

  const reviews = REVIEW_NUMBERS.map(num => ({
    name: t(`reviews.testimonials.${num}.name`),
    role: t(`reviews.testimonials.${num}.role`),
    content: t(`reviews.testimonials.${num}.content`),
    avatar: `https://images.unsplash.com/photo-${REVIEW_IMAGES[num]}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
    rating: 5
  }));

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.name}
          {...review}
          index={index}
        />
      ))}
    </div>
  );
};