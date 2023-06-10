import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

function Header() {
    // const account = true;
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };
    const menu = [
        {
            title: 'Account',
            to: '/acc',
        },
        {
            title: 'Profile',
            to: 'profile',
        },
        {
            title: 'Suppor',
            to: '/supp',
        },
        {
            title: 'Download',
            to: '/dowload',
        },
        {
            title: 'Setting',
            to: '/setting',
        },
        {
            title: 'Logout',
            to: '/logout',
        },
    ];

    return (
        <div>
            <div className="flex">
                <div className=" flex relative w-[1200px] h-[80px] left-[250px] top-0 ">
                    {/* icon */}

                    <div className="absolute w-[40px]  rounded-full h-[40px] left-[40px] top-5 opacity-50 bg-black">
                        <FontAwesomeIcon
                            className=" absolute cursor-no-drop text-white w-[13.11px] h-[22.5px] left-[12.25px] top-[8.25px] "
                            icon={faChevronLeft}
                        />
                    </div>
                    <div className="absolute w-[40px]  rounded-full h-[40px] left-[103px] top-5 opacity-50 bg-black">
                        <FontAwesomeIcon
                            className=" absolute text-white w-[13.11px] h-[22.5px] left-[14.25px] top-[8.25px] "
                            icon={faChevronRight}
                        />
                    </div>

                    {/* acc */}

                    <div>
                        <Tippy
                            visible={visible}
                            placement="bottom"
                            content={
                                <div className="bg-[#181818] w-[200px] h-[268px] rounded-md " tabIndex="-1">
                                    {menu.map((item) => (
                                        <ul key={item.id} className="p-1 overflow-y-auto ">
                                            <Link to={item.to}>
                                                <li className="w-full flex items-center h-[40px] text-[16px] hover:bg-[#3E3E3E]  font-medium text-[#FEFEFE] pl-2 ">
                                                    {item.title}
                                                </li>
                                            </Link>
                                        </ul>
                                    ))}
                                </div>
                            }
                        >
                            <div className="p-1 rounded-full bg-[#000000cc] top-5 h-[40px] right-[42px] absolute ">
                                <img
                                    onClick={handleClick}
                                    className="w-[34px] h-[34px] flex   rounded-[22px] "
                                    src="https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s176-c-k-c0x00ffffff-no-rj"
                                    alt="Nguyen Van A"
                                />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
