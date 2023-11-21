import React, { useEffect, useRef, useState } from "react";
// import url from "sever/url";
// import Api from "sever/Api";
import axios from "axios";
import lodash from "lodash";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

const Search = () => {
    const [search, setSearch] = useState("");
    const [shoe, setShoe] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const handleSearch = useRef({});

    handleSearch.current = async () => {
        try {
            // const rs = await axios.get(url.BASE_URL.PRODUCT.SEARCH`${search}`);
            setLoading(true);
            const rs = await axios.get(
                `https://semester3shoprunner.azurewebsites.net/api/Product/Search?search=${search}`
            );
            // console.log("check", rs);
            setShoe(rs.data || []);
            setLoading(false);
        } catch (error) {
            console.log("loi roi");
            setLoading(false);
        }
    };
    const handleLodash = lodash.debounce((e) => {
        setSearch(e.target.value);
    }, 500);
    useEffect(() => {
        search && search.length > 0 && handleSearch.current();
    }, [search]);
    const handleHideRusult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            interactive
            visible={showResult && search.length > 0}
            render={(attrs) => (
                <div className="item" tabIndex="-1" {...attrs}>
                    {loading && <p>Loading......</p>}
                    {!loading &&
                        shoe.length > 0 &&
                        shoe.map((item, id) => (
                            <NavLink to={`/products/${item.id}`} key={id}>
                                {item.name}
                            </NavLink>
                        ))}
                </div>
            )}
            onClickOutside={handleHideRusult}
            
        >
            <div className="search">
                <input
                    className="border-0 p-2 text-black"
                    type="search"
                    defaultValue={search}
                    onChange={handleLodash}
                    placeholder="Tìm Kiếm "
                    onFocus={() => setShowResult(true)}
                />

            </div>
        </Tippy>
    );
};

export default Search;
