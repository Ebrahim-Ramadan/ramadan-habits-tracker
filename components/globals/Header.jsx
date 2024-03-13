'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import secureLocalStorage from "react-secure-storage";
import { getUserByAccessToken } from '@/lib/auth/getUserByAccessToken'
import Link from 'next/link';
import gh from '@/assets/gh.svg';
import favicon from '@/assets/favicon.png';
import { Notify } from 'notiflix';
import { signoutfunc } from '@/lib/auth/signout'
import { useRouter } from 'next/navigation';
import { Reload } from './Reload';


export const Header = () => {
  const router = useRouter();

    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUserName = secureLocalStorage.getItem("username");
  const IsloggedIn = secureLocalStorage.getItem("loggedIn");
        if (storedUserName && IsloggedIn) {
          setLoggedIn(true);
    
          const fetchUser = async () => {
            setLoading(true);
            try {
              const getUser = await getUserByAccessToken(storedUserName);
              if (getUser) {
                setLoggedIn(true);
                setUsername(getUser.username);
              }
              else {
                await signoutfunc();
                setLoggedIn(false)
              }
            } catch (error) {
              console.log('getUserByAccessToken error', error);
            }
            setLoading(false);
          };
    
          fetchUser();
        }
    }, []);
    
    
  const handleSignOut = async () => {
    await signoutfunc();
    router.push('/');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    Notify.info('signed out', {
      position: 'center-top',
    })
    };
    
    
    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })

    // Replace / paths with your paths
    const navigation = [
        { title: "الصلاة المفروضة", path: "/prayers", isDrapdown: false },
        { title: "العبادات الاضافية", path: "/addiitonals", isDrapdown: false },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])

    return (
        <>
            <nav className={`items-center bg-black sticky top-0 z-40 sticky top-0 z-40  w-full fixed md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
           
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
               
                    <div className="flex items-center justify-between py-2 md:block">
                        <a href="/">
                        <Image src={favicon} width={30} height={30} alt='gh' loading='lazy'/>

                        </a>
                        <div className="md:hidden flex flex-row items-center">
                            {!loggedIn &&
                           <div className='font-bold flex flex-row items-center gap-2 mr-2 [&>*]:text-sm '>
                           <a href="/login" className="text-indigo-200 py-3 text-center  hover:text-indigo-600 ">
                               Log in
                           </a>
                           <a href="/signup" className="px-2 py-1 font-medium text-center text-white bg-indigo-500 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                               Sign Up
                           </a>
                                </div>
                            }
                                
                            <button className="text-gray-500 hover:text-gray-800 flex flex-row items-center gap-2"
                                onClick={() => setState(!state)}
                            >
                                 <div className='flex flex-row items-center gap-2 mr-2'>
                            {loggedIn &&
                            
                                        (!loading ?
                                    ( <span className='text-white flex flex-row items-center gap-2'>
                                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-400 rounded-full dark:bg-blue-600">
<span className="font-medium text-gray-600 dark:text-gray-300 capitalize"> {username.substring(0, [2])}</span>
</div>

{(username.substring(0, username.indexOf('@')))}
                                        </span>) :
                                        (
                                            <Reload/>
))
                                
                                
                                    
                                }
                                </div>
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>

                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0 [&>*]:text-gray-200 ">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                item.isDrapdown ? (
                                                    <button className=" text-gray-200 font-bold w-full flex items-center justify-between gap-1  hover:text-indigo-600"
                                                        onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                    >
                                                        {item.title}
                                                        {
                                                            drapdownState.idx == idx && drapdownState.isActive ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                                                </svg>

                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </button>
                                                ) : (
                                                    <a href={item.path} className="font-bold block text-gray-200 hover:text-indigo-600">
                                                        {item.title}
                                                    </a>
                                                )
                                            }
                                            {
                                                item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                    <div className="md:bg-black md:text-white inset-x-0 md:top-12 md:mt-0 mt-6 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                                                        <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3'>
                                                            {item?.navs.map((dropdownItem, idx) => (
                                                                <li key={idx}>
                                                                    <p className="text-indigo-400 text-sm">{dropdownItem.label}</p>
                                                                    <ul className='mt-5 space-y-6'>
                                                                        {dropdownItem.navs.map((navItem, idx) => (
                                                                            <li key={idx} className="group">
                                                                                <a href={navItem.path} className='flex gap-3 items-center'>
                                                                                    <div className='w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14'>
                                                                                        {navItem.icon}
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="md:text-gray-200 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">{navItem.title}</span>
                                                                                        <p className='text-sm md:text-gray-100 md:group-hover:text-gray-200 mt-1'>{navItem.desc}</p>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : ""
                                            }
                                        </li>
                                    )
                                })
                            }
                           <Link href="https://github.com/Ebrahim-Ramadan/ramadanhabitstracking" target='_blank' className='gh flex flex-row items-center gap-x-2'>
                  <Image src={gh} width={25} height={25} alt='gh' loading='lazy'/>
                                        </Link>
                            <div className='font-bold flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                            {!loggedIn ?
                                    <>
                                    <a href="/login" className="block py-3 text-center text-gray-300 hover:text-indigo-400 border rounded-lg md:border-none">
                                        Log in
                                    </a>
                                    <a href="/signup" className="block p-2 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Sign Up
                                    </a>
                               </>
                                :
                                    <div className='flex flex-row justify-between items-center gap-2'>
                                        {!loading ?
                                            (<span className='text-white flex flex-row items-center gap-2'>
                                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-400 rounded-full dark:bg-blue-600">
                                                    <span className="font-medium text-gray-600 dark:text-gray-300 capitalize"> {username.substring(0, [2])}</span>
                                                </div>

                                                {(username.substring(0, username.indexOf('@')))}
                                            </span>) :
                                            (
                                                <Reload />
                                            )}

                                        <button onClick={handleSignOut}  className="block p-1 font-medium text-center text-white bg-red-600 hover:bg-red-500 active:bg-red-700 active:shadow-none rounded-lg shadow md:inline">
                                        log out
                                        </button>
                                        
                                    </div>
                                }
                                     </div>
                                
                            
                        </ul>
                    </div>
                </div>
            </nav>
            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </>
    )
}