import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({imageUrl, title, description, actionText }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonDiv}>
                    <button className={styles.previewWebsiteButton}>{actionText}</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;