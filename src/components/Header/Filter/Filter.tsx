import React, { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { connect, ConnectedProps  } from 'react-redux';
import { ActionsTypes, actions } from '../../../store/actions';
import { InitialStateType } from '../../../store/reducers';
import { Dispatch } from 'redux';

interface PropsType extends PropsFromRedux {
 
}

const Filter: FC<PropsType> = ({ changeRadio }) => {
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeRadio(event.target.value);
  };

  return (
    <div className={styles.radio}>
      <label>
        <input
          type='radio'
          name='radio'
          value='all'
          onChange={handleRadioChange}
          defaultChecked
        />
        Все
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='action_movie'
          onChange={handleRadioChange}
        />
        Боевики
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='comedy'
          onChange={handleRadioChange}
        />
        Комедии
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='fantasy'
          onChange={handleRadioChange}
        />
        Фантастика
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='horror'
          onChange={handleRadioChange}
        />
        Ужасы
      </label>
    </div>
  );
};

const mapStateToProps = (state: InitialStateType) => ({
 
})

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
  changeRadio: (value: string) => dispatch(actions.changeRadioSelect(value)),
});

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Filter)
