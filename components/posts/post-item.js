import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
function PostItem(props) {
    const {title, image, excerpt, date, slug} = props.post;
    const formattedDate = new Date(date)
    .toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
    })
    .split(' ')
    .reverse()
    .join(' ');
    const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
export default PostItem;
