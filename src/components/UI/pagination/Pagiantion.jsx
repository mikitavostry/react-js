import React from 'react'
import { usePagination } from '../../../hooks/usePagination'


const Pagiantion = ({ totalPages, page, changePage }) => {
    let pagesArray = usePagination(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page !== p ? 'page' : 'page page__current'}>{p}</span>
            )}
        </div>
    )
}

export default Pagiantion