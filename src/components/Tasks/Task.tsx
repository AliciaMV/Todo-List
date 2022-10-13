//== import
import * as React from "react";
import { useDispatch } from 'react-redux';
import { setCheck, updateCounter } from '../../actions';


//== props
type Props = {
  id: number
  name: string
  check: boolean
}

//== component
const Task: React.FC<Props> = ({ id, name, check }): JSX.Element => {
  const dispatch = useDispatch(); 
  const isChecked = check;

  function handleClick() {
    dispatch(setCheck(id, check));
    dispatch(updateCounter());
  }

  let style =  check ? 'list__item--done' : 'list__item'

    return (
      <li>
        <label className={style}>
          <input type="checkbox" checked={isChecked} onClick={handleClick} readOnly />
          {name}
        </label>
      </li>
      
    )
}


//== exp
export default Task;