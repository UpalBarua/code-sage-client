import React, { useEffect, useState } from 'react';
import { BsQuestion } from 'react-icons/bs';
import utilities from '../../assets/utilities.module.css';
import styles from './Blog.module.css';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/blog');
      const data = await response.json();
      setBlogData(data);
    })();
  }, []);

  return (
    <section className={utilities.container}>
      <div className={styles.blogContainer}>
        <h3 className={styles.title}>Blog</h3>
        {blogData.map(data => (
          <div className={styles.wrapper}>
            <div className={styles.question}>
              <p className={styles.text}>{data.question}</p>
            </div>
            <div className={styles.answer}>
              <p className={styles.text}>{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
