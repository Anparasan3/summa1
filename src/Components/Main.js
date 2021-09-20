import React, { useState, useEffect, Suspense } from 'react'
import ReactPaginate from 'react-paginate'
import './Style/Main.css'
import TopComponent from './TopComponent'
import RealContent from './RealContent'

export default function Main({ location }){
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    console.log('testing q : ',q)

    const [items, setItems] = useState([]);
    let searchProduct = ''
    let limits = 6;
    if(q === 'shoes'){
        searchProduct = `https://plugin-content-api.herokuapp.com/shoes`
    } else if (q === 'fruits'){
        searchProduct = `https://plugin-content-api.herokuapp.com/fruits`
    } else if (q === 'books'){
        searchProduct = `https://plugin-content-api.herokuapp.com/books`
        limits = 8
    }

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `${searchProduct}?_page=1&_limit=${limits}`
            );
            const data = await res.json();
            setItems(data);
        };
        getComments();
    }, [searchProduct, setItems, limits])
    console.log(items);

    // `https://fruits-shoes-api.herokuapp.com/${searchProduct}?_page=${currentPage}&_limit=${limits}`
    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `${searchProduct}?_page=${currentPage}&_limit=${limits}`
        )
        const data = await res.json();
        return data;
    }

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1
        const commentsformserver = await fetchComments(currentPage);
        setItems(commentsformserver);
    }

    return (
        <Suspense fallback={<div className='loading'><h1>Loading....<br><h2>Please Wait.</h2></br></h1></div>}>
            <div className="main-container">
                <TopComponent items={items} q={q} />
                <RealContent items={items} searchProduct={searchProduct} />
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </Suspense>
    );
}
