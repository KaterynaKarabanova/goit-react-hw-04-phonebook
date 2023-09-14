import { StyledFilterLabel, StyledFilterInput } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ onChange }) => {
  return (
    <StyledFilterLabel>
      Find Contact by name
      <StyledFilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => onChange(e.target.value)}
      />
    </StyledFilterLabel>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
};
