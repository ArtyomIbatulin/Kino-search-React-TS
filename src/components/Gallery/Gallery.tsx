import React, {FC} from "react";
import Card from "./Card/Card";
import styles from "./Gallery.module.scss";
import { connect } from "react-redux";
import { filteredData } from "../../store/selectors";
import StarRatingComponent from "react-star-rating-component";
import { AppStateType } from "../../index";

export type CardType = {
  poster : string,
  name : string,
  genre : string,
  director : string,
  desc: string,
  description: string,
  stars : number
}

type PropsType = {
  filteredData : Array<CardType>
}

const Gallery: FC<PropsType>  = (props) => (
  <main className={styles.main}>
    <section>
      <h1 className={styles.h1}>Найдите свои любимые фильмы</h1>
      <ul className={styles.ul}>
        {props.filteredData.map((item, i) => (
          <Card
            key={i}
            item={item}
            poster={item.poster}
            name={item.name}
            genre={item.genre}
            director={item.director}
            desc={item.desc}
            description={item.description}
            stars={item.stars}
          >
            <StarRatingComponent
              name="rate"
              editing={false}
              starCount={5}
              value={item.stars}
            />
          </Card>
        ))}
      </ul>
    </section>
  </main>
);

const mapStatetoProps = (state: AppStateType) => {
  return {
    filteredData: filteredData(state),
  };
};

export default connect(mapStatetoProps, null)(Gallery);
