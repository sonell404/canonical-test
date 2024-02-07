const BlogCard = (post) => {
  return (
    <div
      key={post.id}
      className="blog-p-card--post col-4 p-card--highlighted blog-p-card__header"
    >
      <header className="">
        <h2 className="p-muted-heading">
          {post._embedded["wp:term"][1][0].name.toUpperCase()}
        </h2>
      </header>
      <div className="blog-p-card__content">
        <a href={post.link} target="_blank" rel="noreferrer">
          <img
            src={post.featured_media}
            alt={post.title.rendered}
            className="p-card__image"
          />
        </a>
        <a href={post.link} target="_blank" rel="noreferrer">
          <h3 className="p-heading--4">{post.title.rendered}</h3>
        </a>
        <p>
          <em className="">
            <i className="sph--small u-align-text--left">
              by{" "}
              <a
                href={post._embedded.author[0].link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="">{post._embedded.author[0].slug}</span>
              </a>{" "}
              <span className="">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </i>
          </em>
        </p>
      </div>
      <p className="blog-p-card__footer">Article</p>
    </div>
  );
};

export default BlogCard;
