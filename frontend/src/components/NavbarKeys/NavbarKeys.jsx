import PropTypes from 'prop-types';

const NavbarKeys = ({name, link}) => {
    return <div className='text-2xl text-amber-200'>
        <a className='text-red-200' href={link}>{name}</a>
    </div>
}

NavbarKeys.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
}

export default NavbarKeys;