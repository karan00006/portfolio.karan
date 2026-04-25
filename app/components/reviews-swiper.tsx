"use client";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Review = {
  quote: string;
  author: string;
  role: string;
};

type ReviewsSwiperProps = {
  reviews: Review[];
};

export default function ReviewsSwiper({ reviews }: ReviewsSwiperProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={16}
      autoplay={{ delay: 3800, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.author}>
          <article className="review-slide">
            <p className="text-base leading-7 text-[var(--muted)]">{review.quote}</p>
            <p className="mt-5 text-sm font-semibold tracking-[0.08em]">{review.author}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[var(--soft)]">
              {review.role}
            </p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
