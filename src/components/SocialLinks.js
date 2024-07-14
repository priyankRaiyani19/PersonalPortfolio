import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
// https://github.com/priyankRaiyani19

const SocialLinks = () => {

    const Slinks = [

        {
            id: 1, child: (<>
                LinkedIn <FaLinkedin size={30}/>
            </>), href: 'https://www.linkedin.com/in/priyank-raiyani-702b61223', style: 'rounded-tr-md'
        }, {
            id: 2, child: (<>
                GitHub <FaGithub size={30}/>
            </>), href: 'https://github.com/priyankRaiyani19',

        }, {
            id: 3, child: (<>
                Mail <HiOutlineMail size={30}/>
            </>),
            href: 'mailto:priyankraiyani1984@gmail.com',

        }, {
            id: 1, child: (<>
                Resume <BsFillPersonLinesFill size={30}/>
            </>), href: "/Resume_PR.pdf", style: 'rounded-br-md', download: true,
        }]


    return (<div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {Slinks.map(({id, child, href, style, download}) => (
                <li key={id}
                    className={"flex justify-between items-center w-40 h-14" +
                        " px-4 bg-gray-500  text-white  ml-[-100px]  " +
                        "hover:ml-[-5px] hover:rounded-md  duration-500 " +
                        " " + style} >
                    <a href={href}
                       className="flex justify-between items-center w-full  text-xl"
                        download={download}
                       target="_blank"
                       rel="noreferrer"
                    >
                        {child}

                    </a>
                </li>))}

        </ul>
    </div>);
};

export default SocialLinks;