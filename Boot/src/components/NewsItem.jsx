import React from 'react';

function NewsItem({ title, description, src, url }) {
    return (
        <div>
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "350px" }}>
                <img style={{ height: "200px" }} src={src || 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'} className="card-img-top" alt={title || 'News image'} />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0, 30) : "News Removed"}</h5>
                    <p className="card-text">
                        {description ?
                            description.split(" ").slice(0, 20).join(" ") :
                            "This news is removed from the website"
                        }
                    </p>
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
