
const ListPageComponent = ({ movePage, start, end, prev, next, pageNums, page }) => {

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    return (

        <div className="flex m-4 p-2 justify-center">
            <ul className="flex">

                {prev ? <li className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => handleClickPage(start - 1)}>PREV</li> : <></>}

                {pageNums.map(num =>
                    <li
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={() => handleClickPage(num)}
                        key={num}>
                        {page === num ? <a className="relative inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white  ">{num}</a> : <a>{num}</a>}
                    </li>)}
                {next ? <li className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => handleClickPage(end + 1)}
                >NEXT</li> : <></>}
            </ul>
        </div>


    );
}

export default ListPageComponent;