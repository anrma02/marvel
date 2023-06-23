import ContentLoader from 'react-content-loader';

const SpotifyHomeLoader = (props) => (
    <ContentLoader
        speed={5}
        width={1285}
        height={310}
        viewBox="0 0 1285 310"
        backgroundColor="#38383808"
        foregroundColor="#dbdbdb"
        {...props}
    >
        <rect x="40" y="15" rx="23" ry="23" width="400" height="60" />
        <rect x="40" y="115" rx="6" ry="6" width="370" height="80" />
        <rect x="40" y="220" rx="6" ry="6" width="370" height="80" />
        <rect x="450" y="115" rx="6" ry="6" width="370" height="80" />
        <rect x="450" y="220" rx="6" ry="6" width="370" height="80" />
        <rect x="860" y="115" rx="6" ry="6" width="370" height="80" />
        <rect x="860" y="220" rx="6" ry="6" width="370" height="80" />
    </ContentLoader>
);

export default SpotifyHomeLoader;
