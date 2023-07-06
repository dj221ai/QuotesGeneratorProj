import React, {useState, useEffect} from "react";

const Quotes = (props) => {
    const [data, setData] = useState([]);
    const [singleQuote, setSingleQuote] = useState();
    let quote_url = 'https://type.fit/api/quotes';

    useEffect (() => {
        let mounted = true;
        fetch(quote_url)
        .then(response => response.json())
        .then(jsondata => {
            // console.log(jsondata)
            if (mounted) {
                setData(jsondata);
                setSingleQuote(jsondata[0])
            }
        })
        return () => mounted = false;
    }, [])

    const getQuotesData = () => {
        setSingleQuote(data)
        console.log("single quote >>>> ", singleQuote)
    }

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={getQuotesData}>Generate Quote</button>
            <h3>
                <span>“</span>
                {singleQuote?.text}
                </h3>
                <i> - {singleQuote?.author}</i>
            {/* {data.map(
                item => <p>{item.text}</p>
            )} */}
            {/* <p>{singleQuote?.text}</p> */}

        </>
    )

}

export default Quotes;

