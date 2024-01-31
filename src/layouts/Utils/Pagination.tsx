import React from "react"

export const Pagination: React.FC<{ currentPage: number, totalPages: number, paginate: any }> = (props) => {

    const pageNumbers = []

    const numberOfPageNumbers = 5
    let pagesBefore
    let pagesAfter

    const halfPages = Math.floor(numberOfPageNumbers / 2);
    const totalPages = Math.min(props.totalPages, numberOfPageNumbers);

    if (props.currentPage <= halfPages) {
        pagesBefore = props.currentPage - 1;
    } else if (props.currentPage > props.totalPages - halfPages) {
        pagesBefore = totalPages - (props.totalPages - props.currentPage) - 1;
    } else {
        pagesBefore = halfPages;
    }

    pagesAfter = totalPages - pagesBefore - 1;

    for (let i = -pagesBefore; i <= pagesAfter; i++) {
        pageNumbers.push(props.currentPage + i);
    }

    /*
    if (props.currentPage === 1) {
        pageNumbers.push(props.currentPage)
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1)
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2)
        }
    } else if (props.currentPage > 1) {
        if (props.currentPage >= 3) {
            pageNumbers.push(props.currentPage - 2)
            pageNumbers.push(props.currentPage - 1)
        } else {
            pageNumbers.push(props.currentPage - 1)
        }

        pageNumbers.push(props.currentPage)

        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1)
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2)
        }
    }
    */

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.paginate(1)}>
                    <button className="page-link">
                        First Page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => props.paginate(number)} className={'page-item' + (props.currentPage === number ? 'active' : '')}>
                        <button className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
                <li className="page-item" onClick={() => props.paginate(props.totalPages)}>
                    <button className="page-link">
                        Last Page
                    </button>
                </li>
            </ul>
        </nav>
    );
}