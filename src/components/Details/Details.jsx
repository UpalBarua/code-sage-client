import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsStar, BsCurrencyDollar } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import utilities from '../../assets/utilities.module.css';
import styles from './Details.module.css';

const Details = () => {
  const courseId = useParams().courseId;
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:5000/details/${courseId}`);
      const data = await response.json();
      setCourseDetails(data);
    })();
  }, []);

  const { img, name, instructor, ratings, description } = courseDetails;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <img className={styles.detailsImg} src={img} alt="" />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p>Created by {instructor}</p>
          <p>Last updated {ratings}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.stats}>
          <div className={styles.statsWrapper}>
            <BsStar className={styles.icon} />
            <p>{ratings}</p>
          </div>

          <div className={styles.statsWrapper}>
            <BsCurrencyDollar className={styles.icon} />
            <p>{ratings}</p>
          </div>

          <div className={styles.statsWrapper}>
            <IoLanguageOutline className={styles.icon} />
            <p>{ratings}</p>
          </div>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      <Link className={`${utilities.btn} ${styles.accessBtn}`} to="/checkout">
        Get premium access
      </Link>
    </section>
  );
};

export default Details;
