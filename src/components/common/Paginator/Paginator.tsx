import React, {useState} from "react";

import styles from "./paginator.module.scss";

import cn from "classnames";


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    portionSize?: number
    onPageChanged?: (p: number) => void
}

export const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged = x => x, portionSize = 10}) => {
    const [portionNumber, setPortionNumber] = useState(1);

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (<span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                  key={p}
                                  onClick={() => {
                                      onPageChanged(p)
                                  }}>{p}</span>)
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}


