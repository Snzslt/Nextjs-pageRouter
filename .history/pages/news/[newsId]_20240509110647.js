import {useRouter} from 'next/router';
//our-domain.com/news/somthing-important
function DetailPage(){

    const router = useRouter();

    const newsId = router.query.newsId;

    //using this method we can send a ewquest to the backend API

    return <h1>The Detail Page </h1>
}
export default DetailPage;