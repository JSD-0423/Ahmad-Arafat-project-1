import Rating from "../Rating";
import styles from "./index.module.css";

const PresentationCard = ({ rating, topic, image, parentStyles }) => {
  return (
    <div className={styles.card + " " + parentStyles}>
      <div
        style={{
          backgroundImage: `url(${require(`../../assets/images/${image}`)})`,
        }}
        className={styles.content}
      ></div>
      <div className={styles.content}>
        <h4>{topic}</h4>
        <Rating rating={rating} size={15} />
      </div>
    </div>
  );
};

export default PresentationCard;
