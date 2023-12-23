import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from '../atoms/Card';
import Result from 'postcss/lib/result';
import { getData, getMeta } from '../../services/api';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export const ListCard = () => {
    const [ideas, setIdeas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [meta, setMeta] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [sortType, setSortType] = useState('-published_at'); 



    const fetchDataForPage = async () => {
        try {
            const data = await getData('/api/ideas', {
                // params specific to the request
                params: {
                    'page[number]': currentPage,
                    'page[size]': itemsPerPage,
                    append: ['small_image', 'medium_image'],
                    sort: sortType, // Ganti dengan 'published_at' jika ingin ascending
                },
            });

            const meta = await getMeta('/api/ideas', {
                // params specific to the request
                params: {
                    'page[number]': 1,
                    'page[size]': itemsPerPage,
                    append: ['small_image', 'medium_image'],
                    sort: '-published_at', // Ganti dengan 'published_at' jika ingin ascending
                },
            });

            // Gunakan data, links, dan meta sesuai kebutuhan
            console.log('Data:', data);
            console.log('meta:', meta);
            setIdeas(data);
            setMeta(meta);
        } catch (error) {
            // Handle errors
        }
    };

    useEffect(() => {
        fetchDataForPage();
    }, [currentPage, itemsPerPage, sortType]);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleItemsPerPageChange = (event) => {
        const selectedItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(selectedItemsPerPage);
        // Di sini Anda bisa menambahkan logika lain yang diperlukan saat mengubah jumlah item per page
    };

    const handleSortTypeChange = (event) => {
        const selectedSortType = event.target.value;
        setSortType(selectedSortType);
    };

    console.log(itemsPerPage)

    return (

        <div className="py-16">
            <div className="flex justify-between font-medium text-medium items-center">
                {/* Showing */}
                <div>
                    <p>Showing {meta.from}-{meta.to} of {meta.total}</p>
                </div>
                {/* Sort */}
                <div className="flex gap-10 items-center">
                    <div className="flex items-center gap-4">
                        <label htmlFor="itemsPerPage" className="font-medium">Show Per Page:</label>
                        <select
                            id="itemsPerPage"
                            name="itemsPerPage"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="p-2 border rounded"
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-4">
                        <label htmlFor="sortType" className="font-medium">Sort By:</label>
                        <select
                            id="sortType"
                            name="sortType"
                            value={sortType}
                            onChange={handleSortTypeChange}
                            className="p-2 border rounded"
                        >
                            <option value="-published_at">Newest</option>
                            <option value="published_at">Oldest</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-6 justify-items-center">
                {ideas.map((idea) => (
                    <Card
                        key={idea.id}
                        title={idea.title}
                        date={idea.published_at}
                        img={idea.small_image[0].url}
                    />
                ))}
            </div>
            <div className="flex justify-center my-10 gap-5">
                <button className="text-3xl  hover:bg-primary rounded-lg hover:text-white" onClick={prevPage} disabled={currentPage === 1}>
                    <MdKeyboardDoubleArrowLeft />
                </button>
                <span className="font-bold"> Page {currentPage} of {meta.last_page} </span>
                <button className="text-3xl  hover:bg-primary rounded-lg hover:text-white" onClick={nextPage}>
                    <MdKeyboardDoubleArrowRight />
                </button>
            </div>
        </div>



    )
}