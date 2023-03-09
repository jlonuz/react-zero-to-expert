import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name}) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <code>{name}</code>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'No hay ningún título',
  subTitle: 'No hay súbtítulo',
  name: 'Josefina Lonuz'
}