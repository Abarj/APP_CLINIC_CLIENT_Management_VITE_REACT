const Error = ({ mensaje }) => {
    
    return (
        <div className='bg-red-100 border-l-4 border-red-600 text-red-600 font-bold p-3 mb-3 rounded'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error