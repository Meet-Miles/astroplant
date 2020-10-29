import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/ArticleCard.module.css";
import Card from "./Card";
import ReadArrow from "../../public/icons/arrow-right.svg";
import { API_URL } from "../../services/community-api";
import { format } from "date-fns";

export default function ArticleCard({ article }) {
  return (
    <a
      target={"blank"}
      referrerPolicy={"no-referrer"}
      href={`${API_URL}/news/${article.slug}`}
    >
      <Card className={styles.card}>
        <img
          className={styles.cover}
          src={
            article.cover
              ? `${API_URL}${article.cover.url}`
              : `/images/placeholder.svg`
          }
        />
        <div className={styles.gradient} />
        <div className={styles.content}>
          <p className={styles.date}>
            {format(new Date(article.published_at), "MMM dd yyyy")}
          </p>
          <b className={styles.title}>{article.title}</b>
          <div className={styles.readRow}>
            <label className={styles.readLabel}>Read</label>
            <ReadArrow className={styles.readArrow} />
          </div>
        </div>
      </Card>
    </a>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};