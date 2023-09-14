import PropTypes from 'prop-types';
import { StyledContactItem, StyledContactButton } from './ContactItem.styled';
export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <StyledContactItem>
      {name}:{` ` + number}
      <StyledContactButton type="button" onClick={() => onDelete(id)}>
        Delete
      </StyledContactButton>
    </StyledContactItem>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
