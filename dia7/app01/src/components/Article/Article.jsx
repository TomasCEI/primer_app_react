const Article = ({title, children}) => {
    //console.log(props);

    return (
        <article className="article">
            <h2>{title}</h2>
            <div>{children}</div>
        </article>
    )
}

export default Article;