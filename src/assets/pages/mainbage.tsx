import Descover_blogs from "../componants/descover_blogs";
import Footer from "../componants/footer";
import HomeBage from "../componants/homeBage";
import Newblogs from "../componants/newblogs";
import SelectedArticles from "../componants/SelectedArticles";
import Subscribetous from "../componants/subscribetous";
import { useEffect, useState } from 'react';
import { getPosts, type Post } from '../../api/api';



function Mainbage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    loadPosts();
  }, []);

  return (
    <>
      <HomeBage />
      <SelectedArticles posts={posts} />
      <Descover_blogs posts={posts} />
      <Newblogs posts={posts} />
      <Subscribetous />
      <Footer />
    </>
  );
}

export default Mainbage
