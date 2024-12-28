import { Star } from 'lucide-react';

export const StarRating = () => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className="h-4 w-4 sm:h-5 sm:w-5 fill-current" 
        strokeWidth={1}
      />
    ))}
  </div>
);