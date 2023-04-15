import React, {FC} from "react";
import Card from "./Card/Card";
import styles from "./Gallery.module.scss";
import { ConnectedProps, connect } from "react-redux";
import { filteredData } from "../../store/selectors";
import StarRatingComponent from "react-star-rating-component";
import { AppStateType } from "../../index";
import { Dispatch } from "redux";
import { ActionsTypes } from "../../store/actions";
import { FilmsType } from "../../store/reducers";


interface PropsType extends PropsFromRedux {
  filteredData : Array<FilmsType>
}

const Gallery: FC<PropsType>  = (props) => (
  <main className={styles.main}>
    <section>
      <h1 className={styles.h1}>Найдите свои любимые фильмы</h1>
      <ul className={styles.ul}>
        {props.filteredData.map((item, i) => (
          <Card
            key={i}
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

const mapStateToProps = (state: AppStateType) => {
  return {
    filteredData: filteredData(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
});


const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Gallery)
