import { Link } from 'react-router-dom';
import config from '~/config'; 
import Menu from './Menu/Menu';
import { MenuItem } from './Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faHome, faSearch, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Slice() {
    return (
        <div className=" w-[250px] h-screen bg-black">
            <div className="pt-[22px]">
                <div>
                    <Link to={config.routes.home}>
                        <div className="mb-[20px] flex-1 h-[40px] px-[22px] ">
                            <img
                                className="max-w-[131px] w-full h-[40px]"
                                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                                alt="spotify"
                            />
                        </div>
                    </Link>
                </div>
                {/*  */}
                <div>
                    <Menu>
                        <MenuItem
                            to={config.routes.home}
                            title=" Home "
                            icon={<FontAwesomeIcon className="text-[22px] text-zinc-400" icon={faHome} />}
                            activeIcon={
                                <FontAwesomeIcon className="text-[22px]  active:text-white active:flex" icon={faHome} />
                            }
                        />
                        <MenuItem
                            to={config.routes.search}
                            title="Search"
                            icon={<FontAwesomeIcon className="text-[22px]  text-zinc-400" icon={faSearch} />}
                            activeIcon={
                                <FontAwesomeIcon
                                    className="text-[22px]  active:text-white active:flex"
                                    icon={faSearch}
                                />
                            }
                        />
                        <MenuItem
                            to={'config.routes.library'}
                            title="Library"
                            icon={<FontAwesomeIcon className="text-[22px]  text-zinc-400 " icon={faBookmark} />}
                            activeIcon={
                                <FontAwesomeIcon
                                    className="text-[22px]  active:text-white active:flex"
                                    icon={faBookmark}
                                />
                            }
                        />
                    </Menu>
                </div>
                {/*  */}
                <div className="mt-7">
                    <Menu>
                        <MenuItem
                            title="Create Playlist"
                            to=""
                            icon={<FontAwesomeIcon className="text-[22px]  text-zinc-400 " icon={faSquarePlus} />}
                            activeIcon={
                                <FontAwesomeIcon
                                    className="text-[22px]  active:text-white active:flex"
                                    icon={faSquarePlus}
                                />
                            }
                        />
                        <MenuItem
                            title="Liked Song"
                            to=""
                            icon={<FontAwesomeIcon className="text-[22px]  text-zinc-400" icon={faHeart} />}
                            activeIcon={
                                <FontAwesomeIcon
                                    className="text-[22px]  active:text-white active:flex"
                                    icon={faHeart}
                                />
                            }
                        />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Slice;
