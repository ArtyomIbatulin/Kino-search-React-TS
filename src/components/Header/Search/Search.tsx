import React, { ChangeEvent, FC } from 'react';
import styles from './Search.module.scss';
import { ConnectedProps, connect } from 'react-redux';
import { ActionsTypes, actions } from '../../../store/actions';
import { InitialStateType } from '../../../store/reducers';
import { Dispatch } from 'redux';

interface PropsType extends PropsFromRedux {
 
}

const Search: FC<PropsType> = ({ changeInput }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeInput(event.target.value);
  };

  return (
    <input
      className={styles.input}
      type='text'
      name='search'
      placeholder='Search...'
      onChange={handleInputChange}
    />
  );
};


const mapStateToProps = (state: InitialStateType) => ({
 
})

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => ({
  changeInput: (value:string) => dispatch(actions.changeInputSearch(value)),
});

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Search)
