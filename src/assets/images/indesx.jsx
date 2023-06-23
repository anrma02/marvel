import logo from '~/assets/images/logo.svg';

const images = () => {
    return (
        <>
            logo: <img src={logo.default} alt="Logo" />,
        </>
    );
};

export default images;
