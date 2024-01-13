import PropTypes from 'prop-types';

export const BasicBTN = ({ text, styles }) => {
    return (
        <button className='BasicButton' style={{ ...styles }}>{text}</button>
    )
}
BasicBTN.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.object
}