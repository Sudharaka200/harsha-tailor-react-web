import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function StatsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const target = document.querySelector("#stats-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div
      id="stats-section"
      className="bg-rose-100 "
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Sri Lankan Craftsmanship Enthusiasts
          </h2>
          <p className="mt-4 text-gray-500 text-base mb-10">
            Rooted in Sri Lanka’s rich heritage of fine tailoring, we blend tradition with modern techniques to create garments that inspire. From hand-stitched suits to elegant custom designs, we craft every piece with unmatched precision and dedication.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8  sm:grid-cols-2 lg:grid-cols-4 ">
          <StatCard
            title="Years of Expertise"
            endValue={30}
            suffix="+"
            visible={visible}
          />
          <StatCard
            title="Happy Clients"
            endValue={500}
            suffix="+"
            visible={visible}
          />
          <StatCard
            title="Satisfaction Rate"
            endValue={98}
            suffix="%"
            visible={visible}
          />
          <StatCard
            title="Custom Designs"
            endValue={1000}
            suffix="+"
            visible={visible}
          />
        </dl>
      </div>
    </div>
  );
}

function StatCard({ title, endValue, suffix = "", visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = endValue / (duration / 10); // Adjust increment based on duration

      const counter = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10); // Update every 10ms
    }
  }, [visible, endValue]);

  return (
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-base font-medium text-gray-500">{title}</dt>
      <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
        {count}
        {suffix}
      </dd>
    </div>
  );
}

// Add PropTypes validation
StatCard.propTypes = {
  title: PropTypes.string.isRequired, // Title is required and must be a string
  endValue: PropTypes.number.isRequired, // endValue is required and must be a number
  suffix: PropTypes.string, // suffix is optional and must be a string
  visible: PropTypes.bool.isRequired, // visible is required and must be a boolean
};

export default StatsSection;
