
export default function Info({ visible,img, message }) {
    return (
        <div
            className={`flex h-20 gap-5 items-center justify-between
        fixed top-20 right-5 z-10 px-10 py-2 text-black font-medium text-sm rounded-md shadow-lg
        bg-white bg-opacity-80 transition-opacity duration-500 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}>

            
            <img className="w-[60px] h-[60px]" src={img} />
            {message}
        </div>
    );
}