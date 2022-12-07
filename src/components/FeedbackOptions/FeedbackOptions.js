import PropTypes from 'prop-types';
import { ButtonsList, ButtonsItem, Button } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ options, onIncrement }) => {
  return (
    <ButtonsList>
      {options.map(key => {
        return (
          <ButtonsItem key={key}>
            <Button type="button" onClick={() => onIncrement(key)}>
              {key}
            </Button>
          </ButtonsItem>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
