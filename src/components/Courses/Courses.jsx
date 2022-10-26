import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { useSpinner } from '../../contexts/SpinnerContext';
import utilities from '../../assets/utilities.module.css';
import styles from '../Courses/Courses.module.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { setIsSpinnerVisible } = useSpinner();

  useEffect(() => {
    setIsSpinnerVisible(true);

    (async () => {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      setCourses(data);
      setIsSpinnerVisible(false);
    })();
  }, []);

  return (
    <div className={utilities.container}>
      <div className={styles.courseContainer}>
        <aside className={styles.sidebar}>
          <ul className={styles.menu}>
            {courses.map(course => (
              <li className={styles.menuItem} key={course.id}>
                <Link to={course.id}>{course.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles.cardsContainer}>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
