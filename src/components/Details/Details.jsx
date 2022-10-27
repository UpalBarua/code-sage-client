import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsStar, BsCurrencyDollar } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import DetailsPdf from './DetailsPdf';
import utilities from '../../assets/utilities.module.css';
import styles from './Details.module.css';
import jsPDF from 'jspdf';

const Details = () => {
  const courseId = useParams().courseId;
  const [courseDetails, setCourseDetails] = useState({});
  const pdfRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:5000/details/${courseId}`);
      const data = await response.json();
      setCourseDetails(data);
    })();
  }, []);

  const { id, img, name, instructor, ratings, description } = courseDetails;

  const generatePDF = () => {
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    // const data = document.querySelector('#course-details');
    const data = pdfRef.current;
    pdf.html(data).then(() => {
      pdf.setTextColor(255, 0, 0);
      pdf.save('details.pdf');
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <img className={styles.detailsImg} src={img} alt="" />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.instructor}>
            Created by <span>{instructor}</span>
          </p>
          <p>Last updated {ratings}</p>
          <button
            className={`${utilities.btn} ${styles.pdfBtn}`}
            onClick={generatePDF}
            type="button">
            Save as pdf
          </button>
        </div>
      </div>

      {/* <button onClick={this.}></button> */}

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

        <p ref={pdfRef} className={styles.description}>
          {description}
        </p>
      </div>

      <Link
        className={`${utilities.btn} ${styles.accessBtn}`}
        to={`/checkout/${id}`}>
        Get premium access
      </Link>
    </section>
  );
};

export default Details;
